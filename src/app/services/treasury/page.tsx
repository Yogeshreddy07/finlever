import { ServicePage } from "@/components/sections/ServicePage";
import { services } from "@/data/site";

export const metadata = {
  title: "Corporate Treasury & Capital Allocation | FinLever Consulting",
};

export default function TreasuryPage() {
  return <ServicePage service={services[2]} />;
}
