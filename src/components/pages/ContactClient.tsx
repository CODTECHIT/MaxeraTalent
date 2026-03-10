"use client";

import * as React from "react";
import Hero from "@/components/sections/Hero";
import { Input, Label, ErrorText } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, MapPin, Clock, Linkedin, Twitter, CheckCircle, Zap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

const contactSchema = z.object({
    fullName: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    phone: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactClient() {
    const [submitted, setSubmitted] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        // Simulate API call
        console.log("Submitting contact message:", data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col">
            <Hero
                title="Connect with Our Experts"
                subtitle="Whether you&apos;re looking to hire top US talent or seeking your next career milestone, our specialists are ready to partner with you."
                backgroundImage="https://images.unsplash.com/photo-1557426272-fc759fbb7a8d?auto=format&fit=crop&w=1920&q=80"
            />

            <section className="py-24 sm:py-32 bg-white min-h-[700px]">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                        {/* Left Column: Form Info & Contact Hub */}
                        <Reveal>
                            <div className="space-y-16 lg:pr-10 text-center lg:text-left">
                                <div className="flex flex-col space-y-6">
                                    <span className="text-navy font-bold text-sm uppercase tracking-[0.4em] block">
                                        Contact Hub
                                    </span>
                                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-navy font-sora tracking-tight leading-[1.1]">
                                        Let&apos;s Build <br /><span className="text-orange">The Future</span> Together
                                    </h2>
                                    <p className="text-xl text-body font-dm-sans leading-relaxed opacity-70 max-w-lg mx-auto lg:ml-0">
                                        Our team operates across all US time zones to ensure seamless partnership and rapid response times.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-12 font-dm-sans">
                                    {[
                                        {
                                            icon: Mail,
                                            label: "Email Enquiries",
                                            title: "hello@maxeratalent.com",
                                            desc: "Strategic partnerships & general info",
                                        },
                                        {
                                            icon: MapPin,
                                            label: "US Headquarters",
                                            title: "United States Operations",
                                            desc: "Serving all 50 states via our distributed network",
                                        },
                                        {
                                            icon: Clock,
                                            label: "Business Hours",
                                            title: "9:00 AM – 6:00 PM EST",
                                            desc: "Dedicated support Monday through Friday",
                                        },
                                    ].map((item, idx) => (
                                        <Reveal key={item.label} delayMs={idx * 90}>
                                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 group">
                                                <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center shrink-0 border border-border/10 group-hover:bg-orange transition-all duration-500 shadow-lg">
                                                    <item.icon className="w-8 h-8" />
                                                </div>
                                                <div className="space-y-2">
                                                    <h4 className="text-sm font-bold text-navy uppercase tracking-[0.2em] font-sora opacity-40">{item.label}</h4>
                                                    <p className={cn("text-2xl font-bold text-navy transition-colors", item.label === "Email Enquiries" ? "group-hover:text-orange" : "")}>
                                                        {item.title}
                                                    </p>
                                                    <p className="text-sm text-body/60">{item.desc}</p>
                                                </div>
                                            </div>
                                        </Reveal>
                                    ))}
                                </div>

                                <Reveal delayMs={220}>
                                    <div className="pt-12 border-t border-border space-y-8">
                                        <h4 className="text-xs font-bold text-navy uppercase tracking-[0.4em] font-sora opacity-40">Direct Social Links</h4>
                                        <div className="flex items-center justify-center lg:justify-start gap-10">
                                            <Link href="#" className="flex items-center gap-4 group">
                                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-border/60 group-hover:bg-orange group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-110">
                                                    <Linkedin className="w-6 h-6 text-navy group-hover:text-white" />
                                                </div>
                                            </Link>
                                            <Link href="#" className="flex items-center gap-4 group">
                                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-border/60 group-hover:bg-orange group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-110">
                                                    <Twitter className="w-6 h-6 text-navy group-hover:text-white" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </Reveal>

                        {/* Right Column: Premium Form Container */}
                        <Reveal direction="right" delayMs={80}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-orange/5 rounded-[40px] translate-x-6 translate-y-6 -z-10 bg-gradient-to-br from-orange/10 to-transparent"></div>

                                <div className="bg-navy rounded-[40px] p-12 lg:p-16 border border-white/5 shadow-[0_60px_100px_rgba(0,0,0,0.1)]">
                                {!submitted ? (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                                        <div className="space-y-2 text-center lg:text-left">
                                            <h3 className="text-3xl font-bold text-white font-sora">Send Message</h3>
                                            <p className="text-white/40 font-dm-sans">Expect a response within 4 business hours.</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <Label htmlFor="fullName" className="text-white/60 font-medium">Full Name *</Label>
                                                <Input
                                                    id="fullName"
                                                    {...register("fullName")}
                                                    placeholder="Jane Doe"
                                                    className={cn("h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:ring-orange/30", errors.fullName ? "border-red-500" : "")}
                                                />
                                                {errors.fullName && <ErrorText className="text-red-400">{errors.fullName.message}</ErrorText>}
                                            </div>
                                            <div className="space-y-3">
                                                <Label htmlFor="email" className="text-white/60 font-medium">Email *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    {...register("email")}
                                                    placeholder="jane@email.com"
                                                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:ring-orange/30"
                                                />
                                                {errors.email && <ErrorText className="text-red-400">{errors.email.message}</ErrorText>}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <Label htmlFor="company" className="text-white/60 font-medium">Organization</Label>
                                                <Input
                                                    id="company"
                                                    {...register("company")}
                                                    placeholder="Legal Entity Name"
                                                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:ring-orange/30"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <Label htmlFor="phone" className="text-white/60 font-medium">Phone</Label>
                                                <Input
                                                    id="phone"
                                                    {...register("phone")}
                                                    placeholder="+1 (555) 000-0000"
                                                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:ring-orange/30"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Label htmlFor="message" className="text-white/60 font-medium">Message Details *</Label>
                                            <textarea
                                                id="message"
                                                {...register("message")}
                                                className="flex min-h-[160px] w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange font-dm-sans placeholder:text-white/20 transition-all shadow-inner"
                                                placeholder="Tell us about your hiring needs or career goals..."
                                            ></textarea>
                                            {errors.message && <ErrorText className="text-red-400">{errors.message.message}</ErrorText>}
                                        </div>

                                        <Button type="submit" disabled={isSubmitting} className="w-full h-18 text-xl rounded-full bg-orange hover:bg-white hover:text-navy group transition-all duration-300 shadow-xl shadow-orange/20 border-none">
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-3">
                                                    <Zap className="w-5 h-5 animate-pulse" /> Sending Inquiry...
                                                </span>
                                            ) : (
                                                "Submit Inquiry"
                                            )}
                                        </Button>
                                    </form>
                                ) : (
                                    <div className="py-20 text-center space-y-10 animate-fade-in">
                                        <div className="w-24 h-24 bg-orange text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-orange/50">
                                            <CheckCircle className="w-12 h-12" />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-4xl font-bold text-white font-sora tracking-tight">Transmission Sent</h3>
                                            <p className="text-white/40 font-dm-sans text-xl max-w-sm mx-auto leading-relaxed">Thank you for reaching out. A specialist has been assigned to your message and will be in touch shortly.</p>
                                        </div>
                                        <Button variant="outlineWhite" className="h-16 px-12 rounded-full border-white/20 text-white hover:bg-white hover:text-navy transition-all duration-300 font-bold" onClick={() => setSubmitted(false)}>
                                            Send Another Message
                                        </Button>
                                    </div>
                                )}
                            </div>
                            </div>
                        </Reveal>

                    </div>
                </div>
            </section>
        </div>
    );
}
