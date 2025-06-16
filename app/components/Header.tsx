"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { toggleMobileMenu, setMobileMenuOpen, toggleAppointmentModal } from "../store/slices/uiSlice"
import { Menu, X, Phone, Clock, MapPin, ChevronDown, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import AppointmentModal from "@/app/components/AppointmentModal"

interface NavItem {
  name: string
  href?: string
  type: "link" | "dropdown"
  items?: SubNavItem[]
}

interface SubNavItem {
  name: string
  href: string
}

export default function Header() {
  const dispatch = useDispatch()
  const { isMobileMenuOpen } = useSelector((state: RootState) => state.ui)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation: NavItem[] = [
    { name: "Home", href: "/", type: "link" },
    { name: "About Us", href: "/about", type: "link" },
    {
      name: "Care",
      type: "dropdown",
      items: [
        { name: "Services", href: "/services" },
        { name: "Our Team", href: "/team" },
      ],
    },
    { name: "Events", href: "/events", type: "link" },
    {
      name: "Connect",
      type: "dropdown",
      items: [
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Giving", href: "/giving" },
      ],
    },
  ]

  return (
    <>
      {/* Top Bar - Fixed positioning */}
      <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-green-900 to-emerald-800 text-white py-3 px-4 text-sm z-[60]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-emerald-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>Emergency: +1 (555) 123-4567</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 hover:text-emerald-200 transition-colors">
              <Clock className="w-4 h-4" />
              <span>24/7 Emergency Care</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-2 hover:text-emerald-200 transition-colors">
            <MapPin className="w-4 h-4" />
            <span>123 Medical Center Dr, Healthcare City</span>
          </div>
        </div>
      </div>

      {/* Main Header - Fixed positioning with proper top offset */}
      <header
        className={`fixed top-[42px] left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-green-100" : "bg-white shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                  Alpha Hospital
                </h1>
                <p className="text-sm text-gray-600">Excellence in Healthcare</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) =>
                item.type === "link" ? (
                  <Link
                    key={item.name}
                    href={item.href!}
                    className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-200 relative group py-2"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 flex items-center group py-2">
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1 group-hover:text-emerald-600 transition-transform group-hover:rotate-180 duration-200" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white shadow-xl rounded-xl border border-green-100 backdrop-blur-sm z-[70]">
                      {item.items!.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link
                            href={subItem.href}
                            className="block w-full text-gray-700 hover:text-emerald-600 hover:bg-green-50 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                          >
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ),
              )}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                onClick={() => dispatch(toggleAppointmentModal())}
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border-0"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => dispatch(toggleMobileMenu())}
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-emerald-600 hover:bg-green-50 transition-all duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-xl backdrop-blur-sm">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) =>
                item.type === "link" ? (
                  <Link
                    key={item.name}
                    href={item.href!}
                    className="block text-gray-700 hover:text-emerald-600 font-medium py-3 px-4 rounded-lg hover:bg-green-50 transition-all duration-200"
                    onClick={() => dispatch(setMobileMenuOpen(false))}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div key={item.name} className="space-y-2">
                    <span className="block text-gray-900 font-semibold py-3 px-4">{item.name}</span>
                    {item.items!.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-gray-700 hover:text-emerald-600 font-medium py-2 pl-8 pr-4 rounded-lg hover:bg-green-50 transition-all duration-200"
                        onClick={() => dispatch(setMobileMenuOpen(false))}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ),
              )}
              <Button
                onClick={() => {
                  dispatch(toggleAppointmentModal())
                  dispatch(setMobileMenuOpen(false))
                }}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-3 rounded-xl font-medium transition-all duration-300"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="h-[120px]"></div>

      <AppointmentModal />
    </>
  )
}
