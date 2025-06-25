import { Header } from "@/components/add-member/header"
import { Input } from "@/components/add-member/input"
import { InputLabel } from "@/components/add-member/input-label"
import React from "react"
import { Text, View } from "react-native"

import { ThemedButton } from "@/components/shared/button"
import { ThemedChip } from "@/components/shared/chip"
import genders from "@/data/genders.json"
import relations from "@/data/relations.json"
import { useMemberStore } from "@/store/add-member"
import StarRating from "react-native-star-rating-widget"

export default function AddMember() {
  const { memberFrom, setMemberForm } = useMemberStore()

  const handleSelectRelation = (relation: string) => {
    setMemberForm({ relation })
  }

  const handleSelectGender = (gender: string) => {
    setMemberForm({ gender })
  }

  return (
    <View className="flex-1 bg-blue-400">
      <Header />

      <View className="px-5 mt-5">
        <Text className="text-white font-semibold text-2xl mb-5">
          Please fill the information below regarding the child.
        </Text>

        <InputLabel label="What's the child's name?" />
        <Input />

        <InputLabel label="What's the child's age?" />
        <Input keyboardType="number-pad" maxLength={2} />

        <InputLabel label="What's the relation?" />
        <View className="flex-row flex-wrap gap-4 w-full">
          {relations.map((relation) => (
            <ThemedChip
              key={relation.id}
              label={relation.relation}
              isActive={memberFrom.relation === relation.relation}
              onPress={() => handleSelectRelation(relation.relation)}
            />
          ))}
        </View>

        <InputLabel label="What's the child's gender?" />
        <View className="flex-row flex-wrap gap-4 w-full">
          {genders.map((gender) => (
            <ThemedChip
              key={gender.id}
              label={gender.gender}
              isActive={memberFrom.gender === gender.gender}
              onPress={() => handleSelectGender(gender.gender)}
            />
          ))}
        </View>

        <InputLabel label="What's the relationship quality between you and the child?" />

        <StarRating
          rating={memberFrom.relationQuality}
          onChange={(e) => setMemberForm({ relationQuality: e })}
          starSize={42}
        />
      </View>
      <View className="absolute bottom-12 w-full px-5">
        <ThemedButton>
          <ThemedButton.Text>ADD CHILD</ThemedButton.Text>
        </ThemedButton>
      </View>
    </View>
  )
}
