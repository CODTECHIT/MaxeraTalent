import * as React from "react";
import Link from "next/link";
import { Laptop, Activity, Landmark, Construction, Settings } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

const INDUSTRIES = [
    { icon: Laptop, label: "Technology", href: "/industries/technology" },
    { icon: Activity, label: "Healthcare", href: "/industries/healthcare" },
    { icon: Landmark, label: "Finance", href: "/industries/finance" },
    { icon: Construction, label: "Engineering", href: "/industries/engineering" },
    { icon: Settings, label: "Business Ops", href: "/industries/business" },
];

const IndustriesGrid = () => {
    return (
        <section className="py-20 lg:py-28 bg-navy-light/5 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-navy rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal rounded-full blur-[100px]"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col mb-16 text-center items-center max-w-3xl mx-auto">
                    <Reveal animation="fade-up">
                        <span className="text-orange font-semibold text-sm uppercase tracking-[0.3em] mb-4 block">
                            Our US Network
                        </span>
                    </Reveal>
                    <Reveal animation="fade-up" delayMs={100}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 font-sora leading-[1.15]">
                            Industries We <span className="text-orange">Serve</span>
                        </h2>
                    </Reveal>
                    <Reveal animation="fade-up" delayMs={200}>
                        <p className="text-muted text-lg leading-relaxed max-w-2xl">
                            We connect top talent with leading organizations across key sectors in the United States.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                    {INDUSTRIES.map((industry, index) => (
                        <Reveal key={industry.label} animation="fade-up" delayMs={300 + index * 100}>
                            <Link
                                href={industry.href}
                                className="group relative flex flex-col items-center justify-center p-6 lg:p-8 bg-white rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-orange/30 hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 bg-navy/5 rounded-xl flex items-center justify-center text-navy mb-5 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                                    <industry.icon className="w-6 h-6" />
                                </div>

                                <span className="text-base font-semibold text-navy text-center font-sora">
                                    {industry.label}
                                </span>
                            </Link>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Reveal animation="fade-up" delayMs={800}>
                        <Button variant="primary" size="lg" asChild className="h-12 px-8 rounded-lg bg-navy hover:bg-orange transition-colors border-none text-white font-semibold">
                            <Link href="/industries">View All Industries</Link>
                        </Button>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default IndustriesGrid;
