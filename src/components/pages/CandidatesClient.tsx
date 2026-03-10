"use client";

import * as React from "react";
import Hero from "@/components/sections/Hero";
import { Input, Label, ErrorText } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle, Upload, Briefcase, FileText, Search, UserCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

const candidateSchema = z.object({
    fullName: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    jobTitle: z.string().min(2, "Desired job title is required"),
    industry: z.string().min(1, "Please select an industry"),
    resume: z.any().refine((files) => files?.length > 0, "Resume file is required"),
    message: z.string().optional(),
});

type CandidateFormValues = z.infer<typeof candidateSchema>;

export function CandidatesClient() {
    const [submitted, setSubmitted] = React.useState(false);
    const [fileName, setFileName] = React.useState<string | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<CandidateFormValues>({
        resolver: zodResolver(candidateSchema),
    });

    const onSubmit = async (data: CandidateFormValues) => {
        console.log("Submitting resume:", data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSubmitted(true);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            setValue("resume", e.target.files as unknown as FileList, { shouldValidate: true });
        }
    };

    return (
        <div className="flex flex-col">
            <Hero
                title="Your Next Opportunity Starts Here"
                subtitle="Maxera Talent is dedicated to helping US professionals find roles that match their skills, values, and career goals."
                backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
            />

            {/* Candidate Promise */}
            <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <Reveal className="mb-20">
                        <div className="flex flex-col text-center items-center">
                            <span className="text-navy font-bold text-sm uppercase tracking-[0.4em] mb-6 block">
                                Our Candidate Promise
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-navy mb-8 font-sora tracking-tight leading-[1.1]">
                                Why Work With <span className="text-orange">Maxera Talent?</span>
                            </h2>
                            <div className="w-20 h-1 bg-orange mb-8"></div>
                            <p className="max-w-2xl mx-auto text-body text-xl font-dm-sans opacity-70">We act as your career advocate, connecting you with the United States&apos; premier employers.</p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { icon: Briefcase, title: "Access to Top Firms", desc: "Gain direct access to hiring managers at the United States' most innovative companies." },
                            { icon: Search, title: "Targeted Search", desc: "We don't just find jobs; we find the right cultural and technical fit for you." },
                            { icon: UserCheck, title: "Personal Advocate", desc: "Our recruiters act as your career partners, managing the placement process end-to-end." },
                            { icon: FileText, title: "Expert Support", desc: "Expert guidance on your resume and interview preparation to ensure you stand out." },
                        ].map((benefit, idx) => (
                            <Reveal key={benefit.title} delayMs={idx * 80}>
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

            {/* Application Flow */}
            <section className="py-24 sm:py-32 bg-surface relative">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {[
                            { step: "01", title: "Submit Resume", desc: "Share your professional profile with our US-based recruiting team." },
                            { step: "02", title: "Screening Call", desc: "A detailed conversation about your career goals and technical expertise." },
                            { step: "03", title: "Scale Your Career", desc: "Secure your next high-impact role at a leading US organization." }
                        ].map((item) => (
                            <div key={item.step} className="flex flex-col items-center text-center space-y-8 group">
                                <div className="relative">
                                    <div className="w-24 h-24 bg-navy text-white rounded-full flex items-center justify-center text-3xl font-bold border-8 border-white shadow-2xl group-hover:bg-orange transition-all duration-500">
                                        {item.step}
                                    </div>
                                    <div className="absolute -inset-4 border border-navy/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"></div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-navy font-sora">{item.title}</h3>
                                    <p className="text-lg text-body font-dm-sans opacity-60 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Redesigned Premium Resume Upload Form */}
            <section id="resume-form" className="py-24 sm:py-32 bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-navy rounded-[40px] shadow-[0_60px_100px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col lg:flex-row border border-white/5">
                            {/* Left Side: Form Info */}
                            <div className="lg:w-2/5 p-12 lg:p-16 bg-orange relative overflow-hidden text-white">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                                <div className="relative z-10 space-y-10 text-center lg:text-left">
                                    <h2 className="text-4xl font-bold font-sora leading-tight">Submit Your Resume</h2>
                                    <p className="text-xl font-dm-sans opacity-80 leading-relaxed font-light">
                                        Join our talent network today. Our recruiters will reach out as matching high-impact roles emerge within our US network.
                                    </p>

                                    <div className="space-y-8 pt-6">
                                        <div className="flex items-start gap-6">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                                                <CheckCircle className="w-6 h-6 text-white" />
                                            </div>
                                            <p className="text-lg font-bold">Direct recruiter access</p>
                                        </div>
                                        <div className="flex items-start gap-6">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                                                <CheckCircle className="w-6 h-6 text-white" />
                                            </div>
                                            <p className="text-lg font-bold">Confidential search</p>
                                        </div>
                                        <div className="flex items-start gap-6">
                                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                                                <CheckCircle className="w-6 h-6 text-white" />
                                            </div>
                                            <p className="text-lg font-bold">Premium career coaching</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Form */}
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
                                                <Label htmlFor="phone" className="text-white/60 font-medium">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    {...register("phone")}
                                                    placeholder="+1 (555) 000-0000"
                                                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:ring-orange/30"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <Label htmlFor="jobTitle" className="text-white/60 font-medium">Desired Job Title *</Label>
                                                <Input
                                                    id="jobTitle"
                                                    {...register("jobTitle")}
                                                    placeholder="Senior Software Engineer"
                                                    className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-2xl focus:ring-orange/30"
                                                />
                                                {errors.jobTitle && <ErrorText className="text-red-400">{errors.jobTitle.message}</ErrorText>}
                                            </div>
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

                                        <div className="space-y-3">
                                            <Label className="text-white/60 font-medium">Upload Resume * (PDF/DOC, Max 5MB)</Label>
                                            <div className="relative group/upload h-[120px] rounded-2xl border-2 border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center transition-all hover:border-orange cursor-pointer">
                                                <input
                                                    type="file"
                                                    id="resume"
                                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                                    accept=".pdf,.doc,.docx"
                                                    onChange={handleFileChange}
                                                />
                                                <div className="flex flex-col items-center text-center space-y-2">
                                                    <Upload className="w-8 h-8 text-orange transition-transform group-hover/upload:-translate-y-1" />
                                                    <p className="text-sm text-white/40 font-dm-sans font-medium">
                                                        {fileName || "Drag & drop or click to upload your resume"}
                                                    </p>
                                                </div>
                                            </div>
                                            {errors.resume && <ErrorText className="text-red-400">{errors.resume.message as string}</ErrorText>}
                                        </div>

                                        <div className="space-y-3">
                                            <Label htmlFor="message" className="text-white/60 font-medium">Message (Optional)</Label>
                                            <textarea
                                                id="message"
                                                {...register("message")}
                                                className="flex min-h-[100px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange font-dm-sans placeholder:text-white/20"
                                                placeholder="Tell us a bit about what you're looking for..."
                                            ></textarea>
                                        </div>

                                        <Button type="submit" disabled={isSubmitting} className="w-full h-16 text-xl rounded-full bg-orange hover:bg-white hover:text-navy group transition-all duration-300 shadow-xl shadow-orange/20 border-none">
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-3">
                                                    <Zap className="w-5 h-5 animate-pulse" /> Submitting...
                                                </span>
                                            ) : (
                                                "Submit Resume"
                                            )}
                                        </Button>
                                    </form>
                                ) : (
                                    <div className="py-20 text-center space-y-8 animate-fade-in">
                                        <div className="w-24 h-24 bg-orange text-white rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-orange/50">
                                            <CheckCircle className="w-12 h-12" />
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-4xl font-bold text-white font-sora">Application Received</h2>
                                            <p className="text-white/60 font-dm-sans text-xl max-w-md mx-auto leading-relaxed">Thank you for submitting your resume. We&apos;ll be in touch if a matching opportunity arises in our network.</p>
                                        </div>
                                        <Button variant="outlineWhite" className="h-14 px-10 rounded-full border-white/20 text-white hover:bg-white hover:text-navy transition-all duration-300" onClick={() => setSubmitted(false)}>
                                            Submit Another File
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
