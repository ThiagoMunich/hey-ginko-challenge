import { Container } from "@/components/onboarding/container"
import React from "react"
import { Button, Text, View } from "react-native"

export default function Name() {
  return (
    <Container>
      <Text>name</Text>
      <View className="bg-black absolute bottom-0 w-full">
        <Button title="next" />
      </View>
    </Container>
  )
}
