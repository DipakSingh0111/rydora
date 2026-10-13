import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer, Navbar } from "@/components/common";
import { MotionProvider } from "@/components/ui/motion";
import "./globals.css";
import { getRydoraSections } from "@/lib/rydora";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rydora | Luxury Car Rental Services",
    template: "%s | Rydora",
  },
  description:
    "Experience the art of luxury driving with Rydora's exceptional collection of premium vehicles.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const sections = getRydoraSections();

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col">
        <MotionProvider>
          <Navbar data={sections.Header?.variants?.RydoraHeader1} />
          {children}
          <Footer data={sections.Footer?.variants?.RydoraFooter1} />
        </MotionProvider>
      </body>
    </html>
  );
}
