import { EmptyLottie } from "@/components/dashboard/empty-lottie"
import { Header } from "@/components/dashboard/header"
import { Subtitle } from "@/components/dashboard/subtitle"
import { ThemedButton } from "@/components/shared/button"
import { Container } from "@/components/shared/container"
import { getOnboardingData } from "@/services/onboarding"
import { OnboardingForm } from "@/store/onboarding"
import React, { useEffect, useState } from "react"
import { View } from "react-native"

export default function Dashboard() {
  const [onboardingData, setOnboardingData] = useState({} as OnboardingForm)

  useEffect(() => {
    fetchOnboardingData()
  }, [])

  const fetchOnboardingData = async () => {
    const data = await getOnboardingData()

    setOnboardingData(data)
  }

  return (
    <Container className="flex-1 bg-blue-400">
      <Header name={onboardingData.name} />

      <View className="flex-1 items-center">
        <EmptyLottie />
        <Subtitle>Looks like you didn't add any members yet</Subtitle>
        <Subtitle>Use the button below to start!</Subtitle>
      </View>

      <View className="absolute bottom-0 w-full">
        <ThemedButton className="absolute bottom-0 w-full">
          <ThemedButton.Text>ADD MEMBER</ThemedButton.Text>
        </ThemedButton>
      </View>
    </Container>
  )
}
