import React, { useState } from "react"

import { View } from "react-native"

import { Container } from "@/components/onboarding/container"
import { Subtitle } from "@/components/onboarding/subtitle"
import { Title } from "@/components/onboarding/title"
import { ThemedButton } from "@/components/shared/button"
import { ThemedChip } from "@/components/shared/chip"
import roles from "@/data/roles.json"
import { router } from "expo-router"

export default function Role() {
  const [selectedRole, setSelectedRole] = useState("")

  const handleGoToGoals = () => {
    router.push("/(onboarding)/goals")
  }

  const handleSelectRole = (role: string) => {
    setSelectedRole(role)
  }

  return (
    <Container>
      <Title>Being responsible equals loving!</Title>

      <Subtitle>What's you role regarding the child?</Subtitle>

      <View className="flex-row flex-wrap gap-5 mt-10 w-full">
        {roles.map((role) => (
          <ThemedChip
            key={role.id}
            label={role.role}
            isActive={selectedRole === role.role}
            onPress={() => handleSelectRole(role.role)}
          />
        ))}
      </View>

      <View className="absolute bottom-0 w-full">
        <ThemedButton className="absolute bottom-0 w-full" onPress={handleGoToGoals}>
          <ThemedButton.Text>CONTINUE</ThemedButton.Text>
          <ThemedButton.Badge>4 of 6</ThemedButton.Badge>
        </ThemedButton>
      </View>
    </Container>
  )
}
