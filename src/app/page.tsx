import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, TrendingUp, Users, Award, ArrowRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import ChevronServiceCards from "@/components/sections/ChevronServiceCards";
import JobSearchBar from "@/components/sections/JobSearchBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import HiringProcess from "@/components/sections/HiringProcess";
import Testimonials from "@/components/sections/Testimonials";
import TrustedBy from "@/components/sections/TrustedBy";
import CTABanner from "@/components/sections/CTABanner";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Maxera Talent | United States Recruitment & Staffing Authority",
  description: "Maxera Talent connects top US companies with vetted professionals in tech, healthcare, and finance. Precision-driven staffing solutions.",
};

const STATS = [
  { icon: Users, value: "5000+", label: "Successful Placements", color: "text-orange" },
  { icon: TrendingUp, value: "120+", label: "Hiring Partners", color: "text-orange" },
  { icon: Award, value: "15+", label: "Industries Served", color: "text-orange" },
  { icon: CheckCircle2, value: "98%", label: "Client Satisfaction", color: "text-orange" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Hero
        isHome
        title="Connecting Top Talent with High-Growth Companies"
        subtitle="MaxeraTalent delivers specialized workforce solutions across technology, healthcare, finance, and operations — helping businesses scale faster with the right people."
        primaryCTA={{ label: "Hire Talent", href: "/employers" }}
        secondaryCTA={{ label: "Find Jobs", href: "/jobs" }}
        backgroundImage="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Enhanced Trust stats strip */}
      <section className="bg-navy relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy-dark to-navy" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-orange/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-teal/10 rounded-full blur-[80px]" />
        </div>
        
        <div className="container-custom relative z-10 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {STATS.map((stat, index) => (
              <div key={stat.label} className="relative group">
                {/* Connecting line for desktop */}
                {index < STATS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 w-8 lg:w-12 h-px bg-white/10" />
                )}
                
                <div className="flex items-center gap-3 md:block">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center mb-3 md:mb-4 ${stat.color} group-hover:bg-white/10 transition-colors`}>
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="md:text-center">
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold font-sora text-white group-hover:text-orange transition-colors">
                      {stat.value}
                    </p>
                    <p className="text-[0.65rem] md:text-xs uppercase tracking-[0.25em] text-white/60 md:text-center mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustedBy />

      <ChevronServiceCards />

      <JobSearchBar />

      {/* Main Content Section - Go Far In Your Career */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden relative">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/5 rounded-full blur-[80px] -z-10" />
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal animation="slide-left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-orange font-bold text-sm uppercase tracking-[0.3em] block">
                    Go Far In Your Career
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] font-sora tracking-tight">
                    Travel Where Your <span className="text-orange">Experience Takes You</span>
                  </h2>
                </div>

                <p className="text-body text-xl leading-relaxed font-dm-sans text-muted/80">
                  Join a company where your work is valued, and you are respected. With Maxera Talent, you can expect precision, speed, and integrity in every step of your journey.
                </p>

                <ul className="space-y-4 pt-2">
                  {[
                    "Consistent, project-based work.",
                    "Top tier compensation and benefits.",
                    "Opportunities for career advancement.",
                    "Expert support throughout your tenure."
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4 group">
                      <div className="w-8 h-8 rounded-full bg-orange flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <span className="text-navy font-bold text-lg font-dm-sans">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6">
                  <Button variant="secondary" size="lg" asChild className="px-10 h-14 rounded-full bg-navy relative overflow-hidden group border-none text-white">
                    <Link href="/jobs" className="relative z-10 flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span className="absolute inset-0 bg-orange translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal animation="slide-right" delayMs={100}>
              <div className="relative">
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3] group">
                  <Image
                    src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&w=1000&q=80"
                    alt="Professional Excellence"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange/10 rounded-full blur-3xl z-[-1]" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-navy/10 rounded-full blur-2xl z-[-1]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Expertise Section - Workforce solutions */}
      <section className="py-20 lg:py-28 bg-surface relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/5 rounded-full blur-[80px]" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal animation="slide-right" delayMs={100} className="order-2 lg:order-1">
              <div className="relative">
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl aspect-[4/3] group">
                  <Image
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80"
                    alt="Business Solutions"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="absolute -top-8 -left-8 w-48 h-48 bg-navy/5 rounded-full blur-3xl z-[-1]" />
              </div>
            </Reveal>

            <Reveal animation="slide-right" className="order-1 lg:order-2">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-orange font-bold text-sm uppercase tracking-[0.3em] block">
                    Solutions for Businesses
                  </span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] font-sora tracking-tight">
                    Success Through <span className="text-orange">Professionalism</span>
                  </h2>
                </div>

                <p className="text-body text-xl leading-relaxed font-dm-sans text-muted/80">
                  Scale your team with precision. Maxera Talent connects your business with the top 5% of US professionals across critical high-impact sectors.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-3 p-6 bg-white rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center text-orange mb-2">
                      <Users className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-navy text-xl font-sora">Skilled Staffing</h4>
                    <p className="text-body/60 font-dm-sans text-sm">Precision recruitment for specialized technical and operational roles.</p>
                  </div>
                  <div className="space-y-3 p-6 bg-white rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center text-navy mb-2">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-navy text-xl font-sora">Executive Search</h4>
                    <p className="text-body/60 font-dm-sans text-sm">Connecting your organization with transformative leadership talent.</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button variant="primary" size="lg" asChild className="px-10 h-14 rounded-full bg-orange relative overflow-hidden group border-none">
                    <Link href="/employers" className="relative z-10 flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span className="absolute inset-0 bg-navy translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services and Industries (Simplified/Styled for vpausa) */}
      <ServicesGrid />
      <IndustriesGrid />

      <HiringProcess />

      <Testimonials />

      <CTABanner
        title="Ready to Start Your Success Story?"
        subtitle="Partner with the United States' most reliable talent acquisition network."
        ctaText="Connect with Us"
        ctaHref="/contact"
      />
    </div>
  );
}
