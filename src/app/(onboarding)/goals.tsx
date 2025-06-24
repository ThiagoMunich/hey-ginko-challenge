import React from "react"

import { Text, View } from "react-native"

import { Container } from "@/components/onboarding/container"
import { ThemedButton } from "@/components/shared/button"
import { router } from "expo-router"

export default function Goals() {
  const handleGoToValues = () => {
    router.push("/(onboarding)/values")
  }

  return (
    <Container>
      <Text>goals</Text>
      <View className="absolute bottom-0 w-full">
        <ThemedButton onPress={handleGoToValues}>
          <ThemedButton.Text>CONTINUE</ThemedButton.Text>
        </ThemedButton>
      </View>
    </Container>
  )
}
