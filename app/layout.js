import "./globals.css";
import { DM_Serif_Display, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif"
});

export const metadata = {
  title: "Elias Löfgren | Growth & Marketing Leader",
  description:
    "Elias Löfgren — 15+ years building and scaling revenue engines in digital consumer companies. Head of Marketing at Insurello."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmSerif.variable}`}>{children}</body>
    </html>
  );
}
