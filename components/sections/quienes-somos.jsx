"use client"

import { motion } from "framer-motion"
import { Target, Award, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const valores = [
  {
    icon: Target,
    title: "Nuestra Misión",
    description:
      "Brindar tranquilidad y confianza a quienes buscan comprar un vehículo usado, detectando problemas ocultos antes de la compra.",
  },
  {
    icon: Award,
    title: "Experiencia",
    description:
      "Años de experiencia en el rubro automotriz nos respaldan, combinando conocimiento técnico con tecnología de punta.",
  },
  {
    icon: Wrench,
    title: "Equipamiento",
    description: "Contamos con los mejores equipos del mercado para ofrecer diagnósticos precisos y confiables.",
  },
]

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenido Principal */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-foreground mb-6">
              ¿Quiénes <span className="text-primary">Somos?</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Somos una empresa del rubro automotriz dedicada a la{" "}
                <span className="text-foreground font-medium">revisión, diagnóstico y asesoramiento</span> sobre el
                estado y funcionamiento de vehículos usados.
              </p>
              <p>
                <span className="text-primary font-medium">AutoChek</span> nace como respuesta a la preocupación de
                nuestros clientes al momento de cambiar sus vehículos y encontrarse con problemas o dudas sobre su
                estado real.
              </p>
              <p>
                Por eso nos capacitamos y adquirimos los mejores equipos del mercado, combinándolos con nuestro amplio
                conocimiento mecánico para ofrecer un{" "}
                <span className="text-foreground font-medium">servicio profesional y confiable</span>.
              </p>
              <p className="text-lg font-medium text-primary">Logramos así garantía, confianza y fidelidad.</p>
            </div>
          </motion.div>

          {/* Valores */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {valores.map((valor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-border/50 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="p-3 rounded-lg bg-primary/10 mr-4 flex-shrink-0">
                        <valor.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{valor.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{valor.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
