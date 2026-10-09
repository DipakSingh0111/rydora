import type { Metadata } from "next";
import PageBanner from "../components/PageBanner";
import CarRentalEnquiry from "../components/CarRentalEnquiry";

export const metadata: Metadata = {
  title: "Enquiry",
  description: "Enquiry form for car rental services.",
};

export default function EnquiryPage() {
  return (
    <main className="flex-1">
      <PageBanner title="Enquiry" />
      <CarRentalEnquiry />
    </main>
  );
}
