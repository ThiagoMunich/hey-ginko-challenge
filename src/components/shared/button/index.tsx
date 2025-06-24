import React from "react"

import { Text, TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native"

interface ThemedButtonProps extends TouchableOpacityProps {
  children: React.ReactNode
}

function ThemedButton({ children, ...rest }: ThemedButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      className="bg-white flex-row py-3 px-6 rounded-full items-center justify-center border-2 border-black"
    >
      {children}
    </TouchableOpacity>
  )
}

interface ThemedButtonTextProps extends TextProps {
  children: React.ReactNode
}

function ThemedButtonText({ children, ...rest }: ThemedButtonTextProps) {
  return (
    <Text {...rest} className="text-blue-900 font-black text-xl">
      {children}
    </Text>
  )
}

ThemedButton.Text = ThemedButtonText

export { ThemedButton }
