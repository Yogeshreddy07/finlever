import { ServicePage } from "@/components/sections/ServicePage";
import { services } from "@/data/site";

export const metadata = {
  title: "Global Accounting & Reporting | FinLever Consulting",
};

export default function AccountingPage() {
  return <ServicePage service={services[3]} />;
}
