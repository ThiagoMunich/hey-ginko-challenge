import React from "react"

import { View } from "react-native"

import { Container } from "@/components/onboarding/container"
import { MultiLIneInput } from "@/components/onboarding/inputs/multi-line-input"
import { Subtitle } from "@/components/onboarding/subtitle"
import { Title } from "@/components/onboarding/title"
import { ThemedButton } from "@/components/shared/button"
import { router } from "expo-router"

export default function Goals() {
  const handleGoToValues = () => {
    router.push("/(onboarding)/values")
  }

  return (
    <Container>
      <Title>Together you move faster!</Title>

      <Subtitle>What do you want to accomplish as a family?</Subtitle>

      <MultiLIneInput placeholder="e.g. I want to bond more with my family and spend less time on social media..." />

      <View className="absolute bottom-0 w-full">
        <ThemedButton onPress={handleGoToValues}>
          <ThemedButton.Text>CONTINUE</ThemedButton.Text>

          <ThemedButton.Badge>5 of 6</ThemedButton.Badge>
        </ThemedButton>
      </View>
    </Container>
  )
}
