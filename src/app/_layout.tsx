import "../../global.css"

import React from "react"

import { Stack } from "expo-router"

import ToastManager from "toastify-react-native"

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(welcome)" options={{ headerShown: false }} />
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      </Stack>

      <ToastManager />
    </>
  )
}
