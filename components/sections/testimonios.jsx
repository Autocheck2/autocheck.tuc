"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonios = [
  {
    nombre: "Carlos Mendoza",
    ubicacion: "San Miguel de Tucumán",
    rating: 5,
    testimonio:
      "Excelente servicio. Me detectaron problemas en la transmisión que no había notado. Me ahorraron una compra que hubiera sido muy costosa. Súper recomendable.",
    vehiculo: "Toyota Corolla 2018",
  },
  {
    nombre: "María González",
    ubicacion: "Yerba Buena",
    rating: 5,
    testimonio:
      "Muy profesionales y detallados. El informe que me entregaron tenía fotos y explicaciones muy claras. Gracias a ellos compré mi auto con total tranquilidad.",
    vehiculo: "Honda Civic 2019",
  },
  {
    nombre: "Roberto Silva",
    ubicacion: "Las Talitas",
    rating: 5,
    testimonio:
      "Se trasladaron hasta donde estaba el auto sin problemas. La inspección fue muy completa y me explicaron todo de manera sencilla. Excelente atención.",
    vehiculo: "Volkswagen Vento 2017",
  },
  {
    nombre: "Ana Rodríguez",
    ubicacion: "Tafí Viejo",
    rating: 5,
    testimonio:
      "Contraté el servicio por recomendación y superó mis expectativas. Muy honestos y transparentes. El informe de dominio me dio mucha seguridad.",
    vehiculo: "Chevrolet Onix 2020",
  },
  {
    nombre: "Diego Herrera",
    ubicacion: "San Miguel de Tucumán",
    rating: 5,
    testimonio:
      "Increíble el nivel de detalle de la inspección. Detectaron fallas que ni el vendedor sabía que existían. Definitivamente los volvería a contratar.",
    vehiculo: "Ford Focus 2016",
  },
  {
    nombre: "Lucía Morales",
    ubicacion: "Banda del Río Salí",
    rating: 5,
    testimonio:
      "Servicio impecable. Me asesoraron durante todo el proceso y me dieron recomendaciones muy valiosas. Compré mi auto con total confianza.",
    vehiculo: "Renault Logan 2019",
  },
]

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-foreground mb-6">
            Lo que dicen nuestros <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mejor respaldo
          </p>
        </motion.div>

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="h-8 w-8 text-primary/30" />
                    <div className="flex">
                      {[...Array(testimonio.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonio */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{testimonio.testimonio}"</p>

                  {/* Info del Cliente */}
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonio.nombre}</h4>
                        <p className="text-sm text-muted-foreground">{testimonio.ubicacion}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-primary">{testimonio.vehiculo}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Inspecciones Realizadas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Clientes Satisfechos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5★</div>
                  <div className="text-muted-foreground">Calificación Promedio</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
