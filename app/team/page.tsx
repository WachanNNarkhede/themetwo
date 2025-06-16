import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star, Calendar, Award, Sparkles } from "lucide-react"
import Image from "next/image"

export default function TeamPage() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Chief of Cardiology",
      image: "/photo1.jpg?height=400&width=400",
      experience: "15+ years",
      rating: 4.9,
      patients: "2,500+",
      education: "Harvard Medical School",
      certifications: ["Board Certified Cardiologist", "Fellow of American College of Cardiology"],
      awards: ["Top Cardiologist 2023", "Patient Choice Award", "Excellence in Cardiac Surgery"],
      bio: "Dr. Johnson is a renowned cardiologist with over 15 years of experience in treating complex heart conditions. She specializes in minimally invasive cardiac procedures and has performed over 1,000 successful heart surgeries.",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurosurgeon",
      image: "/photo1.jpg?height=400&width=400",
      experience: "12+ years",
      rating: 4.8,
      patients: "1,800+",
      education: "Johns Hopkins University",
      certifications: ["Board Certified Neurosurgeon", "Fellow of American Association of Neurological Surgeons"],
      awards: ["Excellence in Surgery", "Medical Innovation Award", "Best Neurosurgeon 2022"],
      bio: "Dr. Chen is a leading neurosurgeon specializing in brain and spine surgery. He has pioneered several minimally invasive techniques and is actively involved in neurological research.",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Orthopedic Surgeon",
      image: "/photo1.jpg?height=400&width=400",
      experience: "18+ years",
      rating: 4.9,
      patients: "3,200+",
      education: "Stanford University School of Medicine",
      certifications: ["Board Certified Orthopedic Surgeon", "Sports Medicine Specialist"],
      awards: ["Sports Medicine Expert", "Surgical Excellence Award", "Top Orthopedic Surgeon 2023"],
      bio: "Dr. Rodriguez is an expert in orthopedic surgery with a focus on sports medicine and joint replacement. She has helped numerous athletes return to their peak performance.",
      gradient: "from-teal-500 to-green-600",
    },
    {
      name: "Dr. David Thompson",
      specialty: "Pediatrician",
      image: "/photo1.jpg?height=400&width=400",
      experience: "20+ years",
      rating: 4.9,
      patients: "4,000+",
      education: "University of California, San Francisco",
      certifications: ["Board Certified Pediatrician", "Pediatric Emergency Medicine"],
      awards: ["Best Pediatrician 2023", "Children's Choice Award", "Excellence in Pediatric Care"],
      bio: "Dr. Thompson has dedicated his career to pediatric medicine, providing comprehensive care for children from infancy through adolescence. He is known for his gentle approach and excellent bedside manner.",
      gradient: "from-emerald-600 to-green-700",
    },
    {
      name: "Dr. Lisa Wang",
      specialty: "Emergency Medicine",
      image: "/photo1.jpg?height=400&width=400",
      experience: "10+ years",
      rating: 4.8,
      patients: "5,000+",
      education: "Yale School of Medicine",
      certifications: ["Board Certified Emergency Medicine", "Advanced Trauma Life Support"],
      awards: ["Emergency Medicine Excellence", "Rapid Response Award", "Life Saver Award 2023"],
      bio: "Dr. Wang leads our emergency department with expertise in critical care and trauma medicine. She has saved countless lives through her quick thinking and medical expertise.",
      gradient: "from-green-600 to-emerald-700",
    },
    {
      name: "Dr. Robert Kim",
      specialty: "Ophthalmologist",
      image: "/photo1.jpg?height=400&width=400",
      experience: "14+ years",
      rating: 4.9,
      patients: "2,800+",
      education: "University of Pennsylvania",
      certifications: ["Board Certified Ophthalmologist", "Retinal Surgery Specialist"],
      awards: ["Vision Excellence Award", "Best Eye Surgeon 2022", "Innovation in Ophthalmology"],
      bio: "Dr. Kim is a skilled ophthalmologist specializing in retinal surgery and vision correction. He has restored sight to thousands of patients using the latest surgical techniques.",
      gradient: "from-emerald-500 to-teal-600",
    },
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
              <span className="text-emerald-200 font-semibold uppercase tracking-wide">Our Medical Team</span>
              <Sparkles className="w-6 h-6 text-emerald-300" />
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Meet Our Expert Doctors
            </h1>

            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Our board-certified physicians bring decades of experience and cutting-edge expertise to provide you with
              the highest quality medical care.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fillOpacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
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
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Education:</span>
                        <span className="font-semibold text-gray-800 text-right">{doctor.education}</span>
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

                    <p className="text-sm text-gray-600 mb-6 line-clamp-3">{doctor.bio}</p>

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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-green-600 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-pulse"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white space-y-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
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
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50,000+</div>
                <div className="text-emerald-100">Lives Saved</div>
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Meet Our Medical Experts?</h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Schedule a consultation with our board-certified physicians and experience world-class healthcare.
            </p>

            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Book Appointment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
