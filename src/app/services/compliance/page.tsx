import { ServicePage } from "@/components/sections/ServicePage";
import { services } from "@/data/site";

export const metadata = {
  title: "Risk Management & Statutory Compliance | FinLever Consulting",
};

export default function CompliancePage() {
  return <ServicePage service={services[4]} />;
}
