import type { Metadata } from "next";
import { CandidatesClient } from "@/components/pages/CandidatesClient";

export const metadata: Metadata = {
    title: "Career Opportunities | Submit Your Resume | Maxera Talent",
    description: "Find your next high-impact role in the US. Submit your resume to Maxera Talent and join our network of premier professionals.",
};

export default function CandidatesPage() {
    return <CandidatesClient />;
}
