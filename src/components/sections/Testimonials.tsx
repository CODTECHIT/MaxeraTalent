import { ArrowRight, Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const TESTIMONIALS = [
    {
        quote: "Maxera Talent transformed our hiring process. Their precision in understanding our culture meant every candidate submitted was a potential win. Truly a game-changer.",
        name: "James Donavan",
        role: "VP of Engineering, TechFlow Inc.",
        initials: "JD"
    },
    {
        quote: "The speed and quality of candidates for our healthcare expansion were unmatched. Maxera is our first and only call for staffing now.",
        name: "Sarah Lynch",
        role: "HR Director, Beacon Health Networks",
        initials: "SL"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden relative">
            {/* Subtle decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-red/5 rounded-br-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-navy/5 rounded-tl-full blur-3xl opacity-50"></div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 px-4">
                    <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
                        <Reveal animation="fade-up">
                            <span className="text-navy font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Success Stories</span>
                        </Reveal>
                        <Reveal animation="fade-up" delayMs={100}>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy font-sora mb-0 tracking-tight leading-[1.1]">
                                Trusted by <span className="text-red">Top US Firms</span>
                            </h2>
                        </Reveal>
                    </div>
                    <div className="hidden md:flex items-center gap-4 text-navy font-bold font-dm-sans group cursor-pointer lg:pb-4">
                        <span className="text-sm uppercase tracking-widest border-b-2 border-red/20 group-hover:border-red transition-all">View All Cases</span>
                        <div className="w-12 h-12 rounded-full bg-surface border border-border/50 flex items-center justify-center group-hover:bg-red group-hover:text-white transition-all duration-300">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                    {TESTIMONIALS.map((t, index) => (
                        <Reveal key={t.name} animation="fade-up" delayMs={200 + index * 150}>
                            <div className="group flex flex-col p-12 lg:p-16 bg-surface border border-border/40 rounded-[40px] hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(10,22,40,0.08)] hover:border-red/20 transition-all duration-700 relative">
                                <Quote className="absolute top-12 right-12 w-20 h-20 text-red opacity-[0.05] group-hover:opacity-[0.15] transition-opacity duration-700" />

                                <p className="text-xl lg:text-2xl text-navy leading-relaxed mb-12 italic font-dm-sans font-medium relative z-10">
                                    &quot;{t.quote}&quot;
                                </p>

                                <div className="flex items-center gap-6 mt-auto relative z-10">
                                    <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl border-4 border-white group-hover:bg-red transition-all duration-700 group-hover:scale-110">
                                        {t.initials}
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-2xl font-bold text-navy font-sora">{t.name}</p>
                                        <p className="text-sm text-red font-bold uppercase tracking-[0.2em]">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
