import { createSlice } from "@reduxjs/toolkit"

interface UiState {
  isMobileMenuOpen: boolean
  isAppointmentModalOpen: boolean
}

const initialState: UiState = {
  isMobileMenuOpen: false,
  isAppointmentModalOpen: false,
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },
    setMobileMenuOpen: (state, action) => {
      state.isMobileMenuOpen = action.payload
    },
    toggleAppointmentModal: (state) => {
      state.isAppointmentModalOpen = !state.isAppointmentModalOpen
    },
    setAppointmentModalOpen: (state, action) => {
      state.isAppointmentModalOpen = action.payload
    },
  },
})

export const { toggleMobileMenu, setMobileMenuOpen, toggleAppointmentModal, setAppointmentModalOpen } = uiSlice.actions
export default uiSlice.reducer
