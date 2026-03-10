"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

const PROCESS_STEPS = [
    { id: 1, title: "Understand Requirements", desc: "We deep-dive into your culture and role needs." },
    { id: 2, title: "Source Candidates", desc: "Using our vast US network, we find the best fit." },
    { id: 3, title: "Screen Candidates", desc: "Rigorous technical and behavioral assessments." },
    { id: 4, title: "Coordinate Interviews", desc: "Handling logistics so you focus on the talent." },
    { id: 5, title: "Successful Placement", desc: "Smooth onboarding for a winning partnership." },
];

const HiringProcess = ({ className }: { className?: string }) => {
    return (
        <section className={cn("py-20 lg:py-28 bg-navy relative overflow-hidden", className)}>
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-orange/10 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-10 left-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px]"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col mb-14 text-center items-center max-w-2xl mx-auto">
                    <Reveal animation="fade-up">
                        <span className="text-orange font-semibold text-sm uppercase tracking-[0.25em] mb-3 block">
                            How It Works
                        </span>
                    </Reveal>
                    <Reveal animation="fade-up" delayMs={100}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-sora leading-[1.15]">
                            Our <span className="text-orange">Process</span>
                        </h2>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    {PROCESS_STEPS.map((step, index) => (
                        <Reveal key={step.id} animation="fade-up" delayMs={200 + index * 100}>
                            <div
                                className="relative flex flex-col p-5 lg:p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-orange/30 transition-all duration-300 group"
                            >
                                {/* Step number */}
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-3xl font-bold text-orange font-sora">
                                        {String(step.id).padStart(2, '0')}
                                    </span>
                                </div>

                                <h3 className="text-base font-semibold text-white font-sora mb-2 group-hover:text-orange transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                                    {step.desc}
                                </p>

                                {/* Connector line */}
                                {index < PROCESS_STEPS.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-white/10" />
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HiringProcess;
