import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Accredian | Next-Gen Expertise",
  description: "Cultivate high-performance teams through expert learning.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} min-h-screen antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-white text-gray-900">{children}</body>
    </html>
  );
}
