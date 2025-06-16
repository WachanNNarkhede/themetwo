"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ArrowRight, Sparkles, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewsEvents() {
  const events = [
    {
      title: "Heart Health Awareness Seminar",
      date: "June 15, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Hospital Auditorium",
      description:
        "Join our cardiology experts for an informative session on heart disease prevention and lifestyle modifications.",
      image: "/photo1.jpg?height=200&width=300",
      category: "Seminar",
      attendees: 150,
      gradient: "from-emerald-500 to-green-600",
    },
    {
      title: "Diabetes Management Workshop",
      date: "June 20, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Conference Room A",
      description:
        "Interactive workshop covering diabetes management strategies, nutrition planning, and blood sugar monitoring.",
      image: "/photo1.jpg?height=200&width=300",
      category: "Workshop",
      attendees: 75,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Women's Health Fair",
      date: "June 25, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Hospital Lobby",
      description: "Comprehensive women's health screenings, consultations, and educational sessions.",
      image: "/photo1.jpg?height=200&width=300",
      category: "Health Fair",
      attendees: 200,
      gradient: "from-teal-500 to-green-600",
    },
  ]

  const news = [
    {
      title: "Alpha Hospital Receives Excellence Award",
      excerpt: "Our hospital has been recognized for outstanding patient care and medical innovation.",
      date: "May 28, 2025",
      image: "/photo1.jpg?height=200&width=300",
      category: "Awards",
      gradient: "from-emerald-600 to-green-700",
    },
    {
      title: "New Robotic Surgery Center Opens",
      excerpt: "State-of-the-art robotic surgery facility now operational, offering minimally invasive procedures.",
      date: "May 25, 2025",
      image: "/photo1.jpg?height=200&width=300",
      category: "Technology",
      gradient: "from-green-600 to-emerald-700",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-emerald-500" />
            <span className="text-emerald-600 font-semibold uppercase tracking-wide">Latest Updates</span>
            <Sparkles className="w-6 h-6 text-emerald-500" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
            News & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest health seminars, medical breakthroughs, and hospital news.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Enhanced Events Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-gray-900">Upcoming Events</h3>
              <Link href="/events">
                <Button
                  variant="outline"
                  className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 rounded-xl"
                >
                  View All Events
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className={`h-2 bg-gradient-to-r ${event.gradient}`}></div>

                    <div className="grid md:grid-cols-3 gap-6 p-6">
                      <div className="relative overflow-hidden rounded-2xl">
                        <Image
                          src={event.image || "/photo1.jpg"}
                          alt={event.title}
                          width={300}
                          height={200}
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
                        <h4 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                          {event.title}
                        </h4>

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

                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white rounded-xl transition-all duration-300 hover:scale-105 border-0"
                        >
                          Register Now
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced News Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Latest News</h3>
            </div>

            <div className="space-y-6">
              {news.map((article, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className={`h-2 bg-gradient-to-r ${article.gradient}`}></div>

                    <div className="relative overflow-hidden">
                      <Image
                        src={article.image || "/photo1.jpg"}
                        alt={article.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className={`bg-gradient-to-r ${article.gradient} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}
                        >
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-emerald-600 font-semibold">{article.date}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0"
                        >
                          Read More
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Newsletter Signup */}
              <Card className="border-0 bg-gradient-to-br from-emerald-500 to-green-600 text-white overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Stay Updated</h4>
                  <p className="text-emerald-100 text-sm mb-4">
                    Subscribe to our newsletter for health tips and hospital updates.
                  </p>
                  <Button
                    size="sm"
                    className="bg-white text-emerald-600 hover:bg-emerald-50 w-full rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
