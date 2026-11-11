import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  Code2,
  Fingerprint,
  Mail,
  MapPin,
  Phone,
  Server,
  ShieldCheck,
  CreditCard,
  Truck,
} from "lucide-react";
import { productPerks, products, site, stats, steps } from "@/lib/site";

const icons = {
  code: Code2,
  fingerprint: Fingerprint,
  server: Server,
  camera: Camera,
};

const perkIcons = {
  badge: BadgeCheck,
  card: CreditCard,
  truck: Truck,
  shield: ShieldCheck,
};

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-brand uppercase">
        <span className="h-px w-8 bg-brand" />
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/65" : "text-ink/60"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="scroll-mt-16 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our products"
            title="Technology hardware and software, all in one shop."
            description="We sell biometric devices, CCTV cameras, networking equipment and our own SaaS products online — sourced from trusted brands and delivered to your door."
          />
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white lg:self-auto"
          >
            Request a quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {products.map((product, i) => {
            const Icon = icons[product.icon];
            const contain = "contain" in product && product.contain;
            return (
              <article
                key={product.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-2xl hover:shadow-black/10"
              >
                <div
                  className={`relative aspect-[16/9] overflow-hidden ${contain ? "bg-white" : "bg-ink"}`}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={`transition-transform duration-700 ease-out group-hover:scale-105 ${
                      contain ? "object-contain p-4" : "object-cover opacity-90"
                    }`}
                  />
                  {!contain && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  )}
                  <span className="absolute top-5 left-5 rounded-full bg-white/90 px-3 py-1 font-mono text-xs font-medium text-ink backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`absolute top-5 right-5 grid size-10 place-items-center rounded-full text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 ${contain ? "bg-ink/80" : "bg-white/15"}`}
                  >
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>

                <div className="relative flex flex-1 flex-col px-7 pt-10 pb-7 sm:px-8">
                  <span className="absolute -top-7 left-7 grid size-14 place-items-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/30 ring-4 ring-white sm:left-8">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-ink">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    {product.description}
                  </p>
                  <ul className="mt-5 mb-8 flex flex-wrap gap-2">
                    {product.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-ink/70 transition-colors group-hover:bg-brand/10 group-hover:text-brand-dark"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between border-t border-black/5 pt-6">
                    <span className="text-xs tracking-wider text-ink/45 uppercase">
                      Available to order
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-brand after:absolute after:inset-0"
                      aria-label={`Request a quote for ${product.title}`}
                    >
                      Request a quote
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {productPerks.map((perk) => {
            const Icon = perkIcons[perk.icon];
            return (
              <li key={perk.title} className="flex items-center gap-4 bg-neutral-50 p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-brand shadow-sm">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{perk.title}</p>
                  <p className="text-xs text-ink/55">{perk.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function About() {
  const points = [
    "Genuine products from trusted brands",
    "Transparent pricing and quick quotations",
    "Secure online payment",
    "Product warranty and after-sales assistance",
  ];

  return (
    <section id="about" className="scroll-mt-16 bg-neutral-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
              alt="MPTB Solutions office"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-6 rounded-2xl bg-brand p-6 text-white shadow-xl sm:-right-8 sm:p-8">
            <p className="text-4xl font-semibold tracking-tight">10+</p>
            <p className="mt-1 text-sm text-white/80">Years of combined
              <br />
              industry experience
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Who we are"
            title="Your online source for business technology."
            description={`${site.name} is an online retailer of technology products — biometric devices, CCTV and security systems, networking equipment — and the developer of our own proprietary SaaS software. We make it simple to find, order and pay for the tech your business needs.`}
          />
          <ul className="mt-10 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-ink/80">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                {point}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand"
          >
            Shop our products
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="bg-ink py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="border-l border-brand pl-6">
            <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-white/55">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="scroll-mt-16 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="How to order"
          title="Ordering made simple."
          description="Whether you need a single device or a full set of equipment, every order follows the same easy steps."
        />
        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="font-mono text-sm text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-4 h-px w-full bg-black/10">
                <div className="h-px w-12 bg-brand" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  const details = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Office", value: site.address },
  ];

  return (
    <section id="contact" className="scroll-mt-16 bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            light
            eyebrow="Get in touch"
            title="Let's talk about what you need."
            description="Tell us which products you're interested in and our team will send you a quotation within one business day."
          />
          <ul className="mt-12 space-y-6">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-full border border-white/15 text-brand">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs tracking-wider text-white/45 uppercase">{label}</p>
                  {href ? (
                    <a href={href} className="text-white transition-colors hover:text-brand">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
          className="rounded-2xl bg-white p-8 sm:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <label className="block">
              <span className="text-sm font-medium text-ink">Product</span>
              <select
                name="product"
                className="mt-2 w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a product
                </option>
                {products.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
                <option>Other</option>
              </select>
            </label>
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-medium text-ink">Message</span>
            <textarea
              name="message"
              rows={5}
              required
              className="mt-2 w-full resize-none rounded-lg border border-black/15 px-4 py-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
              placeholder="Tell us the products, models and quantities you need…"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Send Message
            <ArrowRight className="size-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-black/15 px-4 py-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </label>
  );
}
