import * as React from "react";
import Reveal from "@/components/ui/Reveal";

const LOGOS = [
    "TechFlow Inc.", "Beacon Health", "Global Finance", "Structure Eng", "Operations Pro", "NextGen IT"
];

const TrustedBy = () => {
    return (
        <section className="py-16 md:py-20 bg-white border-b border-border/30 overflow-hidden relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0B1F3B 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            </div>
            
            <div className="container-custom relative z-10">
                <Reveal className="mb-12">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-orange/80 font-bold text-[10px] uppercase tracking-[0.5em] mb-4">
                            Trusted by Industry Leaders
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-navy/30 font-sora">Powering hiring across the United States</h3>
                    </div>
                </Reveal>

                <div className="relative">
                    <div className="flex overflow-hidden select-none group">
                        <div className="flex animate-marquee items-center min-w-full justify-around py-4 gap-8 md:gap-16">
                            {LOGOS.map((logo) => (
                                <span key={logo} className="text-lg md:text-2xl lg:text-3xl font-bold font-sora text-navy/15 hover:text-orange/60 transition-all duration-500 cursor-default whitespace-nowrap px-2 hover:scale-110">
                                    {logo}
                                </span>
                            ))}
                        </div>
                        <div className="flex animate-marquee-duplicate items-center min-w-full justify-around py-4 gap-8 md:gap-16" aria-hidden="true">
                            {LOGOS.map((logo) => (
                                <span key={`${logo}-dup`} className="text-lg md:text-2xl lg:text-3xl font-bold font-sora text-navy/15 hover:text-orange/60 transition-all duration-500 cursor-default whitespace-nowrap px-2 hover:scale-110">
                                    {logo}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Fades for smooth edge transition */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
