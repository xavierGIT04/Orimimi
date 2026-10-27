import { ServiceLayout } from "@/components/services/ServiceLayout";
import { serviceMetadata } from "@/lib/seo";

export const metadata = serviceMetadata("renovation-energetique");

export default function Page() {
  return <ServiceLayout slug="renovation-energetique" />;
}
