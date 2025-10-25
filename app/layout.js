import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fireflies FC - Jakarta Fun Football Club",
  description: "Komunitas sepakbola terbaik di Jakarta - Bermain, Berkembang, Bersama. Rutin bermain Minisoccer, Futsal, dan 11v11 setiap dua minggu sekali.",
  keywords: "sepakbola, futsal, Jakarta, football club, sports community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
