import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: "Napoli Tour: 14 - 17 Maggio",
  description: "Itinerario ottimizzato per il viaggio a Napoli in famiglia. Info accessibilità, mappa interattiva e timeline.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
