import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B0B14",
};

export const metadata: Metadata = {
  title: "ELEVORA — Rise Beyond Potential | Verified Proof of Work",
  description:
    "Elevora turns real work into a verified record that candidates can showcase and recruiters can trust. Role roadmaps, live skill checks, AI coaching, and living Proof Cards.",
  keywords: [
    "Elevora",
    "Proof Card",
    "verified skills",
    "developer portfolio",
    "AI coach",
    "technical interview",
    "career roadmap",
    "verified talent",
  ],
  authors: [{ name: "Elevora Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-[#0B0B14] text-white selection:bg-[#7C5CFF] selection:text-white flex flex-col justify-between font-sans">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
