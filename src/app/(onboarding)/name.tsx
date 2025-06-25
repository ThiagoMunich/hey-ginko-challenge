import React from "react"

import { View } from "react-native"

import { router } from "expo-router"

import { Container } from "@/components/onboarding/container"
import { SingleLineInput } from "@/components/onboarding/inputs/single-line-input"
import { Subtitle } from "@/components/onboarding/subtitle"
import { Title } from "@/components/onboarding/title"
import { ThemedButton } from "@/components/shared/button"

export default function Name() {
  const handleGoToEmail = () => {
    router.push("/(onboarding)/email")
  }

  return (
    <Container>
      <Title>Here our journey begins!</Title>

      <Subtitle>We are Ginko, nice to meet you! What's your full name?</Subtitle>

      <SingleLineInput placeholder="Type your name here..." />

      <View className="absolute bottom-0 w-full">
        <ThemedButton className="absolute bottom-0 w-full" onPress={handleGoToEmail}>
          <ThemedButton.Text>CONTINUE</ThemedButton.Text>
        </ThemedButton>
      </View>
    </Container>
  )
}
