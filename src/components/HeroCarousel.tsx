"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/lib/site";

const INTERVAL = 6000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = heroSlides.length;

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  return (
    <section
      id="home"
      className="relative h-svh min-h-[600px] w-full overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Highlights"
    >
      {heroSlides.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={i !== index}
          aria-roledescription="slide"
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-transform duration-[7000ms] ease-out ${
              i === index ? "scale-105" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

          {i === index && (
            <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
              <div className="max-w-2xl">
                <p className="animate-fade-up mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-brand uppercase">
                  <span className="h-px w-10 bg-brand" />
                  {slide.eyebrow}
                </p>
                <h1
                  className="animate-fade-up text-4xl leading-[1.1] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
                  style={{ animationDelay: "100ms" }}
                >
                  {slide.title}
                </h1>
                <p
                  className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg"
                  style={{ animationDelay: "200ms" }}
                >
                  {slide.description}
                </p>
                <div
                  className="animate-fade-up mt-10 flex flex-wrap gap-4"
                  style={{ animationDelay: "300ms" }}
                >
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
                  >
                    Explore Services
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-10 mx-auto flex max-w-7xl items-end justify-between px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => go(i)}
              className="group py-3"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
            >
              <span className="relative block h-0.5 w-10 overflow-hidden bg-white/25 sm:w-16">
                {i === index && (
                  <span
                    key={index}
                    className="absolute inset-0 origin-left bg-brand"
                    style={{
                      // The progress animation doubles as the autoplay timer.
                      animation: `progress ${INTERVAL}ms linear forwards`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                    onAnimationEnd={next}
                  />
                )}
              </span>
            </button>
          ))}
          <span className="ml-3 hidden font-mono text-xs whitespace-nowrap text-white/60 sm:inline">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="grid size-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-brand hover:bg-brand"
            aria-label="Previous slide"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="grid size-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:border-brand hover:bg-brand"
            aria-label="Next slide"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
