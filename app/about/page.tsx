import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Building2, Sparkles, Stethoscope, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "50,000+", label: "Patients Treated", gradient: "from-emerald-500 to-green-600" },
    { icon: Stethoscope, value: "200+", label: "Expert Doctors", gradient: "from-green-500 to-emerald-600" },
    { icon: Building2, value: "25+", label: "Years of Excellence", gradient: "from-teal-500 to-green-600" },
    { icon: Award, value: "100+", label: "Awards Won", gradient: "from-emerald-600 to-green-700" },
  ]

  const milestones = [
    {
      year: "1999",
      title: "Foundation",
      description: "Alpha Hospital was established with a vision to provide world-class healthcare services.",
    },
    {
      year: "2005",
      title: "Expansion",
      description: "Added new departments and state-of-the-art medical equipment to enhance patient care.",
    },
    {
      year: "2010",
      title: "Research Center",
      description: "Established a dedicated research center for medical innovations and clinical trials.",
    },
    {
      year: "2015",
      title: "International Recognition",
      description: "Received international accreditation for excellence in healthcare services.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented advanced digital health solutions and telemedicine services.",
    },
    {
      year: "2023",
      title: "Community Outreach",
      description: "Expanded community health programs to serve underprivileged populations.",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-green-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white space-y-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-emerald-300" />
              <span className="text-emerald-200 font-semibold uppercase tracking-wide">About Us</span>
              <Sparkles className="w-6 h-6 text-emerald-300" />
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Our Story of Excellence
            </h1>

            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              For over 25 years, Alpha Hospital has been at the forefront of medical excellence, providing world-class
              healthcare services with compassion, innovation, and unwavering commitment to patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fillOpacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-emerald-500" />
                  <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                    Our Mission & Vision
                  </h2>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                  Committed to Excellence in Healthcare
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our mission is to provide exceptional healthcare services that improve the health and well-being of
                  the communities we serve.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100">
                  <h4 className="text-2xl font-bold text-emerald-700 mb-4">Our Mission</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To deliver compassionate, high-quality healthcare services that improve the health and well-being of
                    our patients and communities through innovation, excellence, and a commitment to service.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100">
                  <h4 className="text-2xl font-bold text-emerald-700 mb-4">Our Vision</h4>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading healthcare provider recognized for excellence in patient care, medical innovation,
                    and community health improvement, setting the standard for healthcare delivery in our region and
                    beyond.
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100">
                  <h4 className="text-2xl font-bold text-emerald-700 mb-4">Our Values</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span>
                        <strong>Compassion:</strong> Treating every patient with kindness, empathy, and respect
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span>
                        <strong>Excellence:</strong> Striving for the highest standards in healthcare delivery
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span>
                        <strong>Innovation:</strong> Embracing new technologies and approaches to improve care
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      <span>
                        <strong>Integrity:</strong> Maintaining the highest ethical standards in all we do
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-green-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <Image
                  src="/photo1.jpg?height=600&width=800"
                  alt="Alpha Hospital Building"
                  width={800}
                  height={600}
                  className="relative rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-3xl"></div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/90 transition-all duration-500 hover:scale-105 hover:-rotate-1 shadow-lg border border-emerald-100"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Milestones */}
      <section className="py-20 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/30 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fillOpacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-emerald-500" />
              <span className="text-emerald-600 font-semibold uppercase tracking-wide">Our Journey</span>
              <Sparkles className="w-6 h-6 text-emerald-500" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              History & Milestones
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From our humble beginnings to becoming a leading healthcare institution, our journey has been marked by
              continuous growth and unwavering commitment to excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500 to-green-600 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="text-emerald-600 font-bold text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-green-600 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-pulse"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Join Us in Our Mission for Better Healthcare</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Whether you&apos;re seeking medical care, looking to join our team, or interested in supporting our community
              initiatives, we welcome you to be part of our journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/team">
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Meet Our Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
