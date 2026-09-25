import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
});

const title = "Shumail Khan — Full-Stack Developer & AI/ML Engineer";
const description =
  "Portfolio of Shumail Khan: full-stack MERN engineering and AI/ML — computer vision, NLP, and predictive analytics — with production-deployed projects.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shumail-khan.netlify.app"),
  title,
  description,
  keywords: [
    "Shumail Khan",
    "Full Stack Developer",
    "AI Engineer",
    "Machine Learning Engineer",
    "MERN Stack",
    "Computer Vision",
    "NLP",
    "React Developer",
    "Python Developer",
  ],
  authors: [{ name: "Shumail Khan" }],
  openGraph: {
    title,
    description,
    url: "https://shumail-khan.netlify.app",
    siteName: "Shumail Khan — Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jbMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes' && m.attributeName === 'bis_skin_checked' && m.target) {
                        m.target.removeAttribute('bis_skin_checked');
                      }
                    }
                  }).observe(document.documentElement, {
                    attributes: true,
                    subtree: true,
                    attributeFilter: ['bis_skin_checked']
                  });
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
