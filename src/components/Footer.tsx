import { legalLinks, navLinks, products, site } from "@/lib/site";
import { Logo } from "./Logo";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sm text-white/55 hover:text-brand">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="sm:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">{site.tagline}</p>
        </div>
        <FooterColumn title="Company" links={navLinks} />
        <FooterColumn
          title="Products"
          links={products.map((p) => ({ label: p.title, href: "/#products" }))}
        />
        <FooterColumn title="Legal" links={legalLinks} />
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-white/40 lg:px-8">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
