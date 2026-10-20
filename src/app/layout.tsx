import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const fontHeading = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GreatCampus — Assess. Interview. Develop | AI-Powered Integrated Talent Journey",
  description:
    "AI-powered talent solutions to identify the right people, make better hiring decisions, and continuously develop talent. From assessment to interview to development, GreatCampus helps organizations build a smarter, faster and more measurable talent journey.",
  icons: {
    icon: "/greatcampus-logo-cropped.png",
    shortcut: "/greatcampus-logo-cropped.png",
    apple: "/greatcampus-logo-cropped.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-white text-[#09090b] font-sans selection:bg-[#09090b] selection:text-white">
        {children}
      </body>
    </html>
  );
}

