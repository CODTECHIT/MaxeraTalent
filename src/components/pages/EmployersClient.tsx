"use client";

import * as React from "react";
import Hero from "@/components/sections/Hero";
import HiringProcess from "@/components/sections/HiringProcess";
import { Input, Label, ErrorText } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle, Shield, Briefcase, Users, Zap, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

const hiringSchema = z.object({
    fullName: z.string().min(2, "Name is required"),
    company: z.string().min(2, "Company name is required"),
    jobTitle: z.string().min(2, "Job title is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    industry: z.string().min(1, "Please select an industry"),
    jobType: z.string().min(1, "Please select a job type"),
    message: z.string().optional(),
});

type HiringFormValues = z.infer<typeof hiringSchema>;

export function EmployersClient() {
    const [submitted, setSubmitted] = React.useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<HiringFormValues>({
        resolver: zodResolver(hiringSchema),
    });

    const onSubmit = async (data: HiringFormValues) => {
        console.log("Submitting hiring request:", data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col">
            <Hero
                title="Let's Find Your Next Hire"
                subtitle="Scale your team with precision. Maxera Talent connects your business with the top 5% of US professionals."
                backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80"
            />

            {/* Why Choose Maxera */}
            <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <Reveal className="mb-20">
                        <div className="flex flex-col text-center items-center">
                            <span className="text-navy font-bold text-sm uppercase tracking-[0.4em] mb-6 block">
                                Employer Value
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-navy mb-8 font-sora tracking-tight leading-[1.1]">
                                Why US Companies <span className="text-orange">Choose Maxera</span>
                            </h2>
                            <div className="w-20 h-1 bg-orange mb-8"></div>
                            <p className="max-w-2xl mx-auto text-body text-xl font-dm-sans opacity-70">Experience a recruitment partnership built on speed, precision, and zero risk.</p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { icon: Zap, title: "Speed of Placement", desc: "Our average time-to-hire is 14 days, significantly faster than the US industry average." },
                            { icon: Shield, title: "No Hire, No Fee", desc: "Zero financial risk. Our contingency model means you only pay once a candidate successfully starts." },
                            { icon: Users, title: "Deep Talent Network", desc: "Access to a vetted pool of 15,000+ professionals across critical US industries." },
                            { icon: Award, title: "Industry Expertise", desc: "Recruiters with deep sector knowledge who speak your technical language." },
                            { icon: Briefcase, title: "Dedicated Recruiter", desc: "A single point of contact who acts as an extension of your internal team." },
                            { icon: CheckCircle, title: "Quality Over Quantity", desc: "We only present the most qualified, culturally aligned candidates for your review." },
                        ].map((benefit, idx) => (
                            <Reveal key={benefit.title} delayMs={idx * 70}>
                                <div className="bg-surface p-12 rounded-[40px] border border-border/40 hover:bg-white hover:shadow-2xl transition-all duration-500 group text-center items-center flex flex-col">
                                    <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center text-white mb-10 group-hover:bg-orange transition-all duration-500 shadow-lg group-hover:scale-110">
                                        <benefit.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy mb-6 font-sora group-hover:text-orange transition-colors">{benefit.title}</h3>
                                    <p className="text-lg text-body leading-relaxed font-dm-sans opacity-70 group-hover:opacity-100 transition-opacity">{benefit.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <HiringProcess />

            {/* Redesigned Premium Intake Form */}
            <section id="hiring-form" className="py-24 sm:py-32 bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-navy rounded-[40px] shadow-[0_60px_100px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col lg:flex-row border border-white/5">
                            {/* Left Side: Form Info */}
                            <div className="lg:w-2/5 p-12 lg:p-16 bg-orange relative overflow-hidden text-white">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                                <div className="relative z-10 space-y-10 text-center lg:text-left">
                                    <h2 className="text-4xl font-bold font-sora leading-tight">Submit Hiring Request</h2>
                                    <p className="text-xl font-dm-sans opacity-80 leading-relaxed font-light">
                                        Tell us about your needs and our specialists will reach out within <span className="font-bold">4 business hours</span> to discuss your strategy.
                                    </p>

                                    <div className="space-y-8 pt-6">
                                        <div className="flex items-start gap-6">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                                                <CheckCircle className="w-6 h-6 text-white" />
                                            </div>
                                            <p className="text-lg font-bold">Expert technical screening</p>
                                        </div>
                                        <div className="flex items-start gap-6">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                                                <CheckCircle className="w-6 h-6 text-white" />
                                            </div>
                                            <p className="text-lg font-bold">Vetted US professionals</p>
                                        </div>
                                        <div className="flex items-start gap-6">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                                                <CheckCircle className="w-6 h-6 text-white" />
                                            </div>
                                            <p className="text-lg font-bold">Zero upfront costs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Actual Form */}
                            <div className="lg:w-3/5 p-12 lg:p-16 bg-navy">
                                {!submitted ? (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
                                                <Label htmlFor="company" className="text-white/60 font-medium">Company *</Label>
                                                <Input
                                                    id="company"
                                                    {...register("company")}
                                                    placeholder="My Awesome Company"
                                                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:ring-orange/30"
                                                />
                                                {errors.company && <ErrorText className="text-red-400">{errors.company.message}</ErrorText>}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <Label htmlFor="jobTitle" className="text-white/60 font-medium">Job Title to Fill *</Label>
                                                <Input
                                                    id="jobTitle"
                                                    {...register("jobTitle")}
                                                    placeholder="Senior Software Engineer"
                                                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:ring-orange/30"
                                                />
                                                {errors.jobTitle && <ErrorText className="text-red-400">{errors.jobTitle.message}</ErrorText>}
                                            </div>
                                            <div className="space-y-3">
                                                <Label htmlFor="email" className="text-white/60 font-medium">Email *</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    {...register("email")}
                                                    placeholder="jane@company.com"
                                                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:ring-orange/30"
                                                />
                                                {errors.email && <ErrorText className="text-red-400">{errors.email.message}</ErrorText>}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <Label htmlFor="phone" className="text-white/60 font-medium">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    {...register("phone")}
                                                    placeholder="+1 (555) 000-0000"
                                                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:ring-orange/30"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <Label htmlFor="industry" className="text-white/60 font-medium">Industry *</Label>
                                                <select
                                                    id="industry"
                                                    {...register("industry")}
                                                    className="flex h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange font-dm-sans appearance-none"
                                                >
                                                    <option value="" className="bg-navy">Select Industry</option>
                                                    <option value="Technology" className="bg-navy">Technology</option>
                                                    <option value="Healthcare" className="bg-navy">Healthcare</option>
                                                    <option value="Finance" className="bg-navy">Finance</option>
                                                    <option value="Engineering" className="bg-navy">Engineering</option>
                                                    <option value="Operations" className="bg-navy">Business Operations</option>
                                                </select>
                                                {errors.industry && <ErrorText className="text-red-400">{errors.industry.message}</ErrorText>}
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Label htmlFor="message" className="text-white/60 font-medium">Message / Role Details</Label>
                                            <textarea
                                                id="message"
                                                {...register("message")}
                                                className="flex min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange font-dm-sans placeholder:text-white/20"
                                                placeholder="Additional details about the role or requirements..."
                                            ></textarea>
                                        </div>

                                        <Button type="submit" disabled={isSubmitting} className="w-full h-16 text-xl rounded-full bg-orange hover:bg-white hover:text-navy group transition-all duration-300 shadow-xl shadow-orange/20 border-none">
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-3">
                                                    <Zap className="w-5 h-5 animate-pulse" /> Submitting...
                                                </span>
                                            ) : (
                                                "Submit Hiring Request"
                                            )}
                                        </Button>
                                    </form>
                                ) : (
                                    <div className="py-20 text-center space-y-8 animate-fade-in">
                                        <div className="w-24 h-24 bg-orange text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-orange/50">
                                            <CheckCircle className="w-12 h-12" />
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-4xl font-bold text-white font-sora">Request Received</h2>
                                            <p className="text-white/60 font-dm-sans text-xl max-w-md mx-auto leading-relaxed">Thank you for choosing Maxera Talent. Our team of specialists is reviewing your request and will be in touch shortly.</p>
                                        </div>
                                        <Button variant="outlineWhite" className="h-14 px-10 rounded-full border-white/20 text-white hover:bg-white hover:text-navy transition-all duration-300" onClick={() => setSubmitted(false)}>
                                            Send Another Request
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
