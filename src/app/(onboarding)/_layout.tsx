import { Stack } from "expo-router"

export default function OnboardingLayout() {
  return (
    <Stack>
      <Stack.Screen name="name" options={{ headerShown: false }} />
    </Stack>
  )
}
