import Image from "next/image";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Code2,
  Fingerprint,
  Mail,
  MapPin,
  Phone,
  Server,
  Wind,
  Wrench,
} from "lucide-react";
import { services, site, stats, steps } from "@/lib/site";

const icons = {
  code: Code2,
  fingerprint: Fingerprint,
  wind: Wind,
  server: Server,
  camera: Camera,
  wrench: Wrench,
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

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="One partner for technology and technical services."
            description="We combine software expertise with hands-on technical work, so you can rely on a single team for both your systems and your facilities."
          />
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article
                key={service.title}
                className="group relative bg-white p-8 transition-colors duration-300 hover:bg-ink sm:p-10"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60 transition-colors duration-300 group-hover:text-white/65">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand"
                >
                  Inquire
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function About() {
  const points = [
    "In-house developers and certified technicians",
    "Transparent quotes and clear timelines",
    "After-sales support and maintenance plans",
    "Trusted by offices, schools and businesses",
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
            title="A tech company with a hands-on approach."
            description={`${site.name} brings together software engineering, security technology and technical services under one roof. We believe great technology should be simple to use, dependable, and backed by people who show up.`}
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
            Work with us
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
          eyebrow="How we work"
          title="A simple process, done right."
          description="Whether it's a new system or a routine service call, every engagement follows the same clear steps."
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
            description="Tell us about your project or service request and our team will get back to you within one business day."
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
              <span className="text-sm font-medium text-ink">Service</span>
              <select
                name="service"
                className="mt-2 w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((s) => (
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
              placeholder="Tell us a bit about your needs…"
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
