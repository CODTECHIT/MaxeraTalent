import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CTABanner from "@/components/sections/CTABanner";
import { Monitor, Heart, TrendingUp, Settings, Briefcase, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
    title: "Industries Served | Technology, Healthcare & Finance Staffing",
    description: "Learn about the core industries Maxera Talent serves in the US, including tech, healthcare, and finance.",
};

const INDUSTRIES_DATA = [
    {
        icon: Monitor,
        title: "Technology",
        desc: "From the newest Silicon Valley startups to established US enterprises, we deliver the specialized talent driving modern innovation. We understand the technical demands of the American tech landscape.",
        roles: ["Software Engineers", "Product Managers", "Data Scientists", "Cloud Architects", "Cybersecurity Experts"],
        href: "/jobs?industry=Technology"
    },
    {
        icon: Heart,
        title: "Healthcare",
        desc: "A sector demanding absolute compliance and deep professional credentialing. We support clinicians, Allied Health experts, and non-clinical administration within the United States' complex health networks.",
        roles: ["Registered Nurses", "Clinical Managers", "Healthcare Administration", "Allied Professionals", "Medical Technicians"],
        href: "/jobs?industry=Healthcare"
    },
    {
        icon: TrendingUp,
        title: "Finance",
        desc: "Our finance recruitment supports the engine of the United States' public and private sectors. We find professionals who understand the nuances of US regulation, reporting, and strategic growth.",
        roles: ["Analysts", "CFOs & Controllers", "Asset Managers", "Risk Compliance", "Tax Professionals"],
        href: "/jobs?industry=Finance"
    },
    {
        icon: Settings,
        title: "Engineering",
        desc: "Comprehensive staffing for the projects rebuilding America's infrastructure and manufacturing sectors. We deliver licensed professional engineers (PE) and technical specialists.",
        roles: ["Civil Engineers", "Mechanical Systems", "Electrical Engineering", "Project Managers", "Structural Design"],
        href: "/jobs?industry=Engineering"
    },
    {
        icon: Briefcase,
        title: "Business Operations",
        desc: "The essential talent keeping US businesses running at peak efficiency. We provide operational leaders who can adapt to fast-paced corporate environments.",
        roles: ["Ops Managers", "HR Leadership", "Customer Success", "Supply Chain", "Procurement"],
        href: "/jobs?industry=Operations"
    }
];

export default function IndustriesPage() {
    return (
        <div className="flex flex-col">
            <Hero
                title="Industries We Serve"
                subtitle="Maxera Talent's specialized recruitment teams are embedded in the industries that power the United States' economy."
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            />

            {/* Industries Detail Sections */}
            <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <Reveal className="mb-20">
                        <div className="flex flex-col text-center items-center">
                            <span className="text-navy font-bold text-sm uppercase tracking-[0.4em] mb-6 block"> Our Expertise </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] font-sora tracking-tight max-w-4xl mx-auto">
                                Specialized Recruitment for <span className="text-orange">Critical Sectors</span>
                            </h2>
                            <div className="w-20 h-1 bg-orange mt-8"></div>
                        </div>
                    </Reveal>

                    <div className="space-y-24 lg:space-y-32">
                        {INDUSTRIES_DATA.map((industry, index) => (
                            <div key={industry.title} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                <Reveal className={cn(index % 2 !== 0 ? "lg:order-2" : "lg:order-1")} delayMs={index * 60}>
                                    <div className="space-y-10">
                                        <div className="w-24 h-24 bg-navy rounded-full flex items-center justify-center text-white shadow-lg group hover:bg-orange transition-colors">
                                            <industry.icon className="w-10 h-10" />
                                        </div>

                                        <div className="space-y-6">
                                            <h2 className="text-4xl md:text-5xl font-bold text-navy font-sora tracking-tight leading-tight">
                                                {industry.title}
                                            </h2>
                                            <p className="text-body text-xl leading-relaxed font-dm-sans opacity-70">
                                                {industry.desc}
                                            </p>
                                        </div>

                                        <div className="p-10 bg-surface rounded-[40px] border border-border/40 font-dm-sans">
                                            <h3 className="text-xs font-bold text-orange uppercase tracking-[0.3em] mb-8">Typical Roles Placed</h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                {industry.roles.map((role, idx) => (
                                                    <Reveal key={role} delayMs={idx * 60}>
                                                        <div className="flex items-center gap-4 group">
                                                            <div className="w-2.5 h-2.5 rounded-full bg-orange/40 group-hover:bg-orange group-hover:scale-150 transition-all"></div>
                                                            <span className="text-navy font-bold text-lg">{role}</span>
                                                        </div>
                                                    </Reveal>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <Button variant="primary" size="lg" className="h-16 px-12 rounded-full bg-navy hover:bg-orange transition-all duration-300 border-none text-white" asChild>
                                                <Link href={industry.href}>View {industry.title} Jobs</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </Reveal>

                                <Reveal
                                    direction="right"
                                    delayMs={80 + index * 60}
                                    className={cn("relative order-1 lg:order-2", index % 2 !== 0 ? "lg:order-1" : "lg:order-2")}
                                >
                                    <div className="relative rounded-[40px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] group border-8 border-white aspect-[16/10] bg-navy">
                                        <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-700"></div>
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy to-transparent"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <industry.icon className="w-40 h-40 text-orange opacity-20 transform group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000" />
                                        </div>
                                    </div>

                                    {/* Glass stat card overlay */}
                                    <Reveal
                                        delayMs={240 + index * 60}
                                        className={cn(
                                            "absolute -bottom-6 bg-white/95 backdrop-blur-xl p-8 rounded-[30px] shadow-2xl border border-white/20 z-20 max-w-[260px]",
                                            index % 2 === 0 ? "-left-6" : "-right-6"
                                        )}
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className="w-14 h-14 rounded-2xl bg-orange flex items-center justify-center text-white shadow-lg">
                                                <CheckCircle className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-bold text-navy opacity-40 uppercase tracking-widest leading-none mb-2">Market Status</div>
                                                <div className="text-xl font-bold text-navy font-sora">High Demand</div>
                                            </div>
                                        </div>
                                    </Reveal>
                                </Reveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                title="Looking for Expert Talent in Your Sector?"
                subtitle="Let's find the high-impact professionals your industry demands."
                ctaText="Start Hiring"
                ctaHref="/employers"
            />
        </div>
    );
}
