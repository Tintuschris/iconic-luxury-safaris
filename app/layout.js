import localFont from 'next/font/local'
import "./globals.css";

const baskervilleOldFace = localFont({
  src: './fonts/baskerville-old-face.ttf',
  variable: '--font-baskerville'
})

const gerlomi = localFont({
  src: './fonts/Gerlomi.ttf',
  variable: '--font-gerlomi'
})

export const metadata = {
  title: "ICONIC  LUXURY SAFARIS",
  description: "Luxury safaris in Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${baskervilleOldFace.variable} ${gerlomi.variable}`}>
        {children}
      </body>
    </html>
  );
}