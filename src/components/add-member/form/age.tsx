import { useMemberStore } from "@/store/add-member"
import React from "react"
import { View } from "react-native"
import { Input } from "../input"
import { InputLabel } from "../input-label"

export function Age() {
  const { memberForm, setMemberForm } = useMemberStore()

  return (
    <View className="mb-5">
      <InputLabel label="What's the child's age?" />
      <Input value={memberForm.age} onChangeText={(age) => setMemberForm({ age })} />
    </View>
  )
}
