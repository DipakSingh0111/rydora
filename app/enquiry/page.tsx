import type { Metadata } from "next";
import PageBanner from "../components/PageBanner";
import CarRentalEnquiry from "../components/CarRentalEnquiry";
import { getRydoraSections } from "@/lib/rydora";

export const metadata: Metadata = {
  title: "Enquiry",
  description: "Enquiry form for car rental services.",
};

export default function EnquiryPage() {
  const sections = getRydoraSections();

  return (
    <main className="flex-1">
      <PageBanner title="Enquiry" />
      <CarRentalEnquiry data={sections.EnquiryForm?.variants?.RydoraEnquiryForm1} />
    </main>
  );
}
