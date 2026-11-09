import { navLinks, services, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">{site.tagline}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">Company</p>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/55 hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Services</p>
          <ul className="mt-4 space-y-3">
            {services.map((s) => (
              <li key={s.title}>
                <a href="#services" className="text-sm text-white/55 hover:text-brand">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-white/40 lg:px-8">
          © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
