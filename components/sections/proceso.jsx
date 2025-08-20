"use client"

import { motion } from "framer-motion"
import { Phone, Calendar, MapPin, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const pasos = [
  {
    numero: "01",
    icon: Phone,
    title: "Solicitud",
    description:
      "Contactanos por WhatsApp o teléfono para solicitar tu inspección. Te asesoramos sobre el servicio y coordinamos los detalles.",
    detalles: ["Consulta gratuita", "Asesoramiento personalizado", "Presupuesto inmediato"],
  },
  {
    numero: "02",
    icon: Calendar,
    title: "Coordinación",
    description:
      "Programamos la fecha y hora que mejor te convenga. Nos adaptamos a tu disponibilidad para mayor comodidad.",
    detalles: ["Horarios flexibles", "Confirmación 24hs antes", "Reprogramación sin costo"],
  },
  {
    numero: "03",
    icon: MapPin,
    title: "Inspección In Situ",
    description:
      "Nos trasladamos hasta donde esté el vehículo en San Miguel de Tucumán. Realizamos la inspección completa con equipos profesionales.",
    detalles: ["Nos trasladamos sin costo", "Equipos de última generación", "Inspección exhaustiva"],
  },
  {
    numero: "04",
    icon: FileText,
    title: "Informe Detallado",
    description:
      "Recibes un informe completo con hallazgos, fotos, videos y nuestras recomendaciones profesionales para tu decisión de compra.",
    detalles: ["Informe con fotos y videos", "Recomendaciones claras", "Entrega inmediata"],
  },
]

export default function Proceso() {
  return (
    <section id="proceso" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 pb-40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-foreground mb-6">
            Nuestro <span className="text-primary">Proceso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un proceso simple y profesional diseñado para tu comodidad y tranquilidad
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea conectora - solo visible en desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pasos.map((paso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                {/* Número del paso */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg">
                      {paso.numero}
                    </div>
                    {/* Punto de conexión */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
                  </div>
                </div>

                <Card className="h-full border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <paso.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{paso.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{paso.description}</p>
                    <ul className="space-y-2">
                      {paso.detalles.map((detalle, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {detalle}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
