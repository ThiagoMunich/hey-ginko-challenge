import React from "react"

import { View } from "react-native"

import { Container } from "@/components/onboarding/container"
import { SingleLineInput } from "@/components/onboarding/inputs/single-line-input"
import { Subtitle } from "@/components/onboarding/subtitle"
import { Title } from "@/components/onboarding/title"
import { ThemedButton } from "@/components/shared/button"
import { router } from "expo-router"

export default function Phone() {
  const handleGoToRoles = () => {
    router.push("/(onboarding)/role")
  }

  return (
    <Container>
      <Title>Let's stay connected!</Title>

      <Subtitle>How about important updates and notifications?</Subtitle>

      <SingleLineInput placeholder="Type your phone here..." keyboardType="number-pad" />

      <View className="absolute bottom-0 w-full">
        <ThemedButton onPress={handleGoToRoles}>
          <ThemedButton.Text>CONTINUE</ThemedButton.Text>
          <ThemedButton.Badge>3 of 6</ThemedButton.Badge>
        </ThemedButton>
      </View>
    </Container>
  )
}
