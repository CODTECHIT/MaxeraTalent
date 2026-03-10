import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

interface CTABannerProps {
    title: string;
    subtitle?: string;
    ctaText: string;
    ctaHref: string;
}

const CTABanner = ({ title, subtitle, ctaText, ctaHref }: CTABannerProps) => {
    return (
        <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
            {/* Elegant glassmorphism background accent */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <Reveal animation="fade-up">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-sora leading-[1.1] tracking-tight">
                            {title}
                        </h2>
                    </Reveal>
                    {subtitle && (
                        <Reveal animation="fade-up" delayMs={100}>
                            <p className="text-xl md:text-2xl text-white/70 font-dm-sans leading-relaxed max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        </Reveal>
                    )}
                    <Reveal animation="scale-in" delayMs={200}>
                        <div className="pt-8 flex justify-center">
                            <Button variant="primary" size="lg" className="h-20 px-16 text-xl rounded-full shadow-[0_20px_40px_rgba(220,38,38,0.2)] hover:shadow-[0_30px_60px_rgba(220,38,38,0.4)] hover:scale-105 transition-all duration-500 bg-red hover:bg-white hover:text-navy border-none" asChild>
                                <Link href={ctaHref}>{ctaText}</Link>
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
