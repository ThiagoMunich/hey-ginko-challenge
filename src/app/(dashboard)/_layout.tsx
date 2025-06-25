import { Stack } from "expo-router"
import React from "react"

export default function DashboardLayout() {
  return (
    <Stack>
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      <Stack.Screen name="add-member" options={{ headerShown: false, presentation: "modal" }} />
    </Stack>
  )
}
