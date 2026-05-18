import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Send Text From Phone to Computer — No Apps, No Sign-up | Clipboard Shuttle",
  description:
    "Paste text from your phone to your PC (and back) instantly. Works across iPhone, Android, Windows, Mac, Linux. Free, no install, no account.",
  alternates: { canonical: "/tools/phone-to-computer" },
  openGraph: {
    title: "Send Text From Phone to Computer — Free, Instant, Cross-Platform",
    description:
      "Sync clipboard between your phone and computer with a shared code. No app install, no account needed.",
    type: "article",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to send text from phone to computer with Clipboard Shuttle",
  description:
    "Sync clipboard content between your phone and computer using a shared code — no app install or account required.",
  totalTime: "PT30S",
  tool: { "@type": "HowToTool", name: "Web browser" },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open the site on both devices",
      text: "Open clipboard.shuttlelab.org in the browser on your phone and your computer.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Enter the same code",
      text: "Type the same code (at least 4 letters or numbers) on both devices and tap Join.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Paste and send",
      text: "Paste or type your text on one side and click Send. The other device polls every 2 seconds and shows the content automatically.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Copy on the receiving side",
      text: "Copy the received text on the other device. Content auto-expires from the server after 10 minutes.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I send text from my iPhone to a Windows PC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open clipboard.shuttlelab.org in Safari on your iPhone and in any browser on your Windows PC. Enter the same code on both sides, paste your text on the phone, and tap Send. The text appears on your PC within 2 seconds. No app install or account needed.",
      },
    },
    {
      "@type": "Question",
      name: "Can I send text from Android to Mac?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Clipboard Shuttle works on any device with a web browser — Android, iPhone, Windows, Mac, Linux, even tablets. Open the site on both devices, enter a shared code, and send text either direction.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a size limit for the text I send?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clipboard Shuttle stores content as text in a Cloudflare D1 database row. While there is no hard character limit enforced in the API, very large payloads (over 100 KB) may slow down. For typical URLs, code snippets, and short messages, there are no issues.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to install anything?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Clipboard Shuttle runs entirely in your browser. There is no app to install, no browser extension, and no account to create. Just open the website on both devices.",
      },
    },
    {
      "@type": "Question",
      name: "Is my text secure when sending from phone to computer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Data is encrypted in transit via HTTPS. However, content is not end-to-end encrypted — Cloudflare Workers can access it server-side. The room code is public, so anyone with the code can view the content. Avoid sending passwords or sensitive credentials.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Send Text From Phone to Computer — No Apps, No Sign-up",
  description:
    "Complete guide to sending text, links, and code snippets from your phone to your computer (and back) using Clipboard Shuttle — a free browser-based tool.",
  author: { "@type": "Organization", name: "ShuttleLab" },
  publisher: {
    "@type": "Organization",
    name: "ShuttleLab",
    url: "https://shuttlelab.org",
  },
  url: "https://clipboard.shuttlelab.org/tools/phone-to-computer",
};

export default function PhoneToComputerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="mb-8 sm:mb-12">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Send Text From Phone to Computer (and Back) — No Apps, No Sign-up
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed sm:text-xl">
            You found a link on your phone. You need it on your PC. Or you
            copied a code snippet at your desk and want it on your tablet.
            Clipboard Shuttle lets you move text between any two devices in
            seconds — just open a browser.
          </p>
        </header>

        <section className="prose prose-base max-w-none space-y-12 text-foreground">
          <div>
            <h2 className="text-2xl font-bold mb-3">
              Why is sending text from phone to computer still annoying?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              In 2026, moving a piece of text from your phone to your computer
              is still surprisingly painful. You could email it to yourself, but
              that creates clutter. You could use a chat app, but that requires
              both sides to have the same app installed. Apple&apos;s Universal
              Clipboard works seamlessly — but only between Apple devices with
              the same iCloud account, Bluetooth, and Wi-Fi enabled.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              If you use an iPhone with a Windows PC, or an Android phone with a
              Mac, there is no built-in solution. Third-party tools like
              Pushbullet require app installs and account creation. Cloud-based
              note apps work but add friction — you have to open the app, create
              a note, then find it on the other side.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Clipboard Shuttle solves this with a different model: a shared
              code. No accounts. No installs. No platform restrictions. Any
              device with a web browser can join.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              When do you need phone-to-PC text transfer?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>
                <strong>Opening a phone link on your computer</strong> — you
                found an article, a product page, or a map link on your phone
                and want to open it in your desktop browser for easier reading.
              </li>
              <li>
                <strong>Continuing work across locations</strong> — you copied a
                code snippet, a terminal command, or a config block at work and
                need it on your home machine.
              </li>
              <li>
                <strong>Sharing a Wi-Fi password or OTP</strong> — a guest asks
                for the Wi-Fi password, and it&apos;s on your phone. Send it to
                your computer to display on a bigger screen.
              </li>
              <li>
                <strong>Crossing the Apple-Windows divide</strong> — you use an
                iPhone but your work computer is Windows. AirDrop and Universal
                Clipboard are not available.
              </li>
              <li>
                <strong>Quick text from a VM or remote server</strong> — you
                need to pass a short string between a remote session and your
                local device without setting up shared clipboards.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              How to send text from phone to computer with Clipboard Shuttle
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
              <li>
                <strong>Open the site on both devices.</strong> Navigate to{" "}
                <code className="text-sm bg-muted px-1.5 py-0.5 rounded">
                  clipboard.shuttlelab.org
                </code>{" "}
                in any browser on your phone and your computer.
              </li>
              <li>
                <strong>Enter the same code on both sides.</strong> The code
                must be at least 4 letters or numbers (e.g.{" "}
                <code className="text-sm bg-muted px-1.5 py-0.5 rounded">
                  blue42
                </code>
                ). You make it up — no system-generated codes.
              </li>
              <li>
                <strong>Paste or type your text, then tap Send.</strong> On
                desktop, you can also scan a QR code to auto-fill the code on
                your phone.
              </li>
              <li>
                <strong>Copy on the receiving side.</strong> The other device
                polls every 2 seconds and displays the content automatically.
                Content is stored server-side for 10 minutes, then
                auto-deleted.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              Privacy and security: what happens to your text?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Clipboard Shuttle is a server-mediated sync tool, not a
              peer-to-peer connection. Here is what that means for your data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed mt-3">
              <li>
                <strong>In transit:</strong> all data is encrypted via HTTPS
                between your device and Cloudflare&apos;s edge network.
              </li>
              <li>
                <strong>At rest:</strong> content is stored in a Cloudflare D1
                database (SQLite at the edge) for up to 10 minutes. There is no
                end-to-end encryption — Cloudflare Workers can read the
                plaintext.
              </li>
              <li>
                <strong>Room codes are public:</strong> anyone who knows your
                code can read and write to that room. Use a long or random code
                to reduce the chance of collisions.
              </li>
              <li>
                <strong>No accounts, no logs:</strong> Clipboard Shuttle does
                not require registration and does not log personal information.
                Content is keyed only by code.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              For passwords, API keys, and other sensitive credentials, use a
              dedicated secrets manager instead.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              Common phone-to-PC sync issues
            </h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold mb-1">
                  &ldquo;I entered the same code but nothing appears&rdquo;
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  Make sure both devices have entered the code and clicked
                  &ldquo;Join&rdquo;. The receiving side polls every 2 seconds —
                  wait a moment after sending. If the code&apos;s 10-minute TTL
                  has expired, the content is gone; send again.
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  &ldquo;Someone else is in my room&rdquo;
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  Room codes are public. If you used a short or common code like
                  &ldquo;test&rdquo; or &ldquo;1234&rdquo;, someone else may
                  have entered the same code. Use a longer, more random code
                  (e.g. &ldquo;x7kQ9m&rdquo;) to avoid collisions.
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  &ldquo;Can I send images or files?&rdquo;
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  No. Clipboard Shuttle supports plain text only. For images,
                  use AirDrop (Apple-to-Apple), email, or a cloud storage link.
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  &ldquo;I closed the page — is my data still there?&rdquo;
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  The last content sent under your code remains on the server
                  for 10 minutes. If you reopen the page and re-enter the same
                  code within that window, you can still read it. After 10
                  minutes, it is permanently deleted.
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-6">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name}>
                  <dt className="font-semibold mb-2">{q.name}</dt>
                  <dd className="text-muted-foreground leading-relaxed">
                    {q.acceptedAnswer.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-xl font-bold mb-3">Related tools</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary underline">
                  Clipboard Shuttle — Home
                </Link>{" "}
                — start syncing now
              </li>
              <li>
                <Link
                  href="/tools/cross-device-clipboard"
                  className="text-primary underline"
                >
                  Cross-Device Clipboard Sync
                </Link>{" "}
                — for syncing between 3+ devices
              </li>
              <li>
                <Link href="/about" className="text-primary underline">
                  About Clipboard Shuttle
                </Link>{" "}
                — privacy, use cases, full FAQ
              </li>
            </ul>
          </div>
        </section>
      </article>
    </>
  );
}
