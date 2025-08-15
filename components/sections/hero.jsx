"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
          >
            <Shield className="h-4 w-4 mr-2" />
            Servicio 100% Imparcial y Profesional
          </motion.div>

          {/* Título Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-6"
          >
            Comprá tranquilidad con <span className="text-primary">autochek</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            La compra de un auto usado es un sueño, pero más de la mitad presenta problemas ocultos.
            <span className="text-foreground font-medium"> Detectarlos antes de pagar es nuestro trabajo.</span>
          </motion.p>

          {/* Beneficios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {[
              "Inspección técnica completa",
              "Informe detallado con fotos",
              "Nos trasladamos a donde esté el vehículo",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center text-muted-foreground">
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

          {/* Badges de Confianza */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-8 text-muted-foreground"
          >
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm">+500 inspecciones realizadas</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm">Técnicos certificados</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-sm">100% de satisfacción</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
