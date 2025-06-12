import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./styles/globals.css";
import "./styles/styles.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ClientOnly } from "@/components/client-only";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Douglas Chen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <ClientOnly>
            {children}
          </ClientOnly>
        </ThemeProvider>
      </body>
    </html>
  );
}
