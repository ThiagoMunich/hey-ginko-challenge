import React from "react"

import { View } from "react-native"

import { Container } from "@/components/onboarding/container"
import { MultiLIneInput } from "@/components/onboarding/inputs/multi-line-input"
import { Subtitle } from "@/components/onboarding/subtitle"
import { Title } from "@/components/onboarding/title"
import { ThemedButton } from "@/components/shared/button"
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
        <ThemedButton onPress={handleFinishOnboarding}>
          <ThemedButton.Text>FINISH & SIGN UP</ThemedButton.Text>
        </ThemedButton>
      </View>
    </Container>
  )
}
