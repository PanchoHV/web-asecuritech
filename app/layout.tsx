import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asecuritech | Ecosistema de Sincronicidad para la Protección Humana",
  description: "Líderes en prevención e inteligencia de seguridad mediante IoT, LoRaWAN y Respuesta Operativa Sincronizada.",
  keywords: ["Seguridad IoT", "LoRaWAN Quito", "Sentinel OS", "Zephira App", "Asecuritech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
