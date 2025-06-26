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
import { z } from "zod"

const emailSchema = z.string().email("Enter a valid email address.")

export default function Email() {
  const { showToast } = useToast()

  const { form, setForm } = useOnboardingStore()

  const handleGoToPhone = () => {
    if (!form.email) {
      showToast("Your email is mandatory.")
      return
    }

    const result = emailSchema.safeParse(form.email)

    if (!result.success) {
      showToast(result.error.errors[0].message)
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
        <View className="flex-1 flex-row gap-x-4">
          <ThemedButton onPress={() => router.back()}>
            <ThemedButton.Text>BACK</ThemedButton.Text>
          </ThemedButton>
          <ThemedButton style={{ flexGrow: 1 }} className="absolute bottom-0 w-full" onPress={handleGoToPhone}>
            <ThemedButton.Text>NEXT</ThemedButton.Text>
            <ThemedButton.Badge>2 of 6</ThemedButton.Badge>
          </ThemedButton>
        </View>
      </View>
    </Container>
  )
}
