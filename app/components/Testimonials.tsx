"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MessageCircle, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Mitchell",
      age: 45,
      condition: "Cardiac Surgery",
      image: "/photo1.jpg?height=100&width=100",
      rating: 5,
      text: "The cardiac team at Alpha Hospital saved my life. Their expertise, compassion, and state-of-the-art facilities made all the difference. I'm forever grateful for the exceptional care I received.",
      date: "March 2024",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      name: "Robert Chen",
      age: 38,
      condition: "Orthopedic Surgery",
      image: "/photo1.jpg?height=100&width=100",
      rating: 5,
      text: "After my sports injury, I thought my active days were over. The orthopedic team not only fixed my knee but got me back to running marathons. Outstanding medical care!",
      date: "February 2024",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      name: "Maria Rodriguez",
      age: 52,
      condition: "Cancer Treatment",
      image: "/photo1.jpg?height=100&width=100",
      rating: 5,
      text: "Fighting cancer was the hardest battle of my life, but Alpha Hospital's oncology team stood by me every step of the way. Their holistic approach to care made all the difference.",
      date: "January 2024",
      gradient: "from-teal-500 to-green-600",
    },
    {
      name: "David Thompson",
      age: 29,
      condition: "Emergency Care",
      image: "/photo1.jpg?height=100&width=100",
      rating: 5,
      text: "When I had my accident, the emergency team's quick response and professional care were incredible. They treated me like family during the most frightening time of my life.",
      date: "March 2024",
      gradient: "from-emerald-600 to-green-700",
    },
    {
      name: "Jennifer Park",
      age: 34,
      condition: "Maternity Care",
      image: "/photo1.jpg?height=100&width=100",
      rating: 5,
      text: "From prenatal care to delivery, the maternity team made my pregnancy journey beautiful and safe. The nurses and doctors were amazing throughout the entire process.",
      date: "February 2024",
      gradient: "from-green-600 to-emerald-700",
    },
  ]

  const stats = [
    { value: "98%", label: "Patient Satisfaction", gradient: "from-emerald-500 to-green-600" },
    { value: "4.9/5", label: "Average Rating", gradient: "from-green-500 to-emerald-600" },
    { value: "10,000+", label: "Happy Patients", gradient: "from-teal-500 to-green-600" },
    { value: "500+", label: "5-Star Reviews", gradient: "from-emerald-600 to-green-700" },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-emerald-500" />
            <span className="text-emerald-600 font-semibold uppercase tracking-wide">Patient Stories</span>
            <Sparkles className="w-6 h-6 text-emerald-500" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real patients who have experienced exceptional care at Alpha Hospital.
          </p>
        </div>

        {/* Enhanced Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
              >
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Main Testimonial */}
        <div className="relative mb-16">
          <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-gradient-to-br from-white to-green-50/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className={`h-2 bg-gradient-to-r ${testimonials[currentTestimonial].gradient}`}></div>

              <div className="p-12">
                <div className="flex items-center justify-center mb-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${testimonials[currentTestimonial].gradient} rounded-3xl flex items-center justify-center shadow-lg`}
                  >
                    <Quote className="w-10 h-10 text-white" />
                  </div>
                </div>

                <div className="text-center mb-8">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-2xl lg:text-3xl text-gray-700 leading-relaxed font-medium mb-8 italic">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                </div>

                <div className="flex items-center justify-center space-x-6">
                  <div className="relative">
                    <Image
                      src={testimonials[currentTestimonial].image || "/photo1.jpg"}
                      alt={testimonials[currentTestimonial].name}
                      width={100}
                      height={100}
                      className="rounded-full shadow-lg"
                    />
                    <div
                      className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br ${testimonials[currentTestimonial].gradient} rounded-full flex items-center justify-center`}
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-2xl text-gray-900">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600 text-lg">
                      Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].condition}
                    </div>
                    <div className="text-sm text-emerald-600 font-semibold">
                      {testimonials[currentTestimonial].date}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="lg"
              className="rounded-full w-16 h-16 p-0 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="lg"
              className="rounded-full w-16 h-16 p-0 border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Enhanced Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`h-2 bg-gradient-to-r ${testimonial.gradient}`}></div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative mr-4">
                      <Image
                        src={testimonial.image || "/photo1.jpg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full shadow-md"
                      />
                      <div
                        className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center`}
                      >
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-emerald-600 font-medium">{testimonial.condition}</div>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">{testimonial.text}</p>

                  <div className="text-xs text-emerald-600 font-semibold">{testimonial.date}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
