"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Calendar, Award, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TeamPreview() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Chief of Cardiology",
      image: "/photo1.jpg?height=300&width=300",
      experience: "15+ years",
      rating: 4.9,
      patients: "2,500+",
      awards: ["Top Cardiologist 2023", "Patient Choice Award"],
      gradient: "from-emerald-500 to-green-600",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurosurgeon",
      image: "/photo1.jpg?height=300&width=300",
      experience: "12+ years",
      rating: 4.8,
      patients: "1,800+",
      awards: ["Excellence in Surgery", "Medical Innovation"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Orthopedic Surgeon",
      image: "/photo1.jpg?height=300&width=300",
      experience: "18+ years",
      rating: 4.9,
      patients: "3,200+",
      awards: ["Sports Medicine Expert", "Surgical Excellence"],
      gradient: "from-teal-500 to-green-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-green-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-emerald-500" />
            <span className="text-emerald-600 font-semibold uppercase tracking-wide">Our Medical Team</span>
            <Sparkles className="w-6 h-6 text-emerald-500" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our board-certified physicians bring decades of experience and cutting-edge expertise to provide you with
            the highest quality medical care.
          </p>
        </div>

        {/* Enhanced Doctors Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`h-2 bg-gradient-to-r ${doctor.gradient}`}></div>

                <div className="relative overflow-hidden">
                  <Image
                    src={doctor.image || "/photo1.jpg"}
                    alt={doctor.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{doctor.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-4">{doctor.specialty}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Experience:</span>
                      <span className="font-semibold text-gray-800">{doctor.experience}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Patients Treated:</span>
                      <span className="font-semibold text-gray-800">{doctor.patients}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Recent Awards:</h4>
                    <div className="space-y-1">
                      {doctor.awards.slice(0, 2).map((award, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <Award className="w-3 h-3 text-emerald-500 mr-2" />
                          {award}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-xl transition-all duration-300 hover:scale-105 border-0"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-300"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-pulse"></div>

          <div className="relative z-10">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-emerald-100">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-emerald-100">Medical Specialties</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-emerald-100">Patient Satisfaction</div>
              </div>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Meet Our Medical Experts?</h3>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Browse our complete directory of board-certified physicians and find the right specialist for your
              healthcare needs.
            </p>

            <Link href="/team">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                View All Doctors
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
