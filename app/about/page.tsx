import type { Metadata } from "next";
import AboutContent from "@/components/about-content";
import { AboutFaq } from "@/components/about-faq";
import { FAQS, HOWTOS } from "@/lib/about-faq-data";

export const metadata: Metadata = {
  title: "About Clipboard Shuttle | 关于剪贴板穿梭机",
  description:
    "Clipboard Shuttle syncs clipboard across devices with a shared code. Learn how it works, use cases, privacy model, and answers to frequent questions.",
  alternates: { canonical: "/about" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((item) => ({
    "@type": "Question",
    name: item.q.en,
    acceptedAnswer: { "@type": "Answer", text: item.a.en },
  })),
};

const howToSchemas = HOWTOS.map((ht) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: ht.name.en,
  step: ht.steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    text: s.en,
  })),
}));

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {howToSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <AboutContent />
      <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <AboutFaq />
      </div>
    </>
  );
}
