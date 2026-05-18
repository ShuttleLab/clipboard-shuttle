import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cross-Device Clipboard Sync — Free, No Account | Clipboard Shuttle",
  description:
    "Sync clipboard between your phone, laptop, desktop, and tablet. Works across iOS, Android, Windows, Mac, Linux. Free browser-based tool, no signup.",
  alternates: { canonical: "/tools/cross-device-clipboard" },
  openGraph: {
    title: "Cross-Device Clipboard Sync — Free, No Account",
    description:
      "Share clipboard across all your devices using a shared code. No app install, no account, works on any platform with a browser.",
    type: "article",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to sync clipboard across devices with Clipboard Shuttle",
  description:
    "Set up cross-device clipboard sync using a shared room code — works on any device with a browser.",
  totalTime: "PT30S",
  tool: { "@type": "HowToTool", name: "Web browser" },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open Clipboard Shuttle on every device",
      text: "Open clipboard.shuttlelab.org in the browser on each device you want to sync.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Enter the same code on all devices",
      text: "Type the same code (at least 4 letters or numbers) on every device and tap Join.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Send text from any device",
      text: "Paste or type content on any joined device and click Send. All other devices see it within 2 seconds.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Destroy when done",
      text: "Click the Destroy button on any device to clear the room. Otherwise, content auto-expires after 10 minutes.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a cross-device clipboard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A cross-device clipboard lets you copy text on one device and paste it on another — for example, copying a URL on your phone and opening it on your laptop. Clipboard Shuttle implements this via a shared room code and server-side polling every 2 seconds.",
      },
    },
    {
      "@type": "Question",
      name: "How many devices can I sync at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no limit. Any number of devices can join the same room code. All devices share the same content — the most recent send overwrites the previous one.",
      },
    },
    {
      "@type": "Question",
      name: "Does cross-device clipboard work between iPhone and Windows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Clipboard Shuttle works in any web browser — Safari on iPhone, Chrome on Windows, Firefox on Linux, etc. There are no platform restrictions. Apple's Universal Clipboard only works between Apple devices; Clipboard Shuttle fills that gap.",
      },
    },
    {
      "@type": "Question",
      name: "Is cross-device clipboard free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Clipboard Shuttle is completely free with no account, no ads, and no usage limits. It runs on Cloudflare Workers and D1, which keeps the cost near zero.",
      },
    },
    {
      "@type": "Question",
      name: "Is the content end-to-end encrypted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Data is encrypted in transit via HTTPS, but it is not end-to-end encrypted. Cloudflare Workers and D1 can access the plaintext server-side. The room code is public — anyone with the code can view the content. Do not use it for passwords or secrets.",
      },
    },
    {
      "@type": "Question",
      name: "What is the sync delay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The receiving device polls the server every 2 seconds, so the maximum delay is about 2 seconds from the moment you click Send. The sender's content is written to the server immediately.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Cross-Device Clipboard Sync — Free, No Account",
  description:
    "Guide to cross-device clipboard sync: how it works, why it's hard across OS boundaries, and how Clipboard Shuttle solves it with a browser-based room-code model.",
  author: { "@type": "Organization", name: "ShuttleLab" },
  publisher: {
    "@type": "Organization",
    name: "ShuttleLab",
    url: "https://shuttlelab.org",
  },
  url: "https://clipboard.shuttlelab.org/tools/cross-device-clipboard",
};

export default function CrossDeviceClipboardPage() {
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
            Cross-Device Clipboard Sync — Free, No Account
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed sm:text-xl">
            Copy on your phone, paste on your laptop. Or send from your desktop
            to your tablet. Clipboard Shuttle syncs text across all your devices
            using a shared code — no app install, no account, works on any
            platform with a browser.
          </p>
        </header>

        <section className="prose prose-base max-w-none space-y-12 text-foreground">
          <div>
            <h2 className="text-2xl font-bold mb-3">
              What is a cross-device clipboard?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A cross-device clipboard extends the familiar copy-paste
              experience across multiple devices. You copy text on your phone,
              and it appears on your laptop — ready to paste. This is
              especially useful when you work across different operating systems
              (iPhone + Windows, Android + Mac) where native solutions
              don&apos;t exist.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Apple offers Universal Clipboard, which syncs between Mac, iPhone,
              and iPad — but it requires the same Apple ID, Bluetooth enabled,
              Wi-Fi enabled, and Handoff turned on. It does not work with
              Windows or Android. Microsoft has no equivalent cross-device
              clipboard for phones. Google&apos;s Gboard clipboard sync works
              only between Android devices signed into the same account.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Clipboard Shuttle uses a different approach: a shared room code.
              Any device that opens the website and enters the same code joins
              the room. There are no platform requirements, no accounts, and no
              dependency on Bluetooth or local network proximity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              Why is cross-device clipboard hard?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The core challenge is that phones and computers run different
              operating systems with different clipboard APIs. iOS does not
              expose its clipboard to web pages without explicit user
              interaction. Android&apos;s clipboard is accessible to foreground
              apps but not to background services. Windows and macOS have their
              own clipboard APIs that don&apos;t communicate with mobile OSes.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              The existing solutions each have trade-offs:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed mt-3">
              <li>
                <strong>Apple Universal Clipboard:</strong> seamless but
                Apple-only. Requires Bluetooth, Wi-Fi, Handoff, and the same
                iCloud account across devices.
              </li>
              <li>
                <strong>Pushbullet:</strong> cross-platform but requires app
                installation on every device and account creation. Free tier
                has limits.
              </li>
              <li>
                <strong>Snapdrop / Nearby Share:</strong> peer-to-peer on the
                same local network. Doesn&apos;t work across different Wi-Fi
                networks or cellular connections.
              </li>
              <li>
                <strong>Cloud notes (Google Keep, Apple Notes):</strong> work
                everywhere but require opening the app, creating a note, and
                waiting for sync. Too slow for quick text transfer.
              </li>
              <li>
                <strong>Email / chat apps:</strong> universal but creates
                clutter and requires both sides to have the same app.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Clipboard Shuttle occupies a specific niche: instant, cross-
              platform, zero-install text transfer. It does not replace
              Pushbullet for file transfers or AirDrop for photos. It solves
              one problem — &ldquo;I need this text on my other device
              now&rdquo; — and solves it without friction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              How to sync clipboard across devices with Clipboard Shuttle
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground leading-relaxed">
              <li>
                <strong>Open Clipboard Shuttle on every device.</strong> Go to{" "}
                <code className="text-sm bg-muted px-1.5 py-0.5 rounded">
                  clipboard.shuttlelab.org
                </code>{" "}
                in any browser — Chrome, Safari, Firefox, Edge, Samsung
                Internet, or any other.
              </li>
              <li>
                <strong>Enter the same code on all devices.</strong> The code
                must be at least 4 alphanumeric characters (e.g.{" "}
                <code className="text-sm bg-muted px-1.5 py-0.5 rounded">
                  mars99
                </code>
                ). You invent the code — there is no registration or code
                generation system.
              </li>
              <li>
                <strong>
                  Paste or type content on any device, then tap Send.
                </strong>{" "}
                The content is written to the server immediately. On desktop, a
                QR code is shown so phone users can scan and join without
                typing the code.
              </li>
              <li>
                <strong>Read on all other devices.</strong> Every joined device
                polls the server every 2 seconds and displays the most recent
                content. You can copy it with one tap.
              </li>
              <li>
                <strong>Destroy when finished.</strong> Click the Destroy
                button to clear the room immediately. Otherwise, the server
                auto-deletes content after 10 minutes.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">
              Common cross-device clipboard issues
            </h2>
            <dl className="space-y-4">
              <div>
                <dt className="font-semibold mb-1">
                  Devices on different networks
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  Clipboard Shuttle works over the internet, not the local
                  network. Your phone on 4G and your laptop on Wi-Fi can both
                  join the same room. Each device connects to Cloudflare&apos;s
                  edge independently.
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  Content not updating on one device
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  The receiver polls every 2 seconds. If content doesn&apos;t
                  appear, check that the code matches exactly (case-insensitive,
                  but spaces are stripped). Also check that the 10-minute TTL
                  hasn&apos;t expired.
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  Two people accidentally use the same code
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  Codes have no ownership — anyone can enter any code. Short
                  codes like &ldquo;test&rdquo; or &ldquo;1234&rdquo; are
                  likely to collide. Use a longer, random code (6+ characters)
                  for private use.
                </dd>
              </div>
              <div>
                <dt className="font-semibold mb-1">
                  Need to sync files or images
                </dt>
                <dd className="text-muted-foreground leading-relaxed text-sm">
                  Clipboard Shuttle is text-only. For files, use cloud storage
                  (Google Drive, iCloud) or AirDrop (Apple-to-Apple). For
                  images, upload to a sharing service and paste the link.
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
                — start syncing with a code now
              </li>
              <li>
                <Link
                  href="/tools/phone-to-computer"
                  className="text-primary underline"
                >
                  Send Text From Phone to Computer
                </Link>{" "}
                — the specific phone-to-PC use case
              </li>
              <li>
                <Link href="/about" className="text-primary underline">
                  About Clipboard Shuttle
                </Link>{" "}
                — privacy model, use cases, full FAQ
              </li>
            </ul>
          </div>
        </section>
      </article>
    </>
  );
}
