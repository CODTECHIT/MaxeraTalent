import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle, Users, Briefcase, UserPlus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Staffing Services | Contingent, Contract & Direct Hire",
    description: "Explore Maxera Talent's recruitment services in the US including Contingent Recruitment, Contract Staffing, and Direct Hire solutions.",
};

const SERVICES_DATA = [
    {
        icon: Users,
        title: "Contingent Recruitment",
        desc: "Our most popular model for US hiring. You pay only when a successful candidate is placed, meaning we assume all the risk and the cost of search. Ideal for fast-growing firms looking for quality without heavy upfront investment.",
        benefits: ["No-Hire, No-Fee Guarantee", "Access to Passive Networks", "Niche Sector Expertise", "Fast Turnaround Time"]
    },
    {
        icon: Briefcase,
        title: "Contract Staffing",
        desc: "Designed for US agility. Whether you need specialized skills for a short project or temporary coverage for staff absences, our contract staffing service delivers vetted professionals who hit the ground running.",
        benefits: ["Scalable Workforce", "Reduced Overhead Costs", "Streamlined Compliance", "High-Impact Professionals"]
    },
    {
        icon: UserPlus,
        title: "Direct Hire",
        desc: "We help you build long-term value by finding permanent employees who are not just technically skilled, but culturally aligned. Our direct hire service includes a comprehensive replacement guarantee for total peace of mind.",
        benefits: ["Long-term Cultural Fit", "Extensive Replacement Guarantee", "Full Search & Selection", "Brand Ambassadorship"]
    }
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col">
            <Hero
                title="Our Strategic Services"
                subtitle="A full suite of recruitment and staffing solutions tailored to the unique demands of the United States market."
                backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
            />

            {/* Services Detail Sections */}
            {SERVICES_DATA.map((service, index) => (
                <section key={service.title} className={cn("py-24 sm:py-32 relative overflow-hidden", index % 2 === 0 ? "bg-white" : "bg-surface")}>
                    <div className="container-custom relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            <div className={cn("space-y-10", index % 2 !== 0 ? "lg:order-2" : "lg:order-1")}>
                                <div className="inline-flex items-center gap-4 px-6 py-3 bg-navy rounded-full border border-navy/10 mb-4 shadow-sm">
                                    <service.icon className="w-5 h-5 text-orange" />
                                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-white">Service Model</span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] font-sora tracking-tight">
                                    {service.title.split(' ').slice(0, -1).join(' ')} <span className="text-orange">{service.title.split(' ').pop()}</span>
                                </h2>

                                <div className="w-20 h-1 bg-orange"></div>

                                <p className="text-body text-xl leading-relaxed font-dm-sans opacity-80">
                                    {service.desc}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {service.benefits.map((benefit) => (
                                        <div key={benefit} className="flex items-start gap-4 p-5 rounded-[2rem] bg-white border border-border/20 shadow-sm transition-transform hover:scale-[1.02]">
                                            <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
                                                <CheckCircle className="text-orange w-5 h-5" />
                                            </div>
                                            <span className="text-navy font-bold leading-tight pt-2">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6">
                                    <Button variant="primary" size="lg" className="h-16 px-14 text-lg rounded-full shadow-lg bg-orange hover:bg-navy transition-all duration-300 border-none" asChild>
                                        <Link href="/contact">Partner with Us</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Premium Illustration/Image Placeholder */}
                            <div className={cn("relative order-1", index % 2 !== 0 ? "lg:order-1" : "lg:order-2")}>
                                <div className="relative rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] group border-8 border-white aspect-[4/5] bg-navy">
                                    {/* Abstract background pattern */}
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,#C45A2A_0%,transparent_50%)]"></div>
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy to-transparent"></div>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-white">
                                        <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center mb-10 group-hover:bg-orange/20 transition-all duration-700">
                                            <service.icon className="w-16 h-16 text-orange group-hover:scale-110 transition-transform duration-700" />
                                        </div>
                                        <h3 className="text-4xl font-bold font-sora mb-6">{service.title}</h3>
                                        <div className="w-12 h-1 bg-orange/40 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Floating accent element */}
                                <div className={cn(
                                    "absolute -bottom-10 bg-white p-10 rounded-[30px] shadow-2xl border border-border/20 z-20 animate-fade-up max-w-[220px]",
                                    index % 2 === 0 ? "-left-10" : "-right-10"
                                )}>
                                    <div className="text-4xl font-bold text-orange font-sora mb-2">100%</div>
                                    <div className="text-[11px] font-bold text-navy/40 uppercase tracking-[0.2em] leading-normal">Precision<br />Performance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Comparison Table */}
            <section className="py-24 sm:py-32 bg-navy text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col mb-20 text-center items-center">
                        <span className="text-orange font-bold text-sm uppercase tracking-[0.4em] mb-6 block">
                            Quick Reference
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 font-sora tracking-tight leading-[1.1]">
                            Service <span className="text-orange">Comparison</span>
                        </h2>
                        <div className="w-20 h-1 bg-orange mb-8"></div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-sm shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[800px] font-dm-sans border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 uppercase tracking-widest text-[11px] text-orange font-bold">
                                        <th className="py-10 px-10">Feature</th>
                                        <th className="py-10 px-10">Contingency</th>
                                        <th className="py-10 px-10">Contract</th>
                                        <th className="py-10 px-10">Direct Hire</th>
                                    </tr>
                                </thead>
                                <tbody className="text-lg">
                                    {[
                                        { feature: "Payment Terms", c: "Post-Placement", ct: "Hourly/Project", dh: "Upon Start" },
                                        { feature: "Upfront Cost", c: "None", ct: "None", dh: "None" },
                                        { feature: "Typical Role", c: "Mid-Senior", ct: "Project-based", dh: "Full-time" },
                                        { feature: "Risk Level", c: "Zero", ct: "Low", dh: "Medium" },
                                        { feature: "Guarantee Period", c: "30-90 Days", ct: "Duration-based", dh: "6 Months+" }
                                    ].map((row) => (
                                        <tr key={row.feature} className="border-b border-white/5 hover:bg-white/[0.02] transition-all group">
                                            <td className="py-10 px-10 font-bold text-white/90 group-hover:text-orange transition-colors">{row.feature}</td>
                                            <td className="py-10 px-10 text-white/50">{row.c}</td>
                                            <td className="py-10 px-10 text-white/50">{row.ct}</td>
                                            <td className="py-10 px-10 text-white/50">{row.dh}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner
                title="Custom Solutions for Your Business"
                subtitle="Not sure which service fits? Let's have a conversation to build a bespoke plan for your organization."
                ctaText="Speak with an Expert"
                ctaHref="/contact"
            />
        </div>
    );
}
