import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/themeProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Formex",
  description: "Generate forms in matter of minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <body className={inter.className}>{children}</body>
        </ThemeProvider>
      </html>
    </ClerkProvider>
  );
}
