import React from "react"

import { Text, View } from "react-native"

import { Container } from "@/components/onboarding/container"
import { ThemedButton } from "@/components/shared/button"

export default function Email() {
  return (
    <Container>
      <Text>email</Text>
      <View className="absolute bottom-0 w-full">
        <ThemedButton>
          <ThemedButton.Text>CONTINUE</ThemedButton.Text>
        </ThemedButton>
      </View>
    </Container>
  )
}
