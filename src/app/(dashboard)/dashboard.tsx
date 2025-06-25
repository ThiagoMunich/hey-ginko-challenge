import { EmptyLottie } from "@/components/dashboard/empty-lottie"
import { Header } from "@/components/dashboard/header"
import { Subtitle } from "@/components/dashboard/subtitle"
import { ThemedButton } from "@/components/shared/button"
import { Container } from "@/components/shared/container"
import { getOnboardingData } from "@/services/onboarding"
import { OnboardingForm } from "@/store/onboarding"
import { router } from "expo-router"
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

  const handleAddMember = () => {
    router.push("/(dashboard)/add-member")
  }

  return (
    <Container className="flex-1 bg-blue-400">
      <Header name={onboardingData?.name} />

      <EmptyLottie />

      <View className="flex-1 items-center">
        <Subtitle>Looks like you didn't add any members yet</Subtitle>
        <Subtitle>Use the button below to start!</Subtitle>
      </View>

      <ThemedButton onPress={handleAddMember}>
        <ThemedButton.Text>ADD MEMBER</ThemedButton.Text>
      </ThemedButton>
    </Container>
  )
}
