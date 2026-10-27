import { ServiceLayout } from "@/components/services/ServiceLayout";
import { serviceMetadata } from "@/lib/seo";

export const metadata = serviceMetadata("travaux-de-finition");

export default function Page() {
  return <ServiceLayout slug="travaux-de-finition" />;
}
