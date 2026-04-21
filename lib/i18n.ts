export type Language = "zh" | "en";

export type AboutSection = {
  heroTitle: string;
  heroSubtitle: string;
  serviceTitle: string;
  serviceP1: string;
  serviceP2: string;
  safe: string;
  safeDesc: string;
  privacy: string;
  privacyDesc: string;
  ttl: string;
  ttlDesc: string;
  fast: string;
  fastDesc: string;
  useCases: string;
  use1: string;
  use2: string;
  use3: string;
  contactTitle: string;
  contactDesc: string;
  contactEmail: string;
  supportTitle: string;
  supportDesc: string;
  share: Record<string, string>;
};

export type LangTranslations = {
  common: Record<string, string>;
  home: Record<string, string>;
  about: AboutSection;
};

export const translations: Record<Language, LangTranslations> = {
  zh: {
    common: {
      appName: "ShuttleLab",
      sync: "使用剪贴板",
      about: "关于",
      toggleLabel: "中/EN",
    },
    home: {
      title: "剪贴板穿梭机",
      subtitle: "用口令在手机电脑多个设备间同步剪贴板内容",
      codeLabel: "口令",
      codePlaceholder: "至少 4 位字母或数字，如 12ab",
      join: "进入",
      sendLabel: "要发送到剪贴板的内容",
      sendPlaceholder: "输入或粘贴文字，点击发送后另一端将收到",
      send: "发送",
      sending: "发送中…",
      receivedLabel: "当前剪贴板中的内容",
      receivedEmpty: "暂无内容，每 2 秒自动刷新",
      copied: "已复制",
      copy: "复制",
      qrTitle: "手机扫码即入",
      qrHint: "扫描后自动填入当前口令，无需再输入",
      qrShare: "一键转发",
      qrShareCopied: "已复制链接",
      codeInvalid: "口令至少 4 位字母或数字",
      codeRequired: "请输入口令",
      sendFailed: "发送失败",
      pollError: "拉取失败",
      destroyCode: "销毁当前口令和内容",
    },
    about: {
      heroTitle: "关于剪贴板穿梭机",
      heroSubtitle: "用口令在设备间同步剪贴板，简单私密",
      serviceTitle: "功能说明",
      serviceP1:
        "剪贴板穿梭机通过「口令」在两端同步剪贴板内容。两端输入相同口令（至少 4 位字母或数字）后，一端发送的文字会在另一端轮询展示；电脑端可生成二维码，手机扫码即可带入口令，无需再输入。",
      serviceP2: "无需注册登录，打开网页即可使用。",
      safe: "安全可靠",
      safeDesc: "数据经 HTTPS 传输，仅按口令临时存储，不收集个人信息。",
      privacy: "阅后即焚",
      privacyDesc: "内容在服务器仅保留 10 分钟，过期自动删除，不长期留存。",
      ttl: "限时存储",
      ttlDesc: "同一口令下的内容会被新内容覆盖；超时未取阅也会自动清除。",
      fast: "即开即用",
      fastDesc: "无需安装，浏览器输入口令即可同步；手机扫码即可配对。",
      useCases: "使用场景",
      use1: "电脑与手机之间互发文字、链接",
      use2: "两台电脑之间临时同步剪贴板",
      use3: "会议/教室内在自己设备间传内容",
      contactTitle: "联系",
      contactDesc: "如有问题或建议，欢迎反馈",
      contactEmail: "邮箱",
      supportTitle: "与君初相识，犹如故人归",
      supportDesc: "剪贴板穿梭机为免费服务，由站长个人维护。若对您有帮助，欢迎分享给朋友：",
      share: {
        copied: "✓ 网址已复制到剪贴板，发给好友即可",
        share: "分享给朋友",
      },
    },
  },
  en: {
    common: {
      appName: "ShuttleLab",
      sync: "Use Clipboard",
      about: "About",
      toggleLabel: "EN/中",
    },
    home: {
      title: "Clipboard Shuttle",
      subtitle: "Sync clipboard across phones, computers, and devices with a code",
      codeLabel: "Code",
      codePlaceholder: "At least 4 letters or numbers, e.g. 12ab",
      join: "Join",
      sendLabel: "Content to send to clipboard",
      sendPlaceholder: "Paste or type text; the other side will see it after you send",
      send: "Send",
      sending: "Sending…",
      receivedLabel: "Current clipboard content",
      receivedEmpty: "Nothing yet. Auto-refresh every 2 seconds.",
      copied: "Copied",
      copy: "Copy",
      qrTitle: "Scan to join on phone",
      qrHint: "Scanning fills in the code so you don’t need to type it.",
      qrShare: "Copy link",
      qrShareCopied: "Link copied",
      codeInvalid: "Code must be at least 4 letters or numbers",
      codeRequired: "Please enter a code",
      sendFailed: "Send failed",
      pollError: "Fetch failed",
      destroyCode: "Destroy code and content",
    },
    about: {
      heroTitle: "About Clipboard Shuttle",
      heroSubtitle: "Sync clipboard across devices with a code—simple and private",
      serviceTitle: "How it works",
      serviceP1:
        "Clipboard Shuttle syncs clipboard content between two sides using a shared code (at least 4 alphanumeric characters). After both sides enter the same code, text sent from one side appears on the other via polling. On desktop you can show a QR code; scanning it on your phone fills in the code so you don’t need to type it.",
      serviceP2: "No sign-up or login—just open the page and use it.",
      safe: "Secure",
      safeDesc: "Data is sent over HTTPS and stored only temporarily by code; we don’t collect personal information.",
      privacy: "Burn after read",
      privacyDesc: "Content is kept on the server for only 10 minutes, then automatically deleted and not retained.",
      ttl: "Time-limited storage",
      ttlDesc: "New content overwrites the previous under the same code; unread content is also cleared after expiry.",
      fast: "Use immediately",
      fastDesc: "No install—enter the code in your browser to sync; scan the QR code on your phone to pair.",
      useCases: "Use cases",
      use1: "Send text or links between computer and phone",
      use2: "Temporarily sync clipboard between two computers",
      use3: "Pass content between your own devices in meetings or class",
      contactTitle: "Contact",
      contactDesc: "For questions or feedback",
      contactEmail: "Email",
      supportTitle: "Meeting you for the first time feels like the return of an old friend",
      supportDesc: "Clipboard Shuttle is free and maintained by the owner. If it helps you, consider share with friends:",
      share: {
        copied: "✓ URL copied to clipboard. Send to your friend.",
        share: "Share with friends",
      },
    },
  },
};
