"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/jobs", label: "Jobs" },
    { href: "/employers", label: "For Employers" },
    { href: "/candidates", label: "For Candidates" },
    { href: "/contact", label: "Contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 border-b bg-white border-gray-200",
                isScrolled ? "shadow-sm" : "shadow-none"
            )}
        >
            <div className="container-custom h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-orange rounded-lg flex items-center justify-center group-hover:bg-orange-light transition-colors duration-300">
                        <Rocket className="text-white w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-sora font-bold text-xl tracking-tight leading-tight text-navy">
                            Maxera<span className="text-orange">Talent</span>
                        </span>
                        <span className="hidden sm:inline text-[9px] tracking-[0.25em] font-semibold uppercase text-muted">
                            Staffing Solutions
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-1">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "relative inline-flex items-center justify-center h-10 px-4 text-sm font-medium font-dm-sans rounded-md transition-all duration-200",
                                        isActive
                                            ? "text-orange"
                                            : cn(
                                                "text-gray-700 hover:text-navy",
                                                "hover:bg-gray-100/70"
                                            )
                                    )}
                                >
                                    {link.label}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-orange rounded-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-3 pl-4 border-l border-gray-300/50">
                        <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="hidden xl:inline-flex h-10 rounded-lg px-5 text-sm font-semibold text-navy hover:bg-gray-100"
                        >
                            <Link href="/candidates">Find a Role</Link>
                        </Button>
                        <Button
                            variant="primary"
                            size="default"
                            asChild
                            className="rounded-lg px-6 h-10 bg-orange hover:bg-navy text-white text-sm font-semibold border-none"
                        >
                            <Link href="/employers">Hire Talent</Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 rounded-lg transition-all duration-200 text-navy hover:bg-gray-100"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={cn(
                    "lg:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden shadow-lg",
                    "bg-white",
                    isMobileMenuOpen ? "max-h-[500px] border-b border-gray-200" : "max-h-0"
                )}
            >
                <div className="flex flex-col p-4 gap-2">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                                "text-base font-medium font-dm-sans py-3 px-4 rounded-lg transition-all",
                                pathname === link.href
                                    ? "text-orange bg-orange/5"
                                    : "text-gray-700 hover:text-navy hover:bg-gray-50"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200/20">
                        <Button
                            variant="ghost"
                            asChild
                            className="flex-1 justify-center rounded-lg py-3 text-sm font-semibold text-navy border border-gray-200"
                        >
                            <Link href="/candidates" onClick={() => setIsMobileMenuOpen(false)}>
                                Find a Role
                            </Link>
                        </Button>
                        <Button
                            variant="primary"
                            asChild
                            className="flex-1 justify-center rounded-lg py-3 bg-orange hover:bg-navy text-white text-sm font-semibold"
                        >
                            <Link href="/employers" onClick={() => setIsMobileMenuOpen(false)}>
                                Hire Talent
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
