import Header from "@/components/layout/header";
import "./globals.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import Script from "next/script";
//import Footer from "@/components/layout/footer";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Template Brigadeiro",
  description: "",
  keywords: [

  ],
  alternates: {
    canonical: "template-brigadeiro",
    languages: {
      "pt-BR": "/pt-BR",
    },
  },
  // openGraph: {
  // 	images: [
  // 		{
  // 			url: "",
  // 			width: 2048,
  // 			height: 449,
  // 		},
  // 	],
  // },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/img/favicon.png",
    shortcut: "/img/favicon.png",
    apple: "/img/favicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/img/favicon.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=WWN2PP5T" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'WWN2PP5T');
        `}
        </Script>
      </head>
      <body className={mulish.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WWN2PP5T"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <Header />
        {children}
        {/*<Footer /> */}
      </body>
    </html>
  );
}