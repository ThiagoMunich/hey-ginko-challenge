import React from "react"

import { View } from "react-native"

import { SingleLineInput } from "@/components/onboarding/inputs/single-line-input"
import { Subtitle } from "@/components/onboarding/subtitle"
import { Title } from "@/components/onboarding/title"
import { ThemedButton } from "@/components/shared/button"
import { Container } from "@/components/shared/container"
import { useToast } from "@/hooks/useToast"
import { useOnboardingStore } from "@/store/onboarding"
import { router } from "expo-router"

export default function Name() {
  const { showToast } = useToast()

  const { form, setForm } = useOnboardingStore()

  const handleGoToEmail = () => {
    if (!form.name) {
      showToast("Your name is mandatory.")
      return
    }

    router.push("/(onboarding)/email")
  }

  return (
    <Container>
      <Title>Here our journey begins!</Title>

      <Subtitle>We are Ginko, nice to meet you! What's your full name?</Subtitle>

      <SingleLineInput
        value={form.name}
        placeholder="Type your name here..."
        onChangeText={(name) => setForm({ name })}
      />

      <View className="absolute bottom-0 w-full">
        <ThemedButton onPress={handleGoToEmail}>
          <ThemedButton.Text>NEXT</ThemedButton.Text>

          <ThemedButton.Badge>1 of 6</ThemedButton.Badge>
        </ThemedButton>
      </View>
    </Container>
  )
}
