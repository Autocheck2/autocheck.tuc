"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false)
  const phoneNumber = "3816654204" // Número de WhatsApp de AutoChek
  const message =
    "Hola! Me interesa el servicio de inspección pre-compra de AutoChek. ¿Podrían brindarme más información?"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <>
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="fixed bottom-20 right-6 z-40"
          >
            <div className="bg-card border border-border rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-foreground text-sm">¿Necesitas ayuda?</h4>
                <button
                  onClick={() => setShowTooltip(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Contactanos por WhatsApp para consultas sobre nuestro servicio de inspección
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white text-xs py-2 px-3 rounded-md transition-colors"
              >
                Enviar mensaje
              </button>
            </div>
            {/* Arrow */}
            <div className="absolute bottom-0 right-8 transform translate-y-1/2">
              <div className="w-3 h-3 bg-card border-r border-b border-border rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />

          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-green-500/20 blur-md group-hover:bg-green-500/30 transition-all duration-300"></div>
        </motion.button>

        {/* Mobile Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
          className="absolute bottom-full right-0 mb-2 md:hidden"
        >
          <div className="bg-green-500 text-white text-xs py-1 px-2 rounded whitespace-nowrap">¡Contactanos!</div>
        </motion.div>
      </motion.div>
    </>
  )
}
