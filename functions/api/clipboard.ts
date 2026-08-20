interface Env {
  DB: D1Database;
}

const TTL_SECONDS = 600; // 10 分钟
const CODE_REGEX = /^[a-zA-Z0-9]{4,}$/;

function nowSeconds() {
  return Math.floor(Date.now() / 1000);
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get("code")?.trim().toLowerCase();
    if (!code) {
      return Response.json(
        { success: false, error: "Missing code" },
        { status: 400 }
      );
    }
    if (!CODE_REGEX.test(code)) {
      return Response.json(
        { success: false, error: "Invalid code (min 4 alphanumeric)" },
        { status: 400 }
      );
    }

    const row = await env.DB
      .prepare("SELECT content, updated_at FROM clipboard WHERE code = ?")
      .bind(code)
      .first<{ content: string; updated_at: number }>();

    const now = nowSeconds();
    if (row && row.updated_at + TTL_SECONDS > now) {
      return Response.json({
        success: true,
        data: { content: row.content, updated_at: row.updated_at },
      });
    }

    if (row) {
      await env.DB.prepare("DELETE FROM clipboard WHERE code = ?").bind(code).run();
    }
    return Response.json({ success: true, data: null });
  } catch (e) {
    console.error("GET /api/clipboard:", e);
    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  try {
    const body = (await request.json()) as { code?: string; content?: string };
    const code = body.code?.trim().toLowerCase();
    const content = body.content;

    if (!code || !CODE_REGEX.test(code)) {
      return Response.json(
        { success: false, error: "Invalid code (min 4 alphanumeric)" },
        { status: 400 }
      );
    }
    if (typeof content !== "string") {
      return Response.json(
        { success: false, error: "Missing content" },
        { status: 400 }
      );
    }

    const now = nowSeconds();
    await env.DB
      .prepare(
        "INSERT INTO clipboard (code, content, updated_at) VALUES (?, ?, ?) ON CONFLICT(code) DO UPDATE SET content = excluded.content, updated_at = excluded.updated_at"
      )
      .bind(code, content, now)
      .run();

    return Response.json({ success: true });
  } catch (e) {
    console.error("POST /api/clipboard:", e);
    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
};

export const onRequestDelete: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get("code")?.trim().toLowerCase();
    if (!code) {
      return Response.json(
        { success: false, error: "Missing code" },
        { status: 400 }
      );
    }

    await env.DB.prepare("DELETE FROM clipboard WHERE code = ?").bind(code).run();
    return Response.json({ success: true });
  } catch (e) {
    console.error("DELETE /api/clipboard:", e);
    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
};
