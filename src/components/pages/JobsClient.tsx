"use client";

import * as React from "react";
import Hero from "@/components/sections/Hero";
import { Input } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { Search, MapPin, Briefcase, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

const JOBS_DATA = [
    { id: 1, title: "Senior Software Engineer", location: "New York, NY", type: "Full-time", industry: "Technology", desc: "Leading US fintech firm seeking a full-stack expert to drive core product innovation in their Manhattan headquarters." },
    { id: 2, title: "Healthcare Admin Manager", location: "Austin, TX", type: "Full-time", industry: "Healthcare", desc: "Strategic operations role within a rapidly expanding Texas healthcare network. Focus on compliance and regional growth." },
    { id: 3, title: "Senior Financial Analyst", location: "Chicago, IL", type: "Contract", industry: "Finance", desc: "6-month project focusing on US reporting and risk assessment for a global investment group." },
    { id: 4, title: "Civil Project Engineer", location: "Los Angeles, CA", type: "Full-time", industry: "Engineering", desc: "Manage large-scale US infrastructure proyectos. License (PE) preferred but not required for this leadership role." },
    { id: 5, title: "HR Business Partner", location: "Atlanta, GA", type: "Full-time", industry: "Operations", desc: "Partner with US-based leadership to drive talent initiatives in a fast-paced environment." },
    { id: 6, title: "Data Scientist (AI)", location: "Remote, US", type: "Full-time", industry: "Technology", desc: "Leverage machine learning to solve complex data challenges for a scaling US startup." },
    { id: 7, title: "Clinical Director", location: "Boston, MA", type: "Full-time", industry: "Healthcare", desc: "Lead clinical excellence within a prestigious Massachusetts medical institution. Deep experience in US healthcare systems required." },
    { id: 8, title: "Electrical Design Specialist", location: "Seattle, WA", type: "Contract", industry: "Engineering", desc: "Support ongoing aerospace engineering projects in the Pacific Northwest market." },
];

export function JobsClient() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const [selectedIndustry, setSelectedIndustry] = React.useState("All");

    const filteredJobs = JOBS_DATA.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.industry.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesIndustry = selectedIndustry === "All" || job.industry === selectedIndustry;
        return matchesSearch && matchesIndustry;
    });

    return (
        <div className="flex flex-col">
            <Hero
                title="Your Future in the US Awaits"
                subtitle="Browse high-impact career opportunities at the United States&apos; premier organizations. Filter by industry and find your match."
                backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80"
            />

            {/* Premium Filter Bar */}
            <section className="bg-white py-12 border-b border-border/40 sticky top-14 z-40 shadow-[0_10px_30px_rgba(0,0,0,0.02)] backdrop-blur-xl bg-white/90">
                <div className="container-custom">
                    <Reveal>
                        <div className="flex flex-col lg:flex-row items-center gap-10">
                            <div className="relative flex-grow w-full max-w-2xl">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-orange w-6 h-6 pointer-events-none" />
                                <Input
                                    placeholder="Search by job title, skills, or keywords..."
                                    className="pl-16 w-full h-16 bg-slate/5 border-transparent focus:bg-white focus:border-orange/30 focus:ring-orange/20 rounded-3xl text-lg font-dm-sans placeholder:opacity-50 transition-all shadow-inner"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center gap-6 w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
                                <div className="flex gap-4 shrink-0">
                                    {["All", "Technology", "Healthcare", "Finance", "Engineering", "Operations"].map((industry) => (
                                        <button
                                            key={industry}
                                            onClick={() => setSelectedIndustry(industry)}
                                            className={cn(
                                                "px-8 py-3 rounded-full text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-500 border-2",
                                                selectedIndustry === industry
                                                    ? "bg-orange border-orange text-white shadow-xl shadow-orange/30 scale-105"
                                                    : "bg-transparent border-slate/10 text-navy/60 hover:border-orange hover:text-orange hover:bg-slate/5"
                                            )}
                                        >
                                            {industry}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="py-24 sm:py-32 bg-slate/5 min-h-[600px]">
                <div className="container-custom">
                    <Reveal className="mb-16">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-navy/5 pb-10">
                            <div className="space-y-2">
                                <span className="text-orange font-bold text-xs uppercase tracking-widest block">Active Opportunities</span>
                                <h2 className="text-4xl font-bold text-navy font-sora">Explore <span className="text-orange">Current Vacancies</span></h2>
                            </div>
                            <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-2xl border border-border/40 shadow-sm">
                                <span className="text-sm font-dm-sans text-navy/40">Showing</span>
                                <span className="text-lg font-bold text-orange">{filteredJobs.length}</span>
                                <span className="text-sm font-dm-sans text-navy/40">Open Roles</span>
                            </div>
                        </div>
                    </Reveal>

                    {filteredJobs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {filteredJobs.map((job, idx) => (
                                <Reveal key={job.id} delayMs={idx * 70}>
                                    <div className="group bg-white p-10 rounded-[40px] border border-border/40 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col h-full relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange/5 rounded-bl-[5rem] -mr-8 -mt-8 transition-all duration-700 group-hover:bg-orange/10"></div>

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-10">
                                                <div className="flex gap-4">
                                                    <span className="text-[10px] font-bold text-orange bg-orange/10 px-4 py-1.5 rounded-full uppercase tracking-widest">
                                                        {job.industry}
                                                    </span>
                                                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full uppercase tracking-widest">
                                                        {job.type}
                                                    </span>
                                                </div>
                                            </div>

                                            <h3 className="text-3xl font-bold text-navy mb-4 font-sora group-hover:text-orange transition-colors duration-500 leading-tight">
                                                {job.title}
                                            </h3>

                                            <div className="flex items-center gap-6 text-body/60 text-sm font-dm-sans mb-8">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-orange" />
                                                    {job.location}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4 text-orange" />
                                                    {job.industry}
                                                </div>
                                            </div>

                                            <p className="text-body text-lg leading-relaxed font-dm-sans opacity-70 group-hover:opacity-100 transition-opacity duration-500 mb-10 line-clamp-3">
                                                {job.desc}
                                            </p>

                                            <div className="mt-auto">
                                                <Button className="w-full h-16 rounded-2xl bg-navy hover:bg-orange group/btn transition-all duration-500 border-none text-white" asChild>
                                                    <Link href="/contact" className="flex items-center justify-center gap-3 text-lg">
                                                        Apply for this Role
                                                        <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    ) : (
                        <div className="py-32 text-center animate-fade-in bg-white rounded-[40px] border border-dashed border-border/60">
                            <div className="bg-slate/5 inline-flex p-10 rounded-full mb-10">
                                <Search className="w-16 h-16 text-orange/30" />
                            </div>
                            <h3 className="text-3xl font-bold text-navy mb-4 font-sora">No matching positions found</h3>
                            <p className="text-xl text-body font-dm-sans max-w-lg mx-auto mb-12 opacity-60">We&apos;re constantly onboarding new partners. Submit your resume to be the first to know when matching US roles arrive.</p>
                            <Button size="lg" className="h-16 px-12 rounded-full font-bold tracking-widest uppercase text-xs bg-orange hover:bg-navy border-none" asChild>
                                <Link href="/candidates">Join Talent Network</Link>
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* Premium CTA Section */}
            <section className="py-24 bg-navy relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[140%] bg-orange rounded-full blur-[120px]"></div>
                </div>

                <div className="container-custom relative z-10">
                    <Reveal>
                        <div className="max-w-4xl mx-auto text-center space-y-10">
                            <h2 className="text-4xl lg:text-6xl font-bold text-white font-sora leading-tight">Don&apos;t see the right fit?</h2>
                            <p className="text-xl text-white/60 font-dm-sans max-w-2xl mx-auto leading-relaxed">
                                Our team works with hundreds of US employers. Join our active talent pool and let us bring the opportunities to you directly.
                            </p>
                            <div className="pt-6">
                                <Button variant="outlineWhite" className="h-20 px-16 text-xl rounded-full border-white/20 text-white hover:bg-orange hover:border-orange transition-all duration-500" asChild>
                                    <Link href="/candidates">Submit Resume & Join Talent Pool</Link>
                                </Button>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
