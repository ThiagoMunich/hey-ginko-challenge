import React from "react"
import { Text, TextProps } from "react-native"

interface SubtitleProps extends TextProps {
  children: string
}

export function Subtitle({ children, ...rest }: SubtitleProps) {
  return (
    <Text {...rest} className="text-blue-50 font-semibold text-base mt-5">
      {children}
    </Text>
  )
}
