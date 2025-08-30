"use client"

import { motion } from "framer-motion"
import { Scan, AlertTriangle, Shield, FileText, CheckCircle, Gauge } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const servicios = [
  {
    icon: Scan,
    title: "Chequeo Electrónico",
    description: "Escáner de última generación para diagnóstico completo del sistema electrónico del vehículo",
    features: ["Códigos de error ocultos", "Estado de sensores", "Sistemas de control"],
    incluido: true,
  },
  {
    icon: AlertTriangle,
    title: "Detección de Fallas Ocultas",
    description: "Identificamos problemas que no son visibles a simple vista pero que pueden ser costosos",
    features: ["Fallas intermitentes", "Desgaste prematuro", "Problemas futuros"],
    incluido: true,
  },
  {
    icon: Shield,
    title: "Control ABS y Frenos",
    description: "Revisión completa del sistema de frenado y seguridad activa del vehículo",
    features: ["Sistema ABS", "Pastillas y discos", "Líquido de frenos"],
    incluido: true,
  },
  {
    icon: Gauge,
    title: "Verificación de Quilómetros Reales",
    description: "Análisis técnico para detectar manipulación del odómetro y confirmar el kilometraje real",
    features: ["Historial de mantenimientos", "Desgaste coherente", "Verificación electrónica"],
    incluido: true,
  },
  {
    icon: FileText,
    title: "Control de Carrocería",
    description: "Medición precisa con micrómetro para detectar deformaciones y reparaciones",
    features: ["Mediciones exactas", "Historial de choques", "Calidad de reparaciones"],
    incluido: true,
  },
  {
    icon: CheckCircle,
    title: "Informe de Dominio",
    description: "Verificación legal completa del vehículo para una compra 100% segura",
    features: ["Sin deudas ni prendas", "Titular verificado", "Sin embargos"],
    precio: "$14.999",
    incluido: false,
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-foreground mb-6">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Ofrecemos una inspección técnica completa con la tecnología más avanzada del mercado
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-lg font-semibold">
            <span>Inspección Completa:</span>
            <span className="text-2xl font-bold">$49.999</span>
          </div>
        </motion.div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 relative">
                {servicio.precio && (
                  <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {servicio.precio}
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 mr-4">
                      <servicio.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground">{servicio.title}</h3>
                      {servicio.incluido && (
                        <span className="text-xs text-primary font-medium">Incluido en inspección</span>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{servicio.description}</p>
                  <ul className="space-y-2">
                    {servicio.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Informe de Dominio Destacado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-foreground">¿Por qué es importante el Informe de Dominio?</h3>
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-lg">
                    $14.999
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
                  El informe de dominio automotor es un documento oficial que te protege de estafas y problemas legales.
                  Consultarlo antes de comprar es fundamental para tu tranquilidad.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                  {[
                    "Verificar deudas, prendas y embargos",
                    "Confirmar que el vendedor sea el titular",
                    "Detectar juicios o denuncias pendientes",
                    "Evitar estafas y conflictos legales",
                    "Compra segura y transparente",
                    "Tranquilidad total en tu inversión",
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
