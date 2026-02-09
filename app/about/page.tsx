import type { Metadata } from "next";
import AboutContent from "@/components/about-content";

export const metadata: Metadata = {
  title: "About - Clipboard Shuttle",
  description: "About Clipboard Shuttle: sync clipboard across devices with a code",
};

export default function AboutPage() {
  return <AboutContent />;
}
