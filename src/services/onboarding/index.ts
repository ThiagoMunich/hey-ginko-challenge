import { OnboardingForm } from "@/store/onboarding"

import AsyncStorage from "@react-native-async-storage/async-storage"

export const saveOnboardingData = async (data: OnboardingForm) => {
  await AsyncStorage.setItem("onboarding", JSON.stringify(data))
}

export const getOnboardingData = async () => {
  const onboarding = await AsyncStorage.getItem("onboarding")

  if (!onboarding) return null

  return JSON.parse(onboarding)
}
