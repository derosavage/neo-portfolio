import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { MouseGlow } from "@/components/mouse-glow";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dero Savage | Full-Stack Developer",
  description:
    "A futuristic developer portfolio for Dero Savage, focused on full-stack engineering, AI systems, backend architecture, and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} bg-background text-foreground antialiased`}
      >
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
