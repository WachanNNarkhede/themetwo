import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, ArrowRight, Sparkles, Users, Tag } from "lucide-react"
import Image from "next/image"

export default function EventsPage() {
  const events = [
    {
      title: "Heart Health Awareness Seminar",
      date: "June 15, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Hospital Auditorium",
      description:
        "Join our cardiology experts for an informative session on heart disease prevention, lifestyle modifications, and the latest treatment options. Learn about risk factors, symptoms to watch for, and how to maintain a healthy heart.",
      image: "/photo1.jpg?height=300&width=400",
      category: "Seminar",
      attendees: 150,
      price: "Free",
      speaker: "Dr. Sarah Johnson",
      gradient: "from-emerald-500 to-green-600",
    },
    {
      title: "Diabetes Management Workshop",
      date: "June 20, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Conference Room A",
      description:
        "Interactive workshop covering diabetes management strategies, nutrition planning, blood sugar monitoring, and medication management. Includes hands-on demonstrations and Q&A session.",
      image: "/photo1.jpg?height=300&width=400",
      category: "Workshop",
      attendees: 75,
      price: "Free",
      speaker: "Dr. Michael Chen",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Women's Health Fair",
      date: "June 25, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Hospital Lobby",
      description:
        "Comprehensive women's health screenings, consultations, and educational sessions. Includes mammography, bone density tests, and consultations with gynecologists and other specialists.",
      image: "/photo1.jpg?height=300&width=400",
      category: "Health Fair",
      attendees: 200,
      price: "Free",
      speaker: "Multiple Specialists",
      gradient: "from-teal-500 to-green-600",
    },
    {
      title: "Pediatric Vaccination Drive",
      date: "July 5, 2025",
      time: "8:00 AM - 5:00 PM",
      location: "Pediatric Wing",
      description:
        "Free vaccination drive for children aged 0-18 years. All routine vaccines available including COVID-19, flu shots, and other immunizations as per age-appropriate schedules.",
      image: "/photo1.jpg?height=300&width=400",
      category: "Vaccination Drive",
      attendees: 300,
      price: "Free",
      speaker: "Dr. David Thompson",
      gradient: "from-emerald-600 to-green-700",
    },
    {
      title: "Mental Health Awareness Week",
      date: "July 10-16, 2025",
      time: "Various Times",
      location: "Multiple Locations",
      description:
        "Week-long series of events focusing on mental health awareness, stress management, and psychological well-being. Includes workshops, support groups, and individual consultations.",
      image: "/photo1.jpg?height=300&width=400",
      category: "Awareness Week",
      attendees: 500,
      price: "Free",
      speaker: "Mental Health Team",
      gradient: "from-green-600 to-emerald-700",
    },
    {
      title: "Senior Citizens Health Camp",
      date: "July 20, 2025",
      time: "9:00 AM - 2:00 PM",
      location: "Community Center",
      description:
        "Comprehensive health checkup camp for senior citizens including blood pressure monitoring, diabetes screening, eye checkups, and consultations with geriatric specialists.",
      image: "/photo1.jpg?height=300&width=400",
      category: "Health Camp",
      attendees: 150,
      price: "Free",
      speaker: "Geriatric Team",
      gradient: "from-emerald-500 to-teal-600",
    },
  ]

  const upcomingEvents = events.slice(0, 3)
  const allEvents = events

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-green-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white space-y-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-emerald-300" />
              <span className="text-emerald-200 font-semibold uppercase tracking-wide">Health Events</span>
              <Sparkles className="w-6 h-6 text-emerald-300" />
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
              Community Health Events
            </h1>

            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Join us for educational seminars, health screenings, and community wellness programs designed to promote
              better health and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fillOpacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t miss these upcoming health events and educational programs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`h-2 bg-gradient-to-r ${event.gradient}`}></div>

                  <div className="relative overflow-hidden">
                    <Image
                      src={event.image || "/photo1.jpg"}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute top-4 left-4">
                      <span
                        className={`bg-gradient-to-r ${event.gradient} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}
                      >
                        {event.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-semibold text-emerald-600">{event.price}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {event.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-emerald-500" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-emerald-500" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-emerald-500" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-emerald-500" />
                        {event.attendees} spots
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{event.description}</p>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">
                        Speaker: <strong>{event.speaker}</strong>
                      </span>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-xl transition-all duration-300 hover:scale-105 border-0">
                      Register Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-20 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/30 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310b981%22%20fillOpacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
              All Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse our complete calendar of health events and educational programs.
            </p>
          </div>

          <div className="space-y-8">
            {allEvents.map((event, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`h-2 bg-gradient-to-r ${event.gradient}`}></div>

                  <div className="grid md:grid-cols-3 gap-6 p-6">
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image
                        src={event.image || "/photo1.jpg"}
                        alt={event.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`bg-gradient-to-r ${event.gradient} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}
                        >
                          {event.category}
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-4">
                      <div className="flex items-start justify-between">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <Tag className="w-4 h-4 text-emerald-500" />
                          <span className="text-sm font-semibold text-emerald-600">{event.price}</span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-3 text-emerald-500" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-3 text-emerald-500" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-3 text-emerald-500" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-3 text-emerald-500" />
                          {event.attendees} spots
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed">{event.description}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          Speaker: <strong>{event.speaker}</strong>
                        </span>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-xl transition-all duration-300 hover:scale-105 border-0"
                        >
                          Register Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-green-600 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fillRule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fillOpacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-pulse"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-white space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Stay Updated on Health Events</h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive notifications about upcoming health events, seminars, and community
              programs.
            </p>
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Subscribe to Updates
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
