import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle, Shield, Zap, Award, Users, Briefcase } from "lucide-react";

export const metadata: Metadata = {
    title: "About Maxera Talent | US Recruitment Leader",
    description: "Learn about Maxera Talent's mission, vision, and core values. We are a premier United States recruitment firm dedicated to excellence.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <Hero
                title="Inside Maxera Talent"
                subtitle="Learn who we are, how we operate, and why US organizations trust us to represent their brand in the market."
                backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
            />

            {/* Company Overview */}
            <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="space-y-10 order-2 lg:order-1">
                            <div className="space-y-5">
                                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-surface border border-border/70 text-xs font-bold uppercase tracking-[0.3em] text-navy">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                                    About Maxera Talent
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.05] font-sora tracking-tight">
                                    Our Story of <span className="text-orange">Quality Without Compromise</span>
                                </h1>
                                <p className="text-sm font-dm-sans uppercase tracking-[0.3em] text-navy/40">
                                    US RECRUITMENT EXCELLENCE • PEOPLE-FIRST • DATA-DRIVEN
                                </p>
                            </div>

                            <div className="space-y-8">
                                <p className="text-body text-xl lg:text-2xl leading-relaxed font-dm-sans opacity-90 font-light">
                                    Maxera Talent was founded on a simple yet powerful premise: that the right placement can change the trajectory of both a career and a company.
                                </p>
                                <p className="text-body text-lg leading-relaxed font-dm-sans opacity-70">
                                    Based in the heart of the US market, we have grown from a boutique agency into a trusted strategic partner for firms across a multitude of industries. Our approach combines deep industry expertise with a relentless focus on quality and speed. We don&apos;t just source resumes; we build relationships.
                                </p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 grid grid-cols-1 gap-8">
                            <div className="p-12 bg-surface rounded-[40px] border border-border/40 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                                <div className="text-4xl text-orange opacity-20 font-serif leading-none mb-6 group-hover:opacity-40 transition-opacity">&quot;</div>
                                <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-navy mb-6 font-sora">Our Mission</h3>
                                <p className="text-2xl font-medium text-navy italic leading-relaxed font-dm-sans">
                                    To empower US businesses by delivering superior talent solutions with unmatched speed and integrity.
                                </p>
                            </div>
                            <div className="p-12 bg-navy rounded-[40px] shadow-2xl group border border-white/5">
                                <div className="text-4xl text-white opacity-20 font-serif leading-none mb-6 group-hover:opacity-40 transition-opacity">&quot;</div>
                                <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-orange mb-6 font-sora">Our Vision</h3>
                                <p className="text-2xl font-medium text-white italic leading-relaxed font-dm-sans">
                                    To be the most trusted recruitment authority in the United States, recognized for excellence in placement and partnership.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 sm:py-32 bg-surface">
                <div className="container-custom">
                    <div className="flex flex-col mb-20 text-center items-center">
                        <span className="text-navy font-bold text-sm uppercase tracking-[0.4em] mb-6 block">
                            Our Pillars
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-8 font-sora tracking-tight leading-[1.1]">
                            Core Values & <span className="text-orange">Culture</span>
                        </h2>
                        <div className="w-20 h-1 bg-orange mb-8"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Integrity", desc: "Honesty and transparency are at the core of every partnership we build." },
                            { icon: Zap, title: "Speed", desc: "We understand that time-to-hire is critical for US business success." },
                            { icon: Award, title: "Excellence", desc: "We strive for perfection in every match, ensuring long-term value." },
                            { icon: Users, title: "Partnership", desc: "We act as an extension of your team, not just an external vendor." },
                            { icon: CheckCircle, title: "Quality", desc: "Rigorous screening ensures only the top 5% of talent reaches your desk." },
                            { icon: Briefcase, title: "Professionalism", desc: "A gold standard of service for both employers and job seekers." }
                        ].map((value) => (
                            <div key={value.title} className="bg-white p-12 rounded-[40px] border border-border/40 hover:shadow-2xl hover:border-orange/20 transition-all duration-500 group text-center items-center flex flex-col">
                                <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center text-white mb-10 group-hover:bg-orange transition-all duration-500 shadow-lg group-hover:scale-110">
                                    <value.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-6 font-sora group-hover:text-orange transition-colors">{value.title}</h3>
                                <p className="text-lg text-body leading-relaxed font-dm-sans opacity-70 group-hover:opacity-100 transition-opacity">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                title="Join the Maxera Journey"
                subtitle="Whether you're looking to hire or looking for your next challenge, we're here to help."
                ctaText="Get in Touch"
                ctaHref="/contact"
            />
        </div>
    );
}
