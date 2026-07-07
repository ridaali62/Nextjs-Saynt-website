import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read, study, and unite — insights from Saynt AI on AI, sustainability, growth, and engineering.",
};

export default function BlogsLayout({ children }: { children: ReactNode }) {
  return children;
}
