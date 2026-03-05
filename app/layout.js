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
  title: "Elias Lofgren | Digital Business Card",
  description:
    "Elias Lofgren - digital business card. Scandinavian design, modern web experiences."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${dmSerif.variable}`}>{children}</body>
    </html>
  );
}
