"use client"

import Link from "next/link"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  ArrowRight,
  Stethoscope,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Find a Doctor", href: "/team" },
    { name: "Patient Portal", href: "/portal" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ]

  const services = [
    { name: "Emergency Care", href: "/services/emergency" },
    { name: "Cardiology", href: "/services/cardiology" },
    { name: "Neurology", href: "/services/neurology" },
    { name: "Orthopedics", href: "/services/orthopedics" },
    { name: "Pediatrics", href: "/services/pediatrics" },
    { name: "Surgery", href: "/services/surgery" },
  ]

  const resources = [
    { name: "Health Library", href: "/resources/library" },
    { name: "Patient Education", href: "/resources/education" },
    { name: "Insurance Info", href: "/resources/insurance" },
    { name: "Billing", href: "/resources/billing" },
    { name: "Medical Records", href: "/resources/records" },
    { name: "FAQ", href: "/faq" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:50px_50px]"></div>
      </div>

      {/* Enhanced Newsletter Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 py-16 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold">Stay Updated with Health Tips</h3>
              </div>
              <p className="text-emerald-100 text-lg">
                Subscribe to our newsletter for the latest health news, tips, and hospital updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-200">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-emerald-200 rounded-xl backdrop-blur-sm focus:bg-white/20"
              />
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Footer */}
      <div className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Enhanced Hospital Info */}
            <div className="lg:col-span-2 animate-fade-in">
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                    Alpha Hospital
                  </h1>
                  <p className="text-emerald-200">Excellence in Healthcare</p>
                </div>
              </Link>

              <p className="text-gray-300 mb-6 leading-relaxed">
                For over 25 years, Alpha Hospital has been providing exceptional healthcare services with
                state-of-the-art facilities and compassionate care.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 group hover:text-emerald-300 transition-colors">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 group hover:text-emerald-300 transition-colors">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span>info@alphahospital.com</span>
                </div>
                <div className="flex items-center space-x-3 group hover:text-emerald-300 transition-colors">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span>123 Medical Center Dr, Healthcare City</span>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Links */}
            <div className="animate-fade-in animation-delay-200">
              <h3 className="text-lg font-bold mb-6 text-emerald-300">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-emerald-300 transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Services */}
            <div className="animate-fade-in animation-delay-300">
              <h3 className="text-lg font-bold mb-6 text-emerald-300">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-emerald-300 transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced Resources */}
            <div className="animate-fade-in animation-delay-400">
              <h3 className="text-lg font-bold mb-6 text-emerald-300">Resources</h3>
              <ul className="space-y-3">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <Link
                      href={resource.href}
                      className="text-gray-300 hover:text-emerald-300 transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Footer */}
      <div className="border-t border-emerald-800/50 py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© 2024 Alpha Hospital. Made with</span>
              <Heart className="w-4 h-4 text-emerald-500 fill-current animate-pulse" />
              <span>for better healthcare.</span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  )
                })}
              </div>

              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-emerald-300 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-emerald-300 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
