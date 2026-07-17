import type { Metadata } from "next";
import DestinationPage from "@/app/transferts/DestinationPage";
import { buildDestinationMetadata } from "@/app/transferts/destination-page-data";

export const metadata: Metadata = buildDestinationMetadata("albi");

export default function AlbiDestinationPage() {
  return <DestinationPage slug="albi" />;
}
