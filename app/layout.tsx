import { Space_Grotesk } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Ayush Dixit | Portfolio",
  description: "Ayush Dixit | Full-Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={` bg-[#0A0A0C] antialiased max-w-[1300px] mx-auto select-none ${spaceGrotesk.className}`}
      >
        {children }
      </body>
    </html>
  );
}
