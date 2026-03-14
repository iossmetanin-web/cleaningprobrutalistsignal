import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const merriweather = Merriweather({
  variable: "--font-serif",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "CleaningPRO — Профессиональный клининг в Москве",
  description: "Уборка без контроля: принимайте идеальный результат. Фиксируем цену до выезда клинера. 80 пунктов чек-листа, страховое покрытие 5 млн ₽.",
  keywords: ["клининг", "уборка", "Москва", "генеральная уборка", "уборка после ремонта", "профессиональный клининг"],
  authors: [{ name: "CleaningPRO" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "CleaningPRO — Профессиональный клининг",
    description: "Уборка без контроля: принимайте идеальный результат",
    url: "https://cleaningpro.ru",
    siteName: "CleaningPRO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${merriweather.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
