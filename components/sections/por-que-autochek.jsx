"use client"

import { motion } from "framer-motion"
import { Users, Wrench, FileText, Clock, Shield, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const razones = [
  {
    icon: Users,
    title: "Atención personalizada",
    description: "Atención directa y sin intermediarios: diagnóstico honesto, soluciones claras y seguimiento hasta que quedes conforme.",
    stats: "Un técnico dedicado a tu vehículo",
  },
  {
    icon: Wrench,
    title: "Herramientas de Diagnóstico Avanzadas",
    description: "Utilizamos equipos de última generación para detectar problemas que otros no pueden ver.",
    stats: "Tecnología de punta",
  },
  {
    icon: FileText,
    title: "Informe Detallado",
    description: "Recibes un reporte completo con fotos, videos y explicaciones claras de todos los hallazgos.",
    stats: "Documentación completa",
  },
  {
    icon: Clock,
    title: "Rapidez y Eficiencia",
    description: "Realizamos la inspección de manera eficiente sin comprometer la calidad del diagnóstico.",
    stats: "Resultados el mismo día",
  },
  {
    icon: Shield,
    title: "Asesoría 100% Imparcial",
    description: "No compramos ni vendemos autos. Solo te protegemos como comprador con información objetiva.",
    stats: "Independencia total",
  },
  {
    icon: Target,
    title: "Enfoque en el Cliente",
    description: "Tu tranquilidad es nuestra prioridad. Te acompañamos en todo el proceso de decisión.",
    stats: "Satisfacción garantizada",
  },
]

export default function PorQueAutoChek() {
  return (
    <section id="por-que-autochek" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-foreground mb-6">
            ¿Por qué elegir <span className="text-primary">AutoChek?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos la opción más confiable para la inspección de vehículos usados en Tucumán
          </p>
        </motion.div>

        {/* Grid de Razones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {razones.map((razon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors mr-4">
                      <razon.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{razon.title}</h3>
                      <span className="text-sm text-primary font-medium">{razon.stats}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{razon.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Destacado */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Garantía de Imparcialidad</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                A diferencia de otros servicios, nosotros{" "}
                <span className="text-foreground font-medium">NO compramos ni vendemos autos</span>. Esto nos permite
                ser 100% objetivos e imparciales en nuestros diagnósticos.
                <span className="text-primary font-medium"> Tu tranquilidad es nuestro único objetivo.</span>
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-primary mr-2" />
                  Sin conflictos de interés
                </div>
                <div className="flex items-center">
                  <Target className="h-4 w-4 text-primary mr-2" />
                  Diagnósticos objetivos
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-primary mr-2" />
                  Enfoque en el cliente
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
