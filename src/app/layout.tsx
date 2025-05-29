import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "../../public/assets/css/animate.min.css";
import "../../public/assets/css/fontawesome.min.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/jquery.fancybox.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/responsive.css";

import Header from "../../public/components/Header";
import ColorPicker from "../../public/components/ColorPicker";
import PageLoader from "../../public/components/PageLoader";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "App",
  description: "Es una aplicación de ejemplo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistMono.variable} antialiased bg-color12 bg-blend-luminosity dark-layer2 opc9 bg-att-fixed scheme1 dark`}
        style={{
          backgroundImage: "url(assets/images/pattern-bg.png)",
        }}
      >
        <main>
          <PageLoader />
          <Header />
          <ColorPicker />

          {children}
        </main>

        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/jquery.fancybox.min.js"></script>
        <script src="assets/js/swiper-bundle.min.js"></script>
        <script src="assets/js/ResizeSensor.min.js"></script>
        <script src="assets/js/theia-sticky-sidebar.min.js"></script>
        <script src="assets/js/scripts.js"></script>
      </body>
    </html>
  );
}
