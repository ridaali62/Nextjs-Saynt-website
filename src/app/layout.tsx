import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Provider from "./Components/ReactQueryProvider";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:4000"
  ),
  title: {
    default: "Saynt AI — Bringing AI Into Everyday Life",
    template: "%s | Saynt AI",
  },
  description:
    "Saynt AI builds AI-powered products, like ConnectEd, that turn everyday tasks and learning into simpler, smarter experiences.",
  openGraph: {
    title: "Saynt AI",
    description:
      "Saynt AI builds AI-powered products, like ConnectEd, that turn everyday tasks and learning into simpler, smarter experiences.",
    siteName: "Saynt AI",
    images: ["/logo.png"],
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full w-[100%] mx-auto`}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
