"use client"

import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { toggleAppointmentModal } from "../store/slices/uiSlice"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Shield, Users, Award, Sparkles, Zap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const dispatch = useDispatch()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Excellence in Healthcare",
      subtitle: "Your Health, Our Priority",
      description: "Providing world-class medical care with state-of-the-art facilities and compassionate service.",
      image: "/photo1.jpg?height=800&width=1200",
      cta: "Book Appointment",
    },
    {
      title: "Advanced Medical Technology",
      subtitle: "Innovation Meets Care",
      description: "Equipped with the latest medical technology and staffed by expert healthcare professionals.",
      image: "/photo2.jpg?height=800&width=1200",
      cta: "Learn More",
    },
    {
      title: "24/7 Emergency Care",
      subtitle: "Always Here for You",
      description: "Round-the-clock emergency services with rapid response and expert medical attention.",
      image: "/herophoto3.jpg?height=800&width=1200",
      cta: "Emergency Info",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const stats = [
    { icon: Heart, value: "50,000+", label: "Patients Treated", gradient: "from-emerald-500 to-green-600" },
    { icon: Users, value: "200+", label: "Expert Doctors", gradient: "from-green-500 to-emerald-600" },
    { icon: Shield, value: "25+", label: "Years of Excellence", gradient: "from-teal-500 to-green-600" },
    { icon: Award, value: "100+", label: "Awards Won", gradient: "from-green-600 to-emerald-700" },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-emerald-800 to-green-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:50px_50px]"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
          animate={{ y: [0, -15, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        ></motion.div>
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-emerald-300/20 rounded-full blur-lg"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-green-400/15 rounded-full blur-md"
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        ></motion.div>
      </div>

      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 0.3 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={slide.image || "/photo1.jpg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-2 text-emerald-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-5 h-5" />
                <h2 className="text-lg font-medium">{slides[currentSlide].subtitle}</h2>
              </motion.div>

              <motion.h1
                className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                className="text-xl text-emerald-100 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {slides[currentSlide].description}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                onClick={() => dispatch(toggleAppointmentModal())}
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group border-0"
              >
                <Zap className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                {slides[currentSlide].cta}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 text-center text-white hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:-rotate-1 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  whileHover={{ rotate: 12 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-emerald-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8 shadow-lg" : "bg-white/50 hover:bg-white/75 w-2"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  )
}
