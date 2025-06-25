import { create } from "zustand"

export interface OnboardingForm {
  name: string
  email: string
  phone: string
  role: string
  goals: string
  values: string
}

interface OnboardingState {
  form: OnboardingForm
  setForm: (updates: Partial<OnboardingForm>) => void
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  form: {
    name: "",
    email: "",
    phone: "",
    role: "",
    goals: "",
    values: "",
  },
  setForm: (updates) => set((state) => ({ form: { ...state.form, ...updates } })),
}))
