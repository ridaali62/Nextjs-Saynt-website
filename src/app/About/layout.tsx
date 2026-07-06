import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Saynt AI's mission to integrate cutting-edge AI models into everyday life.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
