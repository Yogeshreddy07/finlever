import { ServicePage } from "@/components/sections/ServicePage";
import { services } from "@/data/site";

export const metadata = {
  title: "Consulting & Virtual CFO Services | FinLever Consulting",
};

export default function ConsultingPage() {
  return (
    <ServicePage
      service={services[0]}
      titleOverride="Consulting & Virtual CFO Services"
    />
  );
}
