import React from "react"

import { Text, View } from "react-native"

import { Container } from "@/components/onboarding/container"
import { ThemedButton } from "@/components/shared/button"
import { router } from "expo-router"

export default function Name() {
  const handleGoToEmail = () => {
    router.push("/(onboarding)/email")
  }

  return (
    <Container>
      <Text>name</Text>
      <View className="absolute bottom-0 w-full">
        <ThemedButton onPress={handleGoToEmail}>
          <ThemedButton.Text>CONTINUE</ThemedButton.Text>
        </ThemedButton>
      </View>
    </Container>
  )
}
