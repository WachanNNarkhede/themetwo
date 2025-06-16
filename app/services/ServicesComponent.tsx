"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Heart, Brain, Bone, Shield, Clock, Users, Award, ChevronRight, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { allDiseases } from "./data/diseases"
import { allTreatments } from "./data/treatments"
import { medicalDepartments } from "./data/departments"
import { debounce } from "lodash"

const specialties = [
  {
    id: "cardiovascular",
    name: "Cardiovascular",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-50",
    description: "Comprehensive heart and vascular care with advanced diagnostic and treatment options.",
    services: ["Cardiac Surgery", "Interventional Cardiology", "Heart Transplant", "Electrophysiology"],
    stats: { patients: "15,000+", success: "98%", experience: "25 years" },
  },
  {
    id: "neurological",
    name: "Neurological",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    description: "Advanced neurological care for brain, spine, and nervous system disorders.",
    services: ["Neurosurgery", "Stroke Care", "Epilepsy Treatment", "Movement Disorders"],
    stats: { patients: "12,000+", success: "96%", experience: "20 years" },
  },
  {
    id: "orthopedic",
    name: "Orthopedic",
    icon: Bone,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    description: "Expert care for bones, joints, muscles, and sports-related injuries.",
    services: ["Joint Replacement", "Sports Medicine", "Spine Surgery", "Trauma Care"],
    stats: { patients: "18,000+", success: "97%", experience: "30 years" },
  },
  {
    id: "cancer",
    name: "Cancer Care",
    icon: Shield,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    description: "Comprehensive cancer treatment with cutting-edge technology and compassionate care.",
    services: ["Oncology", "Radiation Therapy", "Chemotherapy", "Immunotherapy"],
    stats: { patients: "8,000+", success: "94%", experience: "15 years" },
  },
  {
    id: "emergency",
    name: "Emergency",
    icon: Clock,
    color: "text-green-500",
    bgColor: "bg-green-50",
    description: "24/7 emergency care with rapid response and advanced life support.",
    services: ["Trauma Care", "Critical Care", "Emergency Surgery", "Pediatric Emergency"],
    stats: { patients: "25,000+", success: "99%", experience: "24/7" },
  },
]

const emergencyServices = [
  { name: "Emergency Room", waitTime: "< 15 min", status: "Available" },
  { name: "Trauma Center", waitTime: "Immediate", status: "Available" },
  { name: "Cardiac Emergency", waitTime: "< 5 min", status: "Available" },
  { name: "Pediatric Emergency", waitTime: "< 10 min", status: "Available" },
]

const faqs = [
  {
    question: "What insurance plans do you accept?",
    answer:
      "We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, Cigna, and many others. Please contact our billing department to verify your specific coverage.",
  },
  {
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule an appointment by calling our main number, using our online booking system, or visiting our patient portal. For urgent matters, please call our emergency line.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Please bring a valid ID, insurance card, list of current medications, and any relevant medical records or test results from other providers.",
  },
  {
    question: "Do you offer telemedicine services?",
    answer:
      "Yes, we offer telemedicine consultations for many specialties. This allows you to consult with our doctors from the comfort of your home for follow-ups and non-emergency consultations.",
  },
]

export default function ServicesComponent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeSpecialty, setActiveSpecialty] = useState("cardiovascular")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Debounced search
  const debouncedSearch = useMemo(() => debounce((term: string) => setSearchTerm(term), 300), [])

  const filteredDiseases = useMemo(() => {
    if (!searchTerm) return allDiseases.slice(0, 6)
    return allDiseases.filter((disease) => disease.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 6)
  }, [searchTerm])

  const filteredTreatments = useMemo(() => {
    if (!searchTerm) return allTreatments.slice(0, 6)
    return allTreatments.filter((treatment) => treatment.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 6)
  }, [searchTerm])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Custom Cursor */}
      <div
        className="fixed w-4 h-4 bg-emerald-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out hidden lg:block"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      {/* Subtle Background Pattern - Only in hero section */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-200 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-green-300 rounded-full animate-pulse"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent mb-6">
              Our Medical Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare services with cutting-edge technology and compassionate care. Your health is our
              priority, and excellence is our standard.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for treatments, conditions, or symptoms..."
                className="pl-12 pr-4 py-4 text-lg text-black rounded-2xl border-2 border-emerald-100 focus:border-emerald-300 bg-white/80 backdrop-blur-sm shadow-lg"
                onChange={(e) => debouncedSearch(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Tabs value={activeSpecialty} onValueChange={setActiveSpecialty} className="w-full">
          {/* Specialty Navigation */}
          <div className="mb-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto p-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TabsTrigger
                    value={specialty.id}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl data-[state=active]:bg-emerald-500 data-[state=active]:text-white transition-all duration-300 hover:scale-105"
                  >
                    <specialty.icon className="w-6 text-black h-6" />
                    <span className="text-sm text-black font-medium">{specialty.name}</span>
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
          </div>

          {/* Specialty Content */}
          <AnimatePresence mode="wait">
            {specialties.map((specialty) => (
              <TabsContent key={specialty.id} value={specialty.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="mb-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-4 rounded-2xl ${specialty.bgColor}`}>
                          <specialty.icon className={`w-8 h-8 ${specialty.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-3xl font-bold text-gray-800">
                            {specialty.name} Department
                          </CardTitle>
                          <CardDescription className="text-lg text-gray-600 mt-2">
                            {specialty.description}
                          </CardDescription>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl">
                          <Users className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-800">{specialty.stats.patients}</div>
                          <div className="text-sm text-gray-600">Patients Treated</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl">
                          <Award className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-800">{specialty.stats.success}</div>
                          <div className="text-sm text-gray-600">Success Rate</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl">
                          <Clock className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-gray-800">{specialty.stats.experience}</div>
                          <div className="text-sm text-gray-600">Experience</div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {specialty.services.map((service, index) => (
                          <motion.div
                            key={service}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-gray-800">{service}</span>
                              <ChevronRight className="w-4 h-4 text-emerald-500" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>

        {/* Search Results */}
        {searchTerm && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Search Results</h2>

            {/* Diseases */}
            {filteredDiseases.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-700 mb-6">Conditions & Diseases</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDiseases.map((disease, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-lg font-semibold text-gray-800">{disease}</CardTitle>
                          <Badge variant="secondary" className="w-fit">
                            Medical Condition
                          </Badge>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">Professional medical care available for this condition.</p>
                          <Button variant="outline" size="sm" className="w-full">
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Treatments */}
            {filteredTreatments.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-700 mb-6">Treatments & Procedures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTreatments.map((treatment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-lg font-semibold text-gray-800">{treatment}</CardTitle>
                          <Badge variant="secondary" className="w-fit">
                            Treatment Available
                          </Badge>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">Advanced treatment options with expert medical care.</p>
                          <Button variant="outline" size="sm" className="w-full">
                            Schedule Consultation
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Emergency Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border-0 shadow-xl bg-gradient-to-r from-red-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <Clock className="w-8 h-8 text-red-500" />
                Emergency Services
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                24/7 emergency care with immediate response times and expert medical staff.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {emergencyServices.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-white rounded-xl shadow-lg border border-red-100"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-800">{service.name}</h3>
                      <Badge className="bg-green-100 text-green-800 border-green-200">{service.status}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-gray-600">Wait Time: {service.waitTime}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-red-50 rounded-xl border border-red-100">
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-red-500" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Emergency Hotline</h4>
                    <p className="text-red-600 font-bold text-lg">911 or +1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Medical Departments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Medical Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {medicalDepartments.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-emerald-100 rounded-xl">
                        <dept.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">{dept.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600">{dept.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Key Services:</h4>
                        <div className="flex flex-wrap gap-2">
                          {dept.treatments.slice(0, 3).map((service) => (
                            <Badge key={service} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{dept.accreditation}</span>
                        </div>
                        <Button variant="outline" size="sm" className="hover:bg-emerald-50">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800 text-center mb-4">
                Frequently Asked Questions
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 text-center">
                Find answers to common questions about our services and facilities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-emerald-600 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="border-0 shadow-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white">
            <CardContent className="py-16">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Take the first step towards better health. Schedule your appointment today and experience world-class
                healthcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Book Appointment
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
