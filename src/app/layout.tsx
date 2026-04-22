import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Studio Name | Luxury Interior Design",
  description: "Award-winning interior design studio specializing in luxury residential, commercial & hospitality spaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" crossOrigin="anonymous" />
      </head>
      <body className="bg-stone-950 text-stone-100 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
