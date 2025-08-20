import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata = {
  title: "AutoChek - Revisión Pre-Compra de Autos Usados | Tucumán",
  description:
    "Comprá tranquilidad con AutoChek. Servicio profesional de inspección técnica para autos usados en Tucumán. Detectamos problemas ocultos antes de tu compra.",
  keywords: "revision autos usados, inspeccion vehiculos, autochek tucuman, compra segura autos",
  authors: [{ name: "AutoChek" }],
  creator: "AutoChek",
  publisher: "AutoChek",
  openGraph: {
    title: "AutoChek - Revisión Pre-Compra de Autos Usados",
    description: "Comprá tranquilidad con AutoChek. Detectamos problemas ocultos antes de tu compra.",
    url: "https://autochek.com.ar",
    siteName: "AutoChek",
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <style>{`
          html {
            font-family: ${inter.style.fontFamily};
            --font-inter: ${inter.variable};
            --font-poppins: ${poppins.variable};
          }
        `}</style>
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="autochek-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
