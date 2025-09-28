import type { Metadata } from "next";
import "./globals.css";
import { QuizProvider } from "@/context/QuizContext";

export const metadata: Metadata = {
  title: "Daily Bios - Your daily dose of history, reimagined",
  description: "Three short biographies a day—tailored to how you like stories told.",
  keywords: "biographies, history, daily reading, personalized stories",
  authors: [{ name: "Labmelo" }],
  openGraph: {
    title: "Daily Bios - Your daily dose of history, reimagined",
    description: "Three short biographies a day—tailored to how you like stories told.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-navy text-off-white min-h-screen">
        <div className="fixed inset-0 bg-hero-gradient pointer-events-none" />
        <div className="relative z-10">
          <QuizProvider>
            {children}
          </QuizProvider>
        </div>
      </body>
    </html>
  );
}
