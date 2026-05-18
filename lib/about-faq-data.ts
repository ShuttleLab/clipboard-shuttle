type Bilingual = { zh: string; en: string };
type Step = Bilingual;
type FaqItem = { q: Bilingual; a: Bilingual };
type HowTo = { id: string; name: Bilingual; steps: Step[] };

export const WHO_FOR: Bilingual[] = [
  {
    zh: "多设备办公的开发者——在笔记本、手机、服务器终端之间频繁搬运代码片段或命令",
    en: "Developers working across multiple devices — shuttling code snippets or commands between laptop, phone, and server terminal",
  },
  {
    zh: "在公司电脑和家里电脑之间传链接、配置文本的人",
    en: "People who send links and config text between their work PC and home PC",
  },
  {
    zh: "用 iPhone + Windows PC 的人——Apple AirDrop 和 Universal Clipboard 在跨平台时不可用",
    en: "iPhone + Windows PC users — Apple AirDrop and Universal Clipboard don't work across platforms",
  },
  {
    zh: "临时需要把 URL 或文本从手机传到电脑浏览器的人",
    en: "Anyone who needs to quickly get a URL or text from their phone into a desktop browser",
  },
];

export const WHEN_USE: Bilingual[] = [
  {
    zh: "在手机上看到一个链接，想立刻在电脑浏览器打开",
    en: "You found a link on your phone and want to open it on your computer right now",
  },
  {
    zh: "在公司电脑上复制了一段配置，想发到家里电脑继续用",
    en: "You copied a config snippet at work and need it on your home machine",
  },
  {
    zh: "给同事临时分享一段文本，不想走微信或邮件",
    en: "You want to share a text snippet with a coworker without using chat or email",
  },
  {
    zh: "iPhone 上的内容要发到 Windows 或 Linux——没有 AirDrop 可用",
    en: "You need to send content from an iPhone to a Windows or Linux machine — no AirDrop available",
  },
  {
    zh: "在虚拟机或远程服务器和本地之间快速传一段命令或密钥",
    en: "You need to quickly pass a command or key between a VM / remote server and your local machine",
  },
];

export const HOWTOS: HowTo[] = [
  {
    id: "sync",
    name: { zh: "如何在两台设备间同步剪贴板", en: "How to sync clipboard between two devices" },
    steps: [
      { zh: "在两台设备的浏览器中打开 clipboard.shuttlelab.org", en: "Open clipboard.shuttlelab.org in the browser on both devices" },
      { zh: "在两端输入相同的口令（至少 4 位字母或数字，如 ab12）", en: "Enter the same code on both sides (at least 4 letters or numbers, e.g. ab12)" },
      { zh: "在一端的文本框中粘贴或输入内容，点击「发送」", en: "Paste or type content in the text box on one side, then click Send" },
      { zh: "另一端每 2 秒自动刷新，内容会自动出现", en: "The other side polls every 2 seconds — your content appears automatically" },
    ],
  },
  {
    id: "qr",
    name: { zh: "如何通过二维码快速让手机加入", en: "How to use QR code to join from your phone" },
    steps: [
      { zh: "在电脑端输入口令并进入", en: "Enter a code on your desktop and join" },
      { zh: "页面会显示一个二维码", en: "The page displays a QR code" },
      { zh: "用手机扫描二维码，手机浏览器会自动打开并填入相同口令", en: "Scan the QR code with your phone — the browser opens and auto-fills the code" },
      { zh: "手机端直接粘贴内容发送即可", en: "Paste your content on the phone and send" },
    ],
  },
  {
    id: "destroy",
    name: { zh: "如何销毁当前剪贴板内容", en: "How to destroy current clipboard content" },
    steps: [
      { zh: "在已进入口令的页面上，点击「销毁当前口令和内容」按钮", en: "On the page where you've joined a code, click the Destroy button" },
      { zh: "服务器会立即删除该口令下存储的所有内容", en: "The server immediately deletes all content stored under that code" },
      { zh: "所有设备退出当前口令，回到初始状态", en: "All devices exit the code and return to the initial state" },
    ],
  },
];

export const FAQS: FaqItem[] = [
  {
    q: { zh: "剪贴板穿梭机免费吗？", en: "Is Clipboard Shuttle free?" },
    a: { zh: "完全免费，无需注册账号，没有广告，不追踪用户数据。", en: "Completely free — no account required, no ads, no user tracking." },
  },
  {
    q: { zh: "我的剪贴板内容是否被存储？存储多久？", en: "Is my clipboard content stored? For how long?" },
    a: { zh: "内容存储在 Cloudflare D1 数据库中，保留 10 分钟。超时后自动删除，不长期留存。同一口令下的新内容会覆盖旧内容。", en: "Content is stored in Cloudflare D1 for 10 minutes, then automatically deleted. No long-term retention. New content under the same code overwrites the previous content." },
  },
  {
    q: { zh: "加密吗？谁能看到我的内容？", en: "Is it encrypted? Who can see my content?" },
    a: { zh: "传输过程通过 HTTPS 加密。但内容在服务器端不是端到端加密的——Cloudflare Workers 和 D1 可以访问明文。口令是公开的，任何知道口令的人都能查看内容。请勿用于传输敏感密码或密钥。", en: "Data is encrypted in transit via HTTPS. However, content is not end-to-end encrypted on the server — Cloudflare Workers and D1 can access it in plaintext. The room code is public, so anyone with the code can view the content. Do not use it for sensitive passwords or keys." },
  },
  {
    q: { zh: "一个口令能加多少台设备？", en: "How many devices can join one code?" },
    a: { zh: "没有数量限制。所有设备共享同一口令即可读写同一份内容。", en: "No limit. Any number of devices sharing the same code can read and write the same content." },
  },
  {
    q: { zh: "支持图片或文件吗？", en: "Does it support images or files?" },
    a: { zh: "目前仅支持纯文本。不支持图片、文件或其他二进制数据。", en: "Currently text only. Images, files, and other binary data are not supported." },
  },
  {
    q: { zh: "同步延迟有多大？", en: "What is the sync delay?" },
    a: { zh: "接收端每 2 秒轮询一次服务器，因此最大延迟约 2 秒。发送端点击「发送」后立即写入服务器。", en: "The receiver polls the server every 2 seconds, so the maximum delay is about 2 seconds. The sender's content is written to the server immediately upon clicking Send." },
  },
  {
    q: { zh: "口令需要多长？怎么生成？", en: "How long does the code need to be? How do I generate one?" },
    a: { zh: "口令至少 4 位，只允许字母和数字（a-z、A-Z、0-9）。不需要系统生成——你自己想一个即可，两端输入相同就能配对。", en: "The code must be at least 4 characters — letters and numbers only (a-z, A-Z, 0-9). No system generation needed — make up any code, enter the same one on both sides to pair." },
  },
  {
    q: { zh: "离开页面后内容还在吗？", en: "Does content persist after I leave the page?" },
    a: { zh: "服务器上的内容在 10 分钟 TTL 到期后自动删除。如果你离开页面又回来，只要 TTL 未到期且口令相同，仍能读取最后一条内容。手动点击「销毁」可立即清除。", en: "Server-side content is deleted after the 10-minute TTL expires. If you leave and return before the TTL expires with the same code, you can still read the last content. Click Destroy to clear it immediately." },
  },
  {
    q: { zh: "和 Pushbullet / AirDrop 相比有什么不同？", en: "How does it compare to Pushbullet or AirDrop?" },
    a: { zh: "Pushbullet 需要安装 App 和注册账号；AirDrop 只限 Apple 设备且需要蓝牙和 Wi-Fi。剪贴板穿梭机无需安装、无需账号、跨平台，任何有浏览器的设备都能用，但仅支持纯文本。", en: "Pushbullet requires an app install and account; AirDrop only works between Apple devices and needs Bluetooth + Wi-Fi. Clipboard Shuttle requires no install, no account, and works on any device with a browser — but supports text only." },
  },
  {
    q: { zh: "如果两个人用了相同口令会怎样？", en: "What if two people use the same code?" },
    a: { zh: "会冲突。口令是公开的，没有所有权概念——任何知道口令的人都能读写该口令下的内容。建议使用足够长或随机的口令来避免与他人撞车。", en: "They'll conflict. Codes are public with no ownership — anyone who knows a code can read and write its content. Use a long or random code to avoid collisions with others." },
  },
];

export const COMPARISON = {
  zh: {
    heading: "剪贴板穿梭机与同类工具对比",
    columns: ["工具", "跨平台", "无需账号", "实时同步", "无需同一网络", "免费", "自动销毁"],
    rows: [
      ["剪贴板穿梭机", "✓", "✓", "✓ (2s 轮询)", "✓", "✓", "✓ (10 分钟)"],
      ["Pushbullet", "✓", "—", "✓", "✓", "部分免费", "—"],
      ["Snapdrop", "✓", "✓", "✓", "— (需同一网络)", "✓", "—"],
      ["Apple Universal Clipboard", "— (仅 Apple)", "✓", "✓", "— (需蓝牙+Wi-Fi)", "✓", "—"],
      ["微信文件传输助手", "✓", "— (需微信)", "—", "✓", "✓", "—"],
      ["Pastebin", "✓", "✓", "—", "✓", "✓", "可设置"],
    ],
  },
  en: {
    heading: "Clipboard Shuttle vs alternatives",
    columns: ["Tool", "Cross-platform", "No account", "Real-time sync", "No same network", "Free", "Auto-destruct"],
    rows: [
      ["Clipboard Shuttle", "✓", "✓", "✓ (2s poll)", "✓", "✓", "✓ (10 min)"],
      ["Pushbullet", "✓", "—", "✓", "✓", "Partially", "—"],
      ["Snapdrop", "✓", "✓", "✓", "— (same network)", "✓", "—"],
      ["Apple Universal Clipboard", "— (Apple only)", "✓", "✓", "— (BT+Wi-Fi)", "✓", "—"],
      ["WeChat File Transfer", "✓", "— (needs WeChat)", "—", "✓", "✓", "—"],
      ["Pastebin", "✓", "✓", "—", "✓", "✓", "Configurable"],
    ],
  },
};

export const HEADINGS = {
  whoFor: { zh: "剪贴板穿梭机适合谁？", en: "Who is Clipboard Shuttle for?" },
  whenUse: { zh: "什么时候用剪贴板穿梭机？", en: "When should I use Clipboard Shuttle?" },
  howTo: { zh: "操作步骤", en: "How to use" },
  faq: { zh: "常见问题", en: "Frequently Asked Questions" },
};
