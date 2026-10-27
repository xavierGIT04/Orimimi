import { ServiceLayout } from "@/components/services/ServiceLayout";
import { serviceMetadata } from "@/lib/seo";

export const metadata = serviceMetadata("renovation-generale");

export default function Page() {
  return <ServiceLayout slug="renovation-generale" />;
}
