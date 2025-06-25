import React from "react"

import { View } from "react-native"

import { Subtitle } from "@/components/onboarding/subtitle"
import { Title } from "@/components/onboarding/title"
import { ThemedButton } from "@/components/shared/button"
import { ThemedChip } from "@/components/shared/chip"
import { Container } from "@/components/shared/container"
import roles from "@/data/roles.json"
import { useToast } from "@/hooks/useToast"
import { useOnboardingStore } from "@/store/onboarding"
import { router } from "expo-router"

export default function Role() {
  const { showToast } = useToast()

  const { form, setForm } = useOnboardingStore()

  const handleGoToGoals = () => {
    if (!form.role) {
      showToast("Your role is mandatory.")
      return
    }

    router.push("/(onboarding)/goals")
  }

  const handleSelectRole = (role: string) => {
    setForm({ role })
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
            isActive={form.role === role.role}
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
