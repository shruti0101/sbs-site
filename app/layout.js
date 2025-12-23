import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Social from "@/components/Landingpage/Social";
import Stickybutton from "@/components/Landingpage/Stickybutton";
import Script from "next/script";

// Roboto
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

// Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Paper Cup Making Machine",
  description:
    "Discover top-quality paper cup Making machines manufactured in Delhi, India. Enhance your production efficiency with our innovative and reliable solutions.",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KVG53JFL');
        `}
      </Script>
      {/* End Google Tag Manager */}

      {/* Google Ads Global Site Tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16881818475"
        strategy="afterInteractive"
      />

      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'AW-16881818475');
        `}
      </Script>
      {/* End Google Ads */}

      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KVG53JFL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End GTM noscript */}

        <LayoutWrapper>
          <Social />
          <Stickybutton />
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
