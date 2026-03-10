import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, Briefcase, UserPlus, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const SERVICES = [
    {
        icon: Users,
        title: "Contingent Recruitment",
        desc: "Our 'no-hire, no-fee' model ensures you get top-tier candidates with zero upfront risk. We bridge the talent gap efficiently.",
        href: "/services",
        imageSrc: "/images/services/contingent-recruitment.jpg",
        imageAlt: "Recruiter reviewing candidate profiles for contingent hiring",
    },
    {
        icon: Briefcase,
        title: "Contract Staffing",
        desc: "Agile solutions for seasonal shifts, project-based needs, or temporary backfills. High-quality talent on demand.",
        href: "/services",
        imageSrc: "/images/services/contract-staffing.png",
        imageAlt: "Professionals collaborating in a modern office on a contract project",
    },
    {
        icon: UserPlus,
        title: "Direct Hire",
        desc: "Strategic long-term placements designed for cultural alignment and lasting productivity within your US-based teams.",
        href: "/services",
        imageSrc: "/images/services/direct-hire.png",
        imageAlt: "Successful direct hire employee being welcomed by the team",
    },
];

const ServicesGrid = () => {
    return (
        <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/5 rounded-full blur-3xl -z-10" />
            
            <div className="container-custom">
                <div className="flex flex-col mb-16 text-center items-center max-w-3xl mx-auto">
                    <Reveal animation="fade-up">
                        <span className="text-orange font-semibold text-sm uppercase tracking-[0.3em] mb-4 block">
                            What We Offer
                        </span>
                    </Reveal>
                    <Reveal animation="fade-up" delayMs={100}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 font-sora leading-[1.15] max-w-3xl mx-auto">
                            Precision-Driven <span className="text-orange">Recruitment Solutions</span>
                        </h2>
                    </Reveal>
                    <Reveal animation="fade-up" delayMs={200}>
                        <p className="text-muted text-lg leading-relaxed text-muted/80 max-w-2xl">
                            We connect exceptional talent with leading organizations through strategic hiring solutions tailored to your business needs.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {SERVICES.map((service, index) => (
                        <Reveal key={service.title} animation="fade-up" delayMs={300 + index * 150}>
                            <Link
                                href={service.href}
                                className="group flex flex-col bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:border-orange/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                            >
                                <div className="relative w-full h-48 md:h-52 lg:h-56 overflow-hidden">
                                    <Image
                                        src={service.imageSrc}
                                        alt={service.imageAlt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(min-width: 1024px) 400px, (min-width: 768px) 33vw, 100vw"
                                    />
                                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-navy group-hover:bg-orange group-hover:text-white transition-all duration-300 shadow-lg">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
                                </div>
                                <div className="flex flex-col p-6 lg:p-8">
                                    <h3 className="text-xl font-bold text-navy mb-3 font-sora group-hover:text-orange transition-colors">
                                    {service.title}
                                    </h3>
                                    <p className="text-muted text-base leading-relaxed mb-5 flex-grow">
                                        {service.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-orange font-semibold text-sm group-hover:gap-3 transition-all">
                                        <span>Learn more</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
