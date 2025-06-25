import React from "react"

import { Text, TouchableOpacity, View } from "react-native"

import { Device } from "@/configs/device"
import { useRouter } from "expo-router"

export function Header() {
  const { back } = useRouter()

  return (
    <View className="w-full flex-row shadow-xl bg-blue-950 items-center justify-center pt-5 px-5 min-h-32">
      {Device.isAndroid && (
        <TouchableOpacity onPress={back}>
          <Text className="text-3xl">🔙</Text>
        </TouchableOpacity>
      )}
      <Text className="text-white font-thin text-4xl text-center mr-auto ml-auto">NEW MEMBER</Text>
    </View>
  )
}
