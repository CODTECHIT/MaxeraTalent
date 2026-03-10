import Link from "next/link";
import Image from "next/image";
import { Monitor, Heart, TrendingUp } from "lucide-react";

const SERVICES = [
    {
        title: "Technology Staffing",
        icon: Monitor,
        backgroundImage: "/images/industries/technology-staffing.jpg",
        href: "/industries/technology"
    },
    {
        title: "Healthcare Solutions",
        icon: Heart,
        backgroundImage: "/images/industries/healthcare-solutions.jpg",
        href: "/industries/healthcare"
    },
    {
        title: "Finance & Operations",
        icon: TrendingUp,
        backgroundImage: "/images/industries/finance-operations.jpg",
        href: "/industries/finance"
    }
];

const ChevronServiceCards = () => {
    return (
        <section className="relative -mt-32 z-20 pb-20">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {SERVICES.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group relative h-[450px] overflow-hidden chevron-card shadow-2xl transition-transform duration-500 hover:-translate-y-4"
                        >
                            <div className="absolute inset-0">
                                <Image
                                    src={service.backgroundImage}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur flex items-center justify-center mb-6 border border-border/40 shadow-lg transition-transform duration-500 group-hover:scale-110">
                                    <service.icon className="w-10 h-10 text-navy" />
                                </div>
                                <h3 className="text-3xl font-bold font-sora leading-tight text-white drop-shadow-md">
                                    {service.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChevronServiceCards;
