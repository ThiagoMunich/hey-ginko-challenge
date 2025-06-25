import React from "react"
import { Text, TextProps } from "react-native"

interface Props extends TextProps {
  children: string
}

export function Subtitle({ children, ...rest }: Props) {
  return (
    <Text {...rest} className="text-white text-base font-semibold">
      {children}
    </Text>
  )
}
