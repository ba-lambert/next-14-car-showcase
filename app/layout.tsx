import type { Metadata } from "next";
import "./globals.css";
import { Footer,Navabar } from "@/components";

export const metadata: Metadata = {
  title: "Car Show case",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navabar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
