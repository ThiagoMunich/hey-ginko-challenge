import React from "react"

import { Text, View } from "react-native"

import { Container } from "@/components/onboarding/container"
import { ThemedButton } from "@/components/shared/button"
import { router } from "expo-router"

export default function Role() {
  const handleGoToGoals = () => {
    router.push("/(onboarding)/goals")
  }

  return (
    <Container>
      <Text>role</Text>
      <View className="absolute bottom-0 w-full">
        <ThemedButton onPress={handleGoToGoals}>
          <ThemedButton.Text>CONTINUE</ThemedButton.Text>
        </ThemedButton>
      </View>
    </Container>
  )
}
