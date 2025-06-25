import "../../global.css"

import { Stack } from "expo-router"
import React from "react"

import ToastManager from "toastify-react-native"

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(welcome)" options={{ headerShown: false }} />
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
      </Stack>

      <ToastManager />
    </>
  )
}
