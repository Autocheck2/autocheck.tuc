"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const zonas = [
  "San Miguel de Tucumán (Centro)",
  "Yerba Buena",
  "Las Talitas",
  "Tafí Viejo",
  "Banda del Río Salí",
  "Alderetes",
  "Villa Mariano Moreno",
  "El Manantial",
]

export default function Cobertura() {
  const handleWhatsAppClick = () => {
    const message = "Hola! Me interesa el servicio de inspección de AutoChek. ¿Podrían brindarme más información?"
    const whatsappUrl = `https://wa.me/5493815121038?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="cobertura" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-foreground mb-6">
            Nuestra <span className="text-primary">Cobertura</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nos trasladamos a donde esté tu vehículo en toda la zona metropolitana de Tucumán
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mapa/Zonas */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="border-border/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Zonas de Cobertura</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {zonas.map((zona, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{zona}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="font-medium text-foreground">¿Tu zona no está en la lista?</span>
                    <br />
                    Consultanos, podemos evaluar casos especiales
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Horarios de Atención</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Lunes a Viernes:</span>
                    <span className="font-medium">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-medium">8:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="font-medium">Solo emergencias</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">Contacto Directo</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-muted-foreground mb-2">WhatsApp (Recomendado)</p>
                    <p className="font-medium text-foreground">+54 9 381 512-1038</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2">Email</p>
                    <p className="font-medium text-foreground">info@autochek.com.ar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">¿Listo para inspeccionar tu próximo auto?</h3>
                <p className="text-muted-foreground mb-6">Contactanos ahora y programa tu inspección</p>
                <Button onClick={handleWhatsAppClick} size="lg" className="w-full sm:w-auto">
                  <Phone className="h-4 w-4 mr-2" />
                  Contactar por WhatsApp
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
