import { getOnboardingData } from "@/services/onboarding"
import { OnboardingForm } from "@/store/onboarding"
import React from "react"
import { Text, View } from "react-native"

export default function Dashboard() {
  const get = async () => {
    const data = (await getOnboardingData()) as OnboardingForm
  }

  get()

  return (
    <View>
      <Text>index</Text>
    </View>
  )
}
