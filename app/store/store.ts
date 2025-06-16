import { configureStore } from "@reduxjs/toolkit"
import uiSlice from "./slices/uiSlice"
import appointmentSlice from "./slices/appointmentSlice"

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    appointment: appointmentSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
