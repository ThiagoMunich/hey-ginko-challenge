import React from "react"

import { View } from "react-native"

import { MultiLIneInput } from "@/components/onboarding/inputs/multi-line-input"
import { Subtitle } from "@/components/onboarding/subtitle"
import { Title } from "@/components/onboarding/title"
import { ThemedButton } from "@/components/shared/button"
import { Container } from "@/components/shared/container"
import { useToast } from "@/hooks/useToast"
import { useOnboardingStore } from "@/store/onboarding"
import { router } from "expo-router"

export default function Goals() {
  const { showToast } = useToast()

  const { form, setForm } = useOnboardingStore()

  const handleGoToValues = () => {
    if (!form.goals) {
      showToast("Family goals is mandatory.")
      return
    }

    router.push("/(onboarding)/values")
  }

  return (
    <Container>
      <Title>Together you move faster!</Title>

      <Subtitle>What do you want to accomplish as a family?</Subtitle>

      <MultiLIneInput
        placeholder="e.g. I want to bond more with my family and spend less time on social media..."
        value={form.goals}
        onChangeText={(goals) => setForm({ goals })}
      />

      <View className="absolute bottom-0 w-full">
        <View className="flex-1 flex-row gap-x-4">
          <ThemedButton onPress={() => router.back()}>
            <ThemedButton.Text>BACK</ThemedButton.Text>
          </ThemedButton>
          <ThemedButton style={{ flexGrow: 1 }} onPress={handleGoToValues}>
            <ThemedButton.Text>NEXT</ThemedButton.Text>

            <ThemedButton.Badge>5 of 6</ThemedButton.Badge>
          </ThemedButton>
        </View>
      </View>
    </Container>
  )
}
