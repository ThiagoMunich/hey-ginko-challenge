import React from "react"
import { Text, TextProps } from "react-native"

interface Props extends TextProps {
  label: string
}

export function InputLabel({ label, ...rest }: Props) {
  return (
    <Text {...rest} className="text-white font-semibold text-base mb-1">
      {label}
    </Text>
  )
}
