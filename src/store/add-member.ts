import { create } from "zustand"

export interface AddMemberForm {
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

export const useMemberStore = create<AddMemberFormState>((set) => ({
  memberForm: {
    name: "",
    age: "",
    relation: "",
    gender: "",
    relationQuality: 0,
  },
  setMemberForm: (updates) => set((state) => ({ memberForm: { ...state.memberForm, ...updates } })),
}))
