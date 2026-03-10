import type { Metadata } from "next";
import { JobsClient } from "@/components/pages/JobsClient";

export const metadata: Metadata = {
    title: "Open Jobs | Search US Career Opportunities | Maxera Talent",
    description: "Browse the latest job openings in technology, healthcare, and finance across the United States. Apply today and take the next step in your career.",
};

export default function JobsPage() {
    return <JobsClient />;
}
