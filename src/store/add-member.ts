import { create } from "zustand"

export interface AddMemberForm {
  name: string
  age: string
  relation: string
  gender: string
  relationQuality: number
}

interface AddMemberFormState {
  memberFrom: AddMemberForm
  setMemberForm: (updates: Partial<AddMemberForm>) => void
}

export const useMemberStore = create<AddMemberFormState>((set) => ({
  memberFrom: {
    name: "",
    age: "",
    relation: "",
    gender: "",
    relationQuality: 0,
  },
  setMemberForm: (updates) => set((state) => ({ memberFrom: { ...state.memberFrom, ...updates } })),
}))
