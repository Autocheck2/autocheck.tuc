"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, Instagram, Facebook } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

const navigation = [
  { name: "Inicio", href: "#hero" },
  { name: "Servicios", href: "#servicios" },
  { name: "Proceso", href: "#proceso" },
  { name: "Por qué AutoChek", href: "#por-que-autochek" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Cobertura", href: "#cobertura" },
]

const sectionIds = navigation.map((item) => item.href.slice(1))

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const activeSection = useScrollSpy(sectionIds, 100)
  const { scrollToSection } = useSmoothScroll()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href) => {
    scrollToSection(href.slice(1))
    setIsOpen(false)
  }

  if (!mounted) return null

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-lg"
          : "bg-black/20 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-shrink-0">
            <button onClick={() => handleNavClick("#hero")} className="flex flex-col items-start">
              <span className="text-2xl font-bold font-heading text-primary hover:text-primary/80 transition-colors duration-200">
                AutoCheck
              </span>
              <span
                className={`text-xs font-normal transition-colors duration-200 ${
                  scrolled ? "text-muted-foreground" : "text-white/70"
                }`}
              >
                Revision Precompra de autos usados
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigation.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href.slice(1)
                      ? scrolled
                        ? "text-primary"
                        : "text-white font-semibold"
                      : scrolled
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`absolute inset-0 rounded-md ${scrolled ? "bg-primary/10" : "bg-white/20"}`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Social Media Links - Desktop */}
            <div className="hidden sm:flex items-center space-x-1">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/autochek.tucuman"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-200 ${
                  scrolled
                    ? "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Instagram className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com/autochek.tucuman"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-all duration-200 ${
                  scrolled
                    ? "text-muted-foreground hover:text-primary hover:bg-primary/10"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Facebook className="h-4 w-4" />
              </motion.a>
            </div>

            {/* Theme Toggle */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`w-9 h-9 p-0 transition-colors duration-200 ${
                  scrolled ? "hover:bg-accent text-foreground" : "hover:bg-white/20 text-white"
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(!isOpen)}
                  className={`w-9 h-9 p-0 transition-colors duration-200 ${
                    scrolled ? "hover:bg-accent text-foreground" : "hover:bg-white/20 text-white"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isOpen ? "close" : "open"}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </motion.div>
                  </AnimatePresence>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div
                className={`px-2 pt-2 pb-3 space-y-1 border-t rounded-b-lg transition-colors duration-200 ${
                  scrolled
                    ? "bg-card/50 backdrop-blur-sm border-border"
                    : "bg-black/30 backdrop-blur-md border-white/20"
                }`}
              >
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-200 ${
                      activeSection === item.href.slice(1)
                        ? scrolled
                          ? "text-primary bg-primary/10"
                          : "text-white bg-white/20 font-semibold"
                        : scrolled
                          ? "text-muted-foreground hover:text-foreground hover:bg-accent"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}

                <div className="flex justify-center space-x-4 pt-3 mt-3 border-t border-white/10">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://instagram.com/autochek.tucuman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-200 ${
                      scrolled
                        ? "text-muted-foreground hover:text-primary hover:bg-primary/10"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://facebook.com/autochek.tucuman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full transition-all duration-200 ${
                      scrolled
                        ? "text-muted-foreground hover:text-primary hover:bg-primary/10"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Facebook className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
