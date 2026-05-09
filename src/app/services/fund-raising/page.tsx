import { ServicePage } from "@/components/sections/ServicePage";
import { services } from "@/data/site";

export const metadata = {
  title: "Transaction and Deal Advisory | FinLever Consulting",
};

export default function FundRaisingPage() {
  return <ServicePage service={services[1]} />;
}
