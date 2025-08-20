import Header from "@/components/layout/header"
import WhatsAppFloat from "@/components/layout/whatsapp-float"
import Hero from "@/components/sections/hero"
import Servicios from "@/components/sections/servicios"
import QuienesSomos from "@/components/sections/quienes-somos"
import Proceso from "@/components/sections/proceso"
import PorQueAutoChek from "@/components/sections/por-que-autochek"
import Testimonios from "@/components/sections/testimonios"
import Cobertura from "@/components/sections/cobertura"
import GaleriaTrabajo from "@/components/sections/galeria-trabajo"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Servicios />
      <QuienesSomos />
      <Proceso />
      <GaleriaTrabajo />
      <PorQueAutoChek />
      <Testimonios />
      <Cobertura />
      <WhatsAppFloat />
    </main>
  )
}
