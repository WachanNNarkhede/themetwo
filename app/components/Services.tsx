"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Brain, Bone, Baby, Activity, Eye, Stethoscope, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care with advanced cardiac procedures and preventive treatments.",
      features: ["Heart Surgery", "Cardiac Catheterization", "Preventive Care"],
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-50",
    },
    {
      icon: Brain,
      title: "Neurology",
      description: "Expert neurological care for brain, spine, and nervous system disorders.",
      features: ["Brain Surgery", "Stroke Treatment", "Neurological Disorders"],
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Advanced bone and joint treatments with minimally invasive procedures.",
      features: ["Joint Replacement", "Sports Medicine", "Fracture Care"],
      gradient: "from-teal-500 to-green-600",
      bgGradient: "from-teal-50 to-green-50",
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Specialized healthcare for infants, children, and adolescents.",
      features: ["Child Development", "Vaccinations", "Pediatric Surgery"],
      gradient: "from-emerald-600 to-green-700",
      bgGradient: "from-emerald-50 to-green-50",
    },
    {
      icon: Activity,
      title: "Emergency Care",
      description: "24/7 emergency services with rapid response and critical care.",
      features: ["Trauma Care", "Critical Care", "Emergency Surgery"],
      gradient: "from-green-600 to-emerald-700",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care services from routine exams to complex surgeries.",
      features: ["Cataract Surgery", "Retinal Care", "Vision Correction"],
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-emerald-500" />
            <span className="text-emerald-600 font-semibold uppercase tracking-wide">Our Services</span>
            <Sparkles className="w-6 h-6 text-emerald-500" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From routine check-ups to complex surgeries, we provide complete medical care across all specialties with
            state-of-the-art technology and expert physicians.
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border-0 bg-white/80 backdrop-blur-sm overflow-hidden h-full">
                <CardContent className="p-0 h-full">
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                  <div className="p-8 flex flex-col h-full">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 12 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <div className="space-y-2 mb-6 flex-grow">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all duration-300 rounded-xl group-hover:scale-105 mt-auto"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:50px_50px]"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Stethoscope className="w-16 h-16 mx-auto mb-6 text-white/80" />
            </motion.div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Need Medical Assistance?</h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Our expert medical team is available 24/7 to provide you with the best healthcare services. Book your
              appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
              >
                Emergency: (555) 123-4567
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
