import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jardineo - Gestion intelligente de jardin",
  description: "Téléchargez l'application mobile Jardineo pour iOS et Android. Gérez votre jardin intelligemment avec visualisation AR.",
  keywords: ["jardineo", "jardin", "plantes", "application mobile", "réalité augmentée"],
  icons: {
    icon: '/favicon.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Jardineo - Gestion intelligente de jardin",
    description: "Téléchargez l'application mobile Jardineo pour iOS et Android.",
    images: ['/logo.png'],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
