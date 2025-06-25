import React, { ReactNode } from "react"

import { SafeAreaView, View, ViewProps } from "react-native"

interface ContainerProps extends ViewProps {
  children: ReactNode
}
export function Container({ children }: ContainerProps) {
  return (
    <View className="flex-1 bg-blue-500 px-10 py-14">
      <SafeAreaView className="flex-1">{children}</SafeAreaView>
    </View>
  )
}
