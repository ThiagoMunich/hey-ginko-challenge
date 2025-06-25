import { create } from "zustand"

export interface AddMemberForm {
  id: string
  name: string
  age: string
  relation: string
  gender: string
  relationQuality: number
}

interface AddMemberFormState {
  memberForm: AddMemberForm
  setMemberForm: (updates: Partial<AddMemberForm>) => void
}

const initialMemberForm: AddMemberForm = {
  id: "",
  name: "",
  age: "",
  relation: "",
  gender: "",
  relationQuality: 0,
}

export const useMemberStore = create<AddMemberFormState & { resetMemberForm: () => void }>((set) => ({
  memberForm: { ...initialMemberForm },
  setMemberForm: (updates) => set((state) => ({ memberForm: { ...state.memberForm, ...updates } })),
  resetMemberForm: () => set({ memberForm: { ...initialMemberForm } }),
}))
