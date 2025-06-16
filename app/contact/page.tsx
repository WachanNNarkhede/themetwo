"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Send,
  MessageCircle,
  Navigation,
  Calendar,
  Stethoscope,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    department: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Medical Center Dr", "Healthcare City, HC 12345"],
      gradient: "from-emerald-500 to-green-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Emergency: (555) 123-4567", "General: (555) 123-4568"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@alphahospital.com", "appointments@alphahospital.com"],
      gradient: "from-teal-500 to-green-600",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["24/7 Emergency Care", "Mon-Fri: 8AM-8PM"],
      gradient: "from-emerald-600 to-green-700",
    },
  ]

  const departments = [
    "General Inquiry",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Emergency Care",
    "Ophthalmology",
    "Internal Medicine",
    "Surgery",
    "Other",
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-green-700 overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-pulse"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white space-y-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-emerald-300" />
              <span className="text-emerald-200 font-semibold uppercase tracking-wide">Contact Us</span>
              <Sparkles className="w-6 h-6 text-emerald-300" />
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Get in Touch
            </h1>

            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              We&apos;re here to help you with all your healthcare needs. Reach out to us for appointments, inquiries, or
              emergency care.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fillOpacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`h-2 bg-gradient-to-r ${info.gradient}`}></div>
                  <div className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                    >
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-green-600"></div>
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Smith"
                          className="rounded-xl border-green-200 focus:border-emerald-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          className="rounded-xl border-green-200 focus:border-emerald-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 123-4567"
                          className="rounded-xl border-green-200 focus:border-emerald-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department" className="text-sm font-semibold text-gray-700">
                          Department
                        </Label>
                        <Select
                          value={formData.department}
                          onValueChange={(value) => handleSelectChange("department", value)}
                        >
                          <SelectTrigger className="rounded-xl border-green-200">
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept} value={dept}>
                                {dept}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="How can we help you?"
                        className="rounded-xl border-green-200 focus:border-emerald-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your inquiry in detail..."
                        className="rounded-xl border-green-200 focus:border-emerald-500 min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border-0"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Map and Quick Actions */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                        <Navigation className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Find Us</h2>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
                      <MapPin className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Alpha Hospital</h3>
                      <p className="text-gray-600 mb-4">
                        123 Medical Center Dr
                        <br />
                        Healthcare City, HC 12345
                      </p>
                      <Button
                        variant="outline"
                        className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 rounded-xl"
                      >
                        Get Directions
                        <Navigation className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-2 bg-gradient-to-r from-teal-500 to-green-600"></div>
                  <div className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl flex items-center justify-center">
                        <Stethoscope className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Quick Actions</h2>
                    </div>

                    <div className="space-y-4">
                      <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border-0">
                        <Calendar className="mr-2 w-5 h-5" />
                        Book Appointment
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <Phone className="mr-2 w-5 h-5" />
                        Call Emergency: (555) 123-4567
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <Mail className="mr-2 w-5 h-5" />
                        Email Us
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
