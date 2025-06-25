import React from "react"
import { Text, TextProps } from "react-native"

interface TitleProps extends TextProps {
  children: string
}

export function Title({ children, ...rest }: TitleProps) {
  return (
    <Text {...rest} className="font-black text-5xl w-full text-blue-50 mt-10">
      {children}
    </Text>
  )
}
