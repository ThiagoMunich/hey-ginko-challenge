import React from "react"

import { View } from "react-native"

import { Container } from "@/components/onboarding/container"
import { MultiLIneInput } from "@/components/onboarding/inputs/multi-line-input"
import { Subtitle } from "@/components/onboarding/subtitle"
import { Title } from "@/components/onboarding/title"
import { ThemedButton } from "@/components/shared/button"

export default function Values() {
  return (
    <Container>
      <Title>Last step before the glory!</Title>

      <Subtitle>Could you please provide details about your family values?</Subtitle>

      <MultiLIneInput placeholder="e.g. we truly believe in love, respect, honesty, responsibility, and faith..." />

      <View className="absolute bottom-0 w-full">
        <ThemedButton>
          <ThemedButton.Text>FINISH & SIGN UP</ThemedButton.Text>
        </ThemedButton>
      </View>
    </Container>
  )
}
