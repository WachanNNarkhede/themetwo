import type { Metadata } from "next"
import ServicesComponent from "./ServicesComponent"

export const metadata: Metadata = {
  title: "Medical Services - Alpha Hospital",
  description:
    "Explore advanced medical services at Alpha Hospital including cardiology, neurology, orthopedics, oncology, emergency care, and pediatrics.",
  keywords: "hospital services, medical care, healthcare, cardiology, neurology, orthopedics, emergency care",
}

export default function ServicesPage() {
  return <ServicesComponent />
}
