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

const phoneSchema = z.string().min(10, "Phone number is too short")

export default function Phone() {
  const { showToast } = useToast()

  const { form, setForm } = useOnboardingStore()

  const handleGoToRoles = () => {
    if (!form.phone) {
      showToast("Your phone is mandatory.")
      return
    }

    const result = phoneSchema.safeParse(form.phone)

    if (!result.success) {
      showToast(result.error.errors[0].message)
      return
    }

    router.push("/(onboarding)/role")
  }

  return (
    <Container>
      <Title>Let's stay connected!</Title>

      <Subtitle>How about important updates and notifications?</Subtitle>

      <SingleLineInput
        maxLength={10}
        value={form.phone}
        keyboardType="number-pad"
        placeholder="Type your phone here..."
        onChangeText={(phone) => setForm({ phone })}
      />

      <View className="absolute bottom-0 w-full">
        <View className="flex-1 flex-row gap-x-4">
          <ThemedButton onPress={() => router.back()}>
            <ThemedButton.Text>BACK</ThemedButton.Text>
          </ThemedButton>
          <ThemedButton style={{ flexGrow: 1 }} onPress={handleGoToRoles}>
            <ThemedButton.Text>NEXT</ThemedButton.Text>
            <ThemedButton.Badge>3 of 6</ThemedButton.Badge>
          </ThemedButton>
        </View>
      </View>
    </Container>
  )
}
