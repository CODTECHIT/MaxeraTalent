import type { Metadata } from "next";
import { EmployersClient } from "@/components/pages/EmployersClient";

export const metadata: Metadata = {
    title: "Hire Top US Talent | Submit Hiring Request | Maxera Talent",
    description: "Scale your US team with precision. Submit a hiring request and access a vetted pool of top 5% professionals across tech, healthcare, and finance.",
};

export default function EmployersPage() {
    return <EmployersClient />;
}
