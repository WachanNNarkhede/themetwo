"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Award,
  Heart,
  Building2,
  Truck,
  AlertTriangle,
  Stethoscope,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPreview() {
  const stats = [
    { icon: Users, value: "50,000+", label: "Patients Treated", gradient: "from-emerald-500 to-green-600" },
    { icon: Stethoscope, value: "200+", label: "Expert Doctors", gradient: "from-green-500 to-emerald-600" },
    { icon: Building2, value: "25+", label: "Years of Excellence", gradient: "from-teal-500 to-green-600" },
    { icon: Award, value: "100+", label: "Awards Won", gradient: "from-emerald-600 to-green-700" },
  ]

  const features = [
    {
      icon: Heart,
      title: "Advanced Medical Care",
      description: "State-of-the-art medical equipment and cutting-edge treatment protocols.",
    },
    {
      icon: Truck,
      title: "Emergency Services",
      description: "24/7 emergency care with rapid response ambulance services.",
    },
    {
      icon: AlertTriangle,
      title: "Critical Care",
      description: "Specialized intensive care units with expert medical supervision.",
    },
    {
      icon: Clock,
      title: "Round-the-Clock Care",
      description: "Continuous patient monitoring and care throughout the day.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Pattern */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-emerald-500" />
                <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">About Alpha Hospital</h2>
              </div>
              <h3 className="text-4xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Excellence in Healthcare Since 1999
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Alpha Hospital has been at the forefront of medical excellence, providing world-class healthcare
                services with compassion, innovation, and unwavering commitment to patient care.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Our state-of-the-art facility combines advanced medical technology with a team of highly skilled
                healthcare professionals to deliver comprehensive medical services across multiple specialties.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in treating not just the condition, but the whole person, ensuring that every patient
                receives personalized care tailored to their unique needs and circumstances.
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group p-4 rounded-2xl hover:bg-green-50/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl border-0"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Enhanced Image & Stats */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <Image
                src="/photo1.jpg?height=400&width=600"
                alt="Alpha Hospital Building"
                width={600}
                height={400}
                className="relative rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-3xl"></div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
                >
                  <CardContent className="p-6 text-center">
                    <div className={`h-1 bg-gradient-to-r ${stat.gradient} mb-4`}></div>
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
