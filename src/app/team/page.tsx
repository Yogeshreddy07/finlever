import type { Metadata } from "next";
import { TeamClient } from "./TeamClient";

export const metadata: Metadata = {
  title: "Leadership Team | FinLever Consulting",
};

export default function TeamPage() {
  return <TeamClient />;
}
