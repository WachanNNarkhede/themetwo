"use client"

import type React from "react"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store/store"
import { setAppointmentModalOpen, toggleAppointmentModal } from "../store/slices/uiSlice"
import { setAppointmentField, resetAppointment } from "../store/slices/appointmentSlice"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User } from "lucide-react"

export default function AppointmentModal() {
  const dispatch = useDispatch()
  const { isAppointmentModalOpen } = useSelector((state: RootState) => state.ui)
  const appointment = useSelector((state: RootState) => state.appointment)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const departments = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Emergency Medicine",
    "Internal Medicine",
    "Surgery",
    "Radiology",
    "Oncology",
    "Dermatology",
  ]

  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form and close modal
    dispatch(resetAppointment())
    dispatch(setAppointmentModalOpen(false))
    setIsSubmitting(false)

    // Show success message (you can implement toast notifications)
    alert("Appointment booked successfully! We'll contact you soon.")
  }

  const handleFieldChange = (field: keyof typeof appointment, value: string) => {
    dispatch(setAppointmentField({ field, value }))
  }

  return (
    <Dialog open={isAppointmentModalOpen} onOpenChange={() => dispatch(toggleAppointmentModal())}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-green-700 flex items-center gap-2">
            <Calendar className="w-6 h-6" />
            Book an Appointment
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="patientName">Full Name *</Label>
                <Input
                  id="patientName"
                  value={appointment.patientName}
                  onChange={(e) => handleFieldChange("patientName", e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="patientPhone">Phone Number *</Label>
                <Input
                  id="patientPhone"
                  type="tel"
                  value={appointment.patientPhone}
                  onChange={(e) => handleFieldChange("patientPhone", e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="patientEmail">Email Address *</Label>
              <Input
                id="patientEmail"
                type="email"
                value={appointment.patientEmail}
                onChange={(e) => handleFieldChange("patientEmail", e.target.value)}
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Appointment Details
            </h3>

            <div>
              <Label htmlFor="department">Department *</Label>
              <Select
                value={appointment.selectedDepartment}
                onValueChange={(value) => handleFieldChange("selectedDepartment", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a department" />
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="selectedDate">Preferred Date *</Label>
                <Input
                  id="selectedDate"
                  type="date"
                  value={appointment.selectedDate}
                  onChange={(e) => handleFieldChange("selectedDate", e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>

              <div>
                <Label htmlFor="selectedTime">Preferred Time *</Label>
                <Select
                  value={appointment.selectedTime}
                  onValueChange={(value) => handleFieldChange("selectedTime", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="reason">Reason for Visit</Label>
              <Textarea
                id="reason"
                value={appointment.reason}
                onChange={(e) => handleFieldChange("reason", e.target.value)}
                placeholder="Please describe your symptoms or reason for the appointment"
                rows={3}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => dispatch(toggleAppointmentModal())}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={
                isSubmitting ||
                !appointment.patientName ||
                !appointment.patientEmail ||
                !appointment.patientPhone ||
                !appointment.selectedDepartment
              }
              className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
            >
              {isSubmitting ? "Booking..." : "Book Appointment"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
