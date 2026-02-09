"use client";

import { useCallback, useEffect, useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { QRCodeSVG } from "qrcode.react";

const CODE_REGEX = /^[a-zA-Z0-9]{4,}$/;
const POLL_INTERVAL_MS = 2000;

export default function HomePage() {
  const { t } = useI18n();
  const [code, setCode] = useState("");
  const [joined, setJoined] = useState(false);
  const [sendText, setSendText] = useState("");
  const [receivedContent, setReceivedContent] = useState<string | null>(null);
  const [pollError, setPollError] = useState("");
  const [sendLoading, setSendLoading] = useState(false);
  const [sendError, setSendError] = useState("");
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [destroying, setDestroying] = useState(false);

  const normalizedCode = code.trim().toLowerCase();
  const codeValid = normalizedCode.length >= 4 && CODE_REGEX.test(normalizedCode);

  // 从 URL ?code=xxx 预填口令
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("code")?.trim();
    if (fromUrl && CODE_REGEX.test(fromUrl)) {
      setCode(fromUrl);
      setJoined(true);
    }
  }, []);

  const fetchLatest = useCallback(async () => {
    if (!codeValid || !joined) return;
    try {
      const res = await fetch(
        `/api/clipboard?code=${encodeURIComponent(normalizedCode)}`
      );
      const json = (await res.json()) as {
        success: boolean;
        data?: { content: string; updated_at: number } | null;
      };
      if (!res.ok || !json.success) {
        setPollError(t.home.pollError);
        return;
      }
      setPollError("");
      if (json.data) {
        setReceivedContent(json.data.content);
      } else {
        setReceivedContent(null);
      }
    } catch {
      setPollError(t.home.pollError);
    }
  }, [normalizedCode, codeValid, joined, t.home.pollError]);

  // 每 2 秒轮询
  useEffect(() => {
    if (!codeValid || !joined) return;
    fetchLatest();
    const id = setInterval(fetchLatest, POLL_INTERVAL_MS);
    return () => clearInterval(id);
  }, [codeValid, joined, fetchLatest]);

  const handleJoin = () => {
    if (!code.trim()) return;
    if (!CODE_REGEX.test(code.trim())) return;
    setJoined(true);
  };

  const handleSend = async () => {
    if (!codeValid) return;
    setSendLoading(true);
    setSendError("");
    try {
      const res = await fetch("/api/clipboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: normalizedCode,
          content: sendText,
        }),
      });
      const json = (await res.json()) as { success: boolean; error?: string };
      if (!res.ok || !json.success) {
        setSendError(json.error || t.home.sendFailed);
        return;
      }
      setSendText("");
    } catch {
      setSendError(t.home.sendFailed);
    } finally {
      setSendLoading(false);
    }
  };

  const copyReceived = async () => {
    if (receivedContent == null) return;
    try {
      await navigator.clipboard.writeText(receivedContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const copyJoinLink = async () => {
    if (!joinUrl) return;
    try {
      await navigator.clipboard.writeText(joinUrl);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {}
  };

  const handleDestroy = async () => {
    if (!codeValid) return;
    setDestroying(true);
    try {
      await fetch(
        `/api/clipboard?code=${encodeURIComponent(normalizedCode)}`,
        { method: "DELETE" }
      );
      setJoined(false);
      setCode("");
      setReceivedContent(null);
      setSendText("");
    } finally {
      setDestroying(false);
    }
  };

  const joinError =
    !joined && code.trim() && !CODE_REGEX.test(code.trim())
      ? t.home.codeInvalid
      : "";

  const joinUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}?code=${encodeURIComponent(normalizedCode)}`
      : "";

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {t.home.title}
        </h1>
        <p className="text-muted-foreground">{t.home.subtitle}</p>
      </div>

      {!joined ? (
        <Card>
          <CardContent className="pt-6">
            <Label htmlFor="code" className="mb-2 block">
              {t.home.codeLabel}
            </Label>
            <Input
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\s/g, ""))}
              placeholder={t.home.codePlaceholder}
              className="text-center font-mono tracking-wider"
              autoComplete="off"
            />
            {joinError && (
              <p className="mt-2 text-sm text-destructive">{joinError}</p>
            )}
            <Button
              onClick={handleJoin}
              disabled={!code.trim() || !CODE_REGEX.test(code.trim())}
              className="w-full mt-4"
              size="lg"
            >
              {t.home.join}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                <p className="text-sm text-muted-foreground">
                  {t.home.codeLabel}:{" "}
                  <span className="font-mono text-foreground">
                    {normalizedCode}
                  </span>
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDestroy}
                  disabled={destroying}
                >
                  {t.home.destroyCode}
                </Button>
              </div>

              <Label className="mb-2 block">{t.home.sendLabel}</Label>
              <Textarea
                value={sendText}
                onChange={(e) => setSendText(e.target.value)}
                placeholder={t.home.sendPlaceholder}
                rows={4}
                className="resize-none mb-3"
              />
              {sendError && (
                <p className="text-sm text-destructive mb-2">{sendError}</p>
              )}
              <Button
                onClick={handleSend}
                disabled={sendLoading}
                className="w-full"
                size="lg"
              >
                {sendLoading ? t.home.sending : t.home.send}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-2">
                <Label>{t.home.receivedLabel}</Label>
                {receivedContent != null && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyReceived}
                  >
                    {copied ? t.home.copied : t.home.copy}
                  </Button>
                )}
              </div>
              {pollError && (
                <p className="text-sm text-destructive mb-2">{pollError}</p>
              )}
              <div className="min-h-[120px] rounded-lg border bg-muted/30 p-4">
                {receivedContent != null ? (
                  <pre className="whitespace-pre-wrap break-words text-sm font-sans">
                    {receivedContent}
                  </pre>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    {t.home.receivedEmpty}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {joinUrl && (
            <Card className="border-chart-2/30 bg-chart-2/5">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t.home.qrTitle}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t.home.qrHint}
                </p>
                <div className="flex justify-center mb-4">
                  <QRCodeSVG value={joinUrl} size={180} level="M" />
                </div>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={copyJoinLink}
                >
                  {linkCopied ? t.home.qrShareCopied : t.home.qrShare}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
