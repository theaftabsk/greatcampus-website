import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GreatCampus — Assess. Interview. Develop | AI-Powered Integrated Talent Journey",
  description:
    "AI-powered talent solutions to identify the right people, make better hiring decisions, and continuously develop talent. From assessment to interview to development, GreatCampus helps organizations build a smarter, faster and more measurable talent journey.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${font.variable} h-full antialiased scroll-smooth`}>
      <body className="flex min-h-full flex-col bg-white text-[#09090b] font-sans">
        {children}
      </body>
    </html>
  );
}
