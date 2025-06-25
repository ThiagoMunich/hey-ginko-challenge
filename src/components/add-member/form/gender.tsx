import { ThemedChip } from "@/components/shared/chip"
import genders from "@/data/genders.json"
import { useMemberStore } from "@/store/add-member"
import React from "react"
import { View } from "react-native"
import { InputLabel } from "../input-label"

export function Gender() {
  const { memberForm, setMemberForm } = useMemberStore()

  const handleSelectGender = (gender: string) => {
    setMemberForm({ gender })
  }
  return (
    <>
      <InputLabel label="What's the child's gender?" />
      <View className="flex-row flex-wrap gap-4 w-full mb-8">
        {genders.map((gender) => (
          <ThemedChip
            key={gender.id}
            label={gender.gender}
            isActive={memberForm.gender === gender.gender}
            onPress={() => handleSelectGender(gender.gender)}
          />
        ))}
      </View>
    </>
  )
}
