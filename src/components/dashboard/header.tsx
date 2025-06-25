import React from "react"
import { Text, View, ViewProps } from "react-native"
import { Subtitle } from "./subtitle"

interface HeaderProps extends ViewProps {
  name: string
}
export function Header({ name }: HeaderProps) {
  return (
    <View className="flex-1 mt-5 gap-y-3">
      <Text className="font-black text-4xl text-white">Welcome, {name}!</Text>
      <Subtitle>
        Here is your main dashboard, where you can add, update, or remove data from your family members.
      </Subtitle>
    </View>
  )
}
