import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "./Footer";
import { Logo } from "./Logo";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <header className="border-b border-black/10 bg-white">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-brand"
          >
            <ArrowLeft className="size-4" />
            Back to shop
          </Link>
        </nav>
      </header>

      <main className="flex-1 bg-white py-16 sm:py-24">
        <article className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-ink/50">Last updated: {updated}</p>
          <p className="mt-8 leading-relaxed text-ink/70">{intro}</p>

          {sections.map((section, i) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-lg font-semibold text-ink">
                {i + 1}. {section.heading}
              </h2>
              {section.paragraphs?.map((p) => (
                <p key={p} className="mt-3 leading-relaxed text-ink/70">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-ink/70">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </main>

      <Footer />
    </>
  );
}
