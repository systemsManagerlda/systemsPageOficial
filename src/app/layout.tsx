import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import type { Viewport } from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Systems Manager",
  authors: [{ name: "Lucas Coutinho Marcelino" }],
  referrer: "origin-when-cross-origin",
  keywords: [
    "Software de Gestão ERP",
    "Sistema de Faturação para Empresas",
    "Fornecedor de ERP Empresarial",
    "Software de Gestão de Negócios",
    "Desenvolvimento de Software Personalizado",
    "Sistema de Faturamento Automático",
    "Software de Gestão Empresarial",
    "ERP para Empresas",
    "Plataforma de Gestão e Faturação",
    "Gestão Financeira e Faturação",
    "Fornecedor de Soluções ERP",
    "Sistemas de Faturação e Contabilidade",
    "Desenvolvimento de ERP Sob Medida",
    "Soluções de ERP e Faturação",
    "Software de Contabilidade e Faturação",
    "Automação de Processos Empresariais",
    "Plataformas de Gestão para Empresas",
    "ERP e Sistema de Faturação",
    "Desenvolvimento de Softwares Corporativos",
    "Software para Gestão de Empresas",
    "Desenvolvimento de Páginas Web",
    "Desenvolvimento de Sites",
  ],
  description:
    "Empresa de Desenvolvimento de Software e Fornecimento de Sistema de Gestão Empresarial ERP e de Facturação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
