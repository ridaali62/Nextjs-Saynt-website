import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Saynt AI, where we connect AI into daily life to make everyday tasks easier.",
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  return children;
}
