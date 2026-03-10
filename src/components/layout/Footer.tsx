import Link from "next/link";
import { Rocket, Mail, MapPin, Clock, Linkedin, Twitter } from "lucide-react";

const FOOTER_LINKS = {
    quick: [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/industries", label: "Industries" },
        { href: "/jobs", label: "Jobs" },
        { href: "/contact", label: "Contact" },
    ],
    services: [
        { href: "/services", label: "Contingent Recruitment" },
        { href: "/services", label: "Contract Staffing" },
        { href: "/services", label: "Direct Hire" },
    ],
};

const Footer = () => {
    return (
        <footer className="bg-navy text-white pt-16 lg:pt-20">
            <div className="container-custom pb-12 lg:pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Logo & Tagline */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 mb-5">
                            <div className="bg-orange p-1.5 rounded-lg">
                                <Rocket className="text-white w-5 h-5" />
                            </div>
                            <span className="font-sora font-bold text-xl tracking-tight">
                                Maxera<span className="text-orange">Talent</span>
                            </span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed mb-6 font-dm-sans">
                            Connecting innovative companies with exceptional talent across the United States.
                        </p>
                        <div className="flex items-center gap-3">
                            <Link
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-white/5 rounded-lg hover:bg-orange transition-colors border border-white/10 hover:border-orange"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </Link>
                            <Link
                                href="#"
                                className="w-9 h-9 flex items-center justify-center bg-white/5 rounded-lg hover:bg-orange transition-colors border border-white/10 hover:border-orange"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-sora font-semibold text-sm text-orange uppercase tracking-[0.2em] mb-4">
                            Company
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {FOOTER_LINKS.quick.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/50 hover:text-orange transition-colors text-sm block font-dm-sans"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-sora font-semibold text-sm text-orange uppercase tracking-[0.2em] mb-4">
                            Services
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {FOOTER_LINKS.services.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/50 hover:text-orange transition-colors text-sm block font-dm-sans"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-sora font-semibold text-sm text-orange uppercase tracking-[0.2em] mb-4">
                            Contact
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-3 group">
                                <Mail className="w-4 h-4 text-orange/60" />
                                <span className="text-white/50 text-sm font-dm-sans">
                                    hello@maxeratalent.com
                                </span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <MapPin className="w-4 h-4 text-orange/60" />
                                <span className="text-white/50 text-sm font-dm-sans">
                                    New York, United States
                                </span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <Clock className="w-4 h-4 text-orange/60" />
                                <span className="text-white/50 text-sm font-dm-sans">
                                    Mon — Fri 9am — 6pm EST
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-navy-dark border-t border-white/5 py-6">
                <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-xs font-dm-sans">
                        © 2025 Maxera Talent. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-white/30 font-dm-sans">
                        <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white/50 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
