import { Stack } from "expo-router"

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="name" />
      <Stack.Screen name="email" />
      <Stack.Screen name="phone" />
      <Stack.Screen name="role" />
      <Stack.Screen name="goals" />
      <Stack.Screen name="values" />
    </Stack>
  )
}
