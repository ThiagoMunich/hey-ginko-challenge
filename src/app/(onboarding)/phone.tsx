import React from "react"

import { Text, View } from "react-native"

import { Container } from "@/components/onboarding/container"
import { ThemedButton } from "@/components/shared/button"
import { router } from "expo-router"

export default function Phone() {
  const handleGoToRoles = () => {
    router.push("/(onboarding)/role")
  }

  return (
    <Container>
      <Text>phone</Text>
      <View className="absolute bottom-0 w-full">
        <ThemedButton onPress={handleGoToRoles}>
          <ThemedButton.Text>CONTINUE</ThemedButton.Text>
        </ThemedButton>
      </View>
    </Container>
  )
}
