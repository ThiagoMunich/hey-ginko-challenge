import React from "react"

import { View } from "react-native"

import { Container } from "@/components/onboarding/container"
import { SingleLineInput } from "@/components/onboarding/inputs/single-line-input"
import { Subtitle } from "@/components/onboarding/subtitle"
import { Title } from "@/components/onboarding/title"
import { ThemedButton } from "@/components/shared/button"
import { useToast } from "@/hooks/useToast"
import { useOnboardingStore } from "@/store/onboarding"
import { router } from "expo-router"

export default function Email() {
  const { showToast } = useToast()

  const { form, setForm } = useOnboardingStore()

  const handleGoToPhone = () => {
    if (!form.email) {
      showToast("Your email is mandatory.")
      return
    }

    router.push("/(onboarding)/phone")
  }

  return (
    <Container>
      <Title>Communication is the key!</Title>

      <Subtitle>Where can we send you relevant information?</Subtitle>

      <SingleLineInput
        value={form.email}
        placeholder="Type your email here..."
        onChangeText={(email) => setForm({ email })}
      />

      <View className="absolute bottom-0 w-full">
        <ThemedButton className="absolute bottom-0 w-full" onPress={handleGoToPhone}>
          <ThemedButton.Text>CONTINUE</ThemedButton.Text>
          <ThemedButton.Badge>2 of 6</ThemedButton.Badge>
        </ThemedButton>
      </View>
    </Container>
  )
}
