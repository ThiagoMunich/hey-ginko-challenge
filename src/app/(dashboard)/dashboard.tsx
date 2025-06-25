import { EmptyLottie } from "@/components/dashboard/empty-lottie"
import { Header } from "@/components/dashboard/header"
import { Members } from "@/components/dashboard/members"
import { Subtitle } from "@/components/dashboard/subtitle"
import { ThemedButton } from "@/components/shared/button"
import { Container } from "@/components/shared/container"
import { getMembers } from "@/services/members"
import { getOnboardingData } from "@/services/onboarding"
import { AddMemberForm } from "@/store/add-member"
import { OnboardingForm } from "@/store/onboarding"
import { router, useFocusEffect } from "expo-router"
import React, { useCallback, useEffect, useState } from "react"
import { View } from "react-native"

export default function Dashboard() {
  const [onboardingData, setOnboardingData] = useState<OnboardingForm>({} as OnboardingForm)

  const [members, setMembers] = useState<AddMemberForm[]>([] as AddMemberForm[])

  useEffect(() => {
    fetchOnboardingData()
  }, [])

  useFocusEffect(
    useCallback(() => {
      fetchMembers()
    }, [])
  )

  console.log(members)

  const fetchOnboardingData = async () => {
    const data = await getOnboardingData()

    setOnboardingData(data)
  }

  const fetchMembers = async () => {
    const data = await getMembers()

    setMembers(data)
  }

  const handleAddMember = () => {
    router.push("/(dashboard)/add-member")
  }

  return (
    <Container className="flex-1 bg-blue-400">
      <Header name={onboardingData?.name} />

      {members?.length === 0 ? (
        <>
          <EmptyLottie />

          <View className="flex-1 items-center">
            <Subtitle>Looks like you didn't add any members yet</Subtitle>
            <Subtitle>Use the button below to start!</Subtitle>
          </View>
        </>
      ) : (
        <Members data={members} />
      )}

      <ThemedButton onPress={handleAddMember}>
        <ThemedButton.Text>ADD MEMBER</ThemedButton.Text>
      </ThemedButton>
    </Container>
  )
}
