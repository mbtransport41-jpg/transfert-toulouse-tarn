import type { Metadata } from "next";
import DestinationPage from "@/app/transferts/DestinationPage";
import { buildDestinationMetadata } from "@/app/transferts/destination-page-data";

export const metadata: Metadata = buildDestinationMetadata("castelsarrasin");

export default function CastelsarrasinDestinationPage() {
  return <DestinationPage slug="castelsarrasin" />;
}
