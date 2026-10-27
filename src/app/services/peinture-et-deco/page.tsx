import { ServiceLayout } from "@/components/services/ServiceLayout";
import { serviceMetadata } from "@/lib/seo";

export const metadata = serviceMetadata("peinture-et-deco");

export default function Page() {
  return <ServiceLayout slug="peinture-et-deco" />;
}
