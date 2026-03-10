import type { Metadata } from "next";
import { ContactClient } from "@/components/pages/ContactClient";

export const metadata: Metadata = {
    title: "Contact Us | Get in Touch | Maxera Talent",
    description: "Connect with Maxera Talent. Whether you are hiring in the US or looking for your next career move, we are here to help.",
};

export default function ContactPage() {
    return <ContactClient />;
}
