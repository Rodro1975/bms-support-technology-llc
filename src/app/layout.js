import { Roboto } from 'next/font/google'; // Importar la fuente Roboto
import './globals.css'; // Mantén la importación de tus estilos globales

// Cargar la fuente Roboto
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: "BMS Support Technology",
  description: "Aplicación para soporte tecnológico de BMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
