import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";

type HeroProps = {
  isHome?: boolean;
  title: string;
  subtitle: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  backgroundImage: string;
};

type HeroTileProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  tall?: boolean;
};

function HeroTile({ title, subtitle, imageSrc, tall }: HeroTileProps) {
  return (
    <div className="rounded-3xl overflow-hidden bg-white shadow-sm border border-border/40 flex flex-col h-full">
      <div
        className={cn(
          "relative w-full",
          tall ? "aspect-[3/4]" : "aspect-[4/5]"
        )}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="px-5 py-4 md:px-6 md:py-5 text-left">
        <p className="text-[0.7rem] md:text-xs font-semibold uppercase tracking-[0.25em] text-navy/50 mb-1">
          {subtitle}
        </p>
        <p className="text-base md:text-lg font-semibold text-navy font-sora leading-snug">
          {title}
        </p>
      </div>
    </div>
  );
}

export default function Hero({
  isHome,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
}: HeroProps) {
  const showCTAs = primaryCTA || secondaryCTA;

  // Home hero: light, centered layout similar to reference
  if (isHome) {
    return (
      <section
        className={cn(
          "relative overflow-hidden bg-gradient-to-b from-white via-[#f5f8ff] to-[#e6f3ff]",
          "pt-28 pb-16 sm:pb-20 md:pb-24"
        )}
        aria-labelledby="page-hero-heading"
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal animation="fade-up" className="mb-4">
              <p className="text-xs sm:text-sm font-dm-sans font-semibold uppercase tracking-[0.35em] text-navy/50">
                United States Recruitment & Staffing
              </p>
            </Reveal>

            <Reveal animation="fade-up" delayMs={80}>
              <h1
                id="page-hero-heading"
                className={cn(
                  "font-sora font-semibold text-navy tracking-tight",
                  "text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem]"
                )}
              >
                {title}
              </h1>
            </Reveal>

            <Reveal animation="fade-up" delayMs={150}>
              <p className="mt-4 md:mt-5 text-sm sm:text-base md:text-lg text-muted leading-relaxed max-w-2xl mx-auto font-dm-sans">
                {subtitle}
              </p>
            </Reveal>

            {showCTAs && primaryCTA && (
              <Reveal animation="fade-up" delayMs={220}>
                <div className="mt-7 md:mt-8 flex justify-center">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-11 sm:h-12 md:h-13 px-8 md:px-9 rounded-full text-sm md:text-base border-navy text-navy bg-white hover:bg-navy hover:text-white transition-colors"
                  >
                    <Link href={primaryCTA.href}>{primaryCTA.label}</Link>
                  </Button>
                </div>
              </Reveal>
            )}
          </div>

          {/* Image cards row */}
          <Reveal animation="fade-up" delayMs={260} className="mt-10 md:mt-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
              <div className="sm:translate-y-4 md:translate-y-6 transition-transform">
                <HeroTile
                  title="Hire Exceptional Teams"
                  subtitle="For Employers"
                  imageSrc="/images/hero-employers.png"
                />
              </div>
              <div className="sm:-translate-y-2 md:-translate-y-4 transition-transform">
                <HeroTile
                  title="Find Your Next Role"
                  subtitle="For Candidates"
                  imageSrc="/images/candidates-hero.png"
                  tall
                />
              </div>
              <div className="sm:translate-y-1 md:translate-y-3 transition-transform">
                <HeroTile
                  title="Across US Industries"
                  subtitle="Specialized Sectors"
                  imageSrc="/images/hero-industries.png"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  // Default hero: full-width background image for inner pages
  return (
    <section
      className={cn(
        "relative overflow-hidden text-white",
        "min-h-screen flex items-center"
      )}
      aria-labelledby="page-hero-heading"
    >
      {/* Full-screen background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt={isHome ? "Maxera Talent staffing and recruitment" : title}
          fill
          priority={isHome}
          className="object-cover scale-105"
        />
        {/* Subtle gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/55 to-navy/80" />
      </div>

      <div className="container-custom relative z-10 py-24 md:py-28">
        <div className="max-w-3xl">
          <Reveal animation="fade-up" className="mb-5">
              {isHome && (
                <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-5 py-2 text-[0.65rem] sm:text-xs font-semibold uppercase tracking-[0.35em] text-white/80 border border-white/15">
                  <Sparkles className="w-4 h-4 text-orange" />
                  <span>United States Staffing & Recruitment</span>
                </div>
              )}
          </Reveal>

          <Reveal animation="fade-up" delayMs={80}>
              <h1
                id="page-hero-heading"
                className={cn(
                  "font-sora font-bold leading-[1.05] tracking-tight",
                  "text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
                )}
              >
                {title}
              </h1>
            </Reveal>

          <Reveal animation="fade-up" delayMs={150}>
              <p className="mt-5 md:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-white/85 font-dm-sans">
                {subtitle}
              </p>
            </Reveal>

          {showCTAs && (
            <Reveal animation="fade-up" delayMs={220}>
                <div className="mt-8 inline-flex w-full max-w-xl flex-col gap-4 rounded-2xl bg-white/10 p-4 sm:p-5 backdrop-blur-2xl border border-white/20">
                  <div className="flex flex-wrap items-center gap-3">
                    {primaryCTA && (
                      <Button
                        asChild
                        variant="primary"
                        size="lg"
                        className="h-14 md:h-16 px-8 md:px-10 rounded-full text-base md:text-lg shadow-lg hover:shadow-orange/40 hover:scale-[1.02] active:scale-[0.98] transition-transform group"
                      >
                        <Link href={primaryCTA.href} className="flex items-center gap-2">
                          {primaryCTA.label}
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    )}

                    {secondaryCTA && (
                      <Button
                        asChild
                        variant="outlineWhite"
                        size="lg"
                        className="h-14 md:h-16 px-8 md:px-10 rounded-full text-base md:text-lg bg-white/5 hover:bg-white hover:text-navy border-white/40 transition-colors"
                      >
                        <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
                      </Button>
                    )}
                  </div>

                  {isHome && (
                    <p className="text-xs sm:text-sm text-white/75 font-dm-sans">
                      For employers and candidates across the US, MaxeraTalent turns hiring into a
                      precise, predictable process.
                    </p>
                  )}
                </div>
            </Reveal>
          )}
        </div>
      </div>

      {/* Subtle scroll indicator */}
      {isHome && (
        <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
          <div className="flex flex-col items-center gap-2 text-[0.65rem] sm:text-xs text-white/60">
            <span className="uppercase tracking-[0.3em] font-medium">
              Scroll to see how it works
            </span>
            <div className="flex h-10 w-7 items-start justify-center rounded-full border border-white/30 p-1">
              <span className="h-2 w-2 rounded-full bg-white animate-bounce" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
