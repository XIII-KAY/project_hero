import type { Metadata } from "next";
import ServicesPage from "@/components/landing/services-page";
import SiteFooter from "@/components/landing/site-footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI data annotation, survey research, transcription, remote workforce, software development and automation services delivered as agency capabilities or specialist expertise.",
};

export default function Services() {
  return (
    <div className="app">
      <ServicesPage />
      <div className="pad">
        <SiteFooter />
      </div>
    </div>
  );
}