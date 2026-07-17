import type { Metadata } from "next";
import DestinationPage from "@/app/transferts/DestinationPage";
import { buildDestinationMetadata } from "@/app/transferts/destination-page-data";

export const metadata: Metadata = buildDestinationMetadata("saint-ferreol");

export default function SaintFerreolDestinationPage() {
  return <DestinationPage slug="saint-ferreol" />;
}
