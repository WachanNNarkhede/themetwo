import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface AppointmentState {
  selectedDate: string
  selectedTime: string
  selectedDepartment: string
  patientName: string
  patientEmail: string
  patientPhone: string
  reason: string
}

const initialState: AppointmentState = {
  selectedDate: "",
  selectedTime: "",
  selectedDepartment: "",
  patientName: "",
  patientEmail: "",
  patientPhone: "",
  reason: "",
}

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setAppointmentField: (state, action: PayloadAction<{ field: keyof AppointmentState; value: string }>) => {
      state[action.payload.field] = action.payload.value
    },
    resetAppointment: (state) => {
      Object.assign(state, initialState)
    },
  },
})

export const { setAppointmentField, resetAppointment } = appointmentSlice.actions
export default appointmentSlice.reducer
