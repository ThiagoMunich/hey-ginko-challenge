import React from "react"

import { View } from "react-native"

import { MultiLIneInput } from "@/components/onboarding/inputs/multi-line-input"
import { Subtitle } from "@/components/onboarding/subtitle"
import { Title } from "@/components/onboarding/title"
import { ThemedButton } from "@/components/shared/button"
import { Container } from "@/components/shared/container"
import { useToast } from "@/hooks/useToast"
import { saveOnboardingData } from "@/services/onboarding"
import { useOnboardingStore } from "@/store/onboarding"
import { router } from "expo-router"

export default function Values() {
  const { showToast } = useToast()

  const { form, setForm } = useOnboardingStore()

  const handleFinishOnboarding = async () => {
    if (!form.values) {
      showToast("Family values is mandatory.")
      return
    }

    await saveOnboardingData(form)

    router.replace("/(dashboard)/dashboard")
  }

  return (
    <Container>
      <Title>Last step before the glory!</Title>

      <Subtitle>Could you please provide details about your family values?</Subtitle>

      <MultiLIneInput
        value={form.values}
        onChangeText={(values) => setForm({ values })}
        placeholder="e.g. we truly believe in love, respect, honesty, responsibility, and faith..."
      />

      <View className="absolute bottom-0 w-full">
        <View className="flex-1 flex-row gap-x-4">
          <ThemedButton onPress={() => router.back()}>
            <ThemedButton.Text>BACK</ThemedButton.Text>
          </ThemedButton>
          <ThemedButton style={{ flexGrow: 1 }} onPress={handleFinishOnboarding}>
            <ThemedButton.Text>FINISH & SIGN UP</ThemedButton.Text>
          </ThemedButton>
        </View>
      </View>
    </Container>
  )
}
