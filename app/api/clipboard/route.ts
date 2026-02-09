import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const TTL_SECONDS = 600; // 10 分钟
const CODE_REGEX = /^[a-zA-Z0-9]{4,}$/;

function nowSeconds() {
  return Math.floor(Date.now() / 1000);
}

export async function GET(request: NextRequest) {
  try {
    const { env } = getRequestContext();
    const db = (env as { DB?: D1Database }).DB;
    if (!db) {
      return NextResponse.json(
        { success: false, error: "DB binding not found" },
        { status: 500 }
      );
    }

    const code = request.nextUrl.searchParams.get("code")?.trim().toLowerCase();
    if (!code) {
      return NextResponse.json(
        { success: false, error: "Missing code" },
        { status: 400 }
      );
    }
    if (!CODE_REGEX.test(code)) {
      return NextResponse.json(
        { success: false, error: "Invalid code (min 4 alphanumeric)" },
        { status: 400 }
      );
    }

    const row = await db
      .prepare("SELECT content, updated_at FROM clipboard WHERE code = ?")
      .bind(code)
      .first<{ content: string; updated_at: number }>();

    const now = nowSeconds();
    if (row && row.updated_at + TTL_SECONDS > now) {
      return NextResponse.json({
        success: true,
        data: { content: row.content, updated_at: row.updated_at },
      });
    }

    if (row) {
      await db.prepare("DELETE FROM clipboard WHERE code = ?").bind(code).run();
    }
    return NextResponse.json({ success: true, data: null });
  } catch (e) {
    console.error("GET /api/clipboard:", e);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { env } = getRequestContext();
    const db = (env as { DB?: D1Database }).DB;
    if (!db) {
      return NextResponse.json(
        { success: false, error: "DB binding not found" },
        { status: 500 }
      );
    }

    const body = (await request.json()) as { code?: string; content?: string };
    const code = body.code?.trim().toLowerCase();
    const content = body.content;

    if (!code || !CODE_REGEX.test(code)) {
      return NextResponse.json(
        { success: false, error: "Invalid code (min 4 alphanumeric)" },
        { status: 400 }
      );
    }
    if (typeof content !== "string") {
      return NextResponse.json(
        { success: false, error: "Missing content" },
        { status: 400 }
      );
    }

    const now = nowSeconds();
    await db
      .prepare(
        "INSERT INTO clipboard (code, content, updated_at) VALUES (?, ?, ?) ON CONFLICT(code) DO UPDATE SET content = excluded.content, updated_at = excluded.updated_at"
      )
      .bind(code, content, now)
      .run();

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("POST /api/clipboard:", e);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { env } = getRequestContext();
    const db = (env as { DB?: D1Database }).DB;
    if (!db) {
      return NextResponse.json(
        { success: false, error: "DB binding not found" },
        { status: 500 }
      );
    }

    const code = request.nextUrl.searchParams.get("code")?.trim().toLowerCase();
    if (!code) {
      return NextResponse.json(
        { success: false, error: "Missing code" },
        { status: 400 }
      );
    }

    await db.prepare("DELETE FROM clipboard WHERE code = ?").bind(code).run();
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("DELETE /api/clipboard:", e);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
