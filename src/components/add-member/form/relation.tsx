import { ThemedChip } from "@/components/shared/chip"
import relations from "@/data/relations.json"
import { useMemberStore } from "@/store/add-member"
import React from "react"
import { View } from "react-native"
import { InputLabel } from "../input-label"

export function Relation() {
  const { memberForm, setMemberForm } = useMemberStore()

  const handleSelectRelation = (relation: string) => {
    setMemberForm({ relation })
  }

  return (
    <>
      <InputLabel label="What's the relation?" />
      <View className="flex-row flex-wrap gap-4 w-full mb-5">
        {relations.map((relation) => (
          <ThemedChip
            key={relation.id}
            label={relation.relation}
            isActive={memberForm.relation === relation.relation}
            onPress={() => handleSelectRelation(relation.relation)}
          />
        ))}
      </View>
    </>
  )
}
