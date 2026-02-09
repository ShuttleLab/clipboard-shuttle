"use client";

import { useI18n } from "@/components/i18n-provider";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-muted border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-muted-foreground text-sm">
          <p>
            &copy; {new Date().getFullYear()} {t.common.appName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
