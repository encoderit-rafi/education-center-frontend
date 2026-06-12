import { create } from "zustand";

interface BookingState {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  selectedDate: null,
  setSelectedDate: (date) => set({ selectedDate: date }),
}));
