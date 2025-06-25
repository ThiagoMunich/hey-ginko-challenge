import React from "react"
import { Text, View, ViewProps } from "react-native"
import { Subtitle } from "./subtitle"

interface HeaderProps extends ViewProps {
  name: string
}
export function Header({ name }: HeaderProps) {
  return (
    <View className="mt-5 gap-y-3">
      <Text className="font-black text-4xl text-white">Welcome, {name}!</Text>
      <Subtitle>• Tap the card to update any information.</Subtitle>
      <Subtitle>• Tap and hold the card to delete.</Subtitle>
    </View>
  )
}
