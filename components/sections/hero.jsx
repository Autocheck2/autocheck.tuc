"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.png"
          alt="AutoChek background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content with higher z-index */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Título Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 drop-shadow-lg"
          >
            Antes de comprar tu próximo usado, <span className="text-primary">autochek</span>
          </motion.h1>

          {/* Beneficios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-10 mt-10"
          >
            {[
              "Inspección técnica completa",
              "Informe detallado con fotos",
              "Nos trasladamos a donde esté el vehículo",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-200 drop-shadow-sm">
                <CheckCircle className="h-5 w-5 text-primary mr-2" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" onClick={() => scrollToSection("#servicios")} className="text-lg px-8 py-3 h-auto">
              Ver Servicios
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#proceso")}
              className="text-lg px-8 py-3 h-auto"
            >
              Cómo Funciona
            </Button>
          </motion.div>
      
        </div>
      </div>
    </section>
  )
}
