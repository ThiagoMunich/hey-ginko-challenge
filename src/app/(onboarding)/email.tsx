import React from "react"

import { Text, View } from "react-native"

import { Container } from "@/components/onboarding/container"
import { ThemedButton } from "@/components/shared/button"
import { router } from "expo-router"

export default function Email() {
  const handleGoToPhone = () => {
    router.push("/(onboarding)/phone")
  }

  return (
    <Container>
      <Text>email</Text>
      <View className="absolute bottom-0 w-full">
        <ThemedButton onPress={handleGoToPhone}>
          <ThemedButton.Text>CONTINUE</ThemedButton.Text>
        </ThemedButton>
      </View>
    </Container>
  )
}
