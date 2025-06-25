import { useMemberStore } from "@/store/add-member"
import React from "react"
import { View } from "react-native"
import { Input } from "../input"
import { InputLabel } from "../input-label"

export function Name() {
  const { memberForm, setMemberForm } = useMemberStore()

  return (
    <View className="mb-5">
      <InputLabel label="What's the child's name?" />
      <Input value={memberForm.name} onChangeText={(name) => setMemberForm({ name })} />
    </View>
  )
}
