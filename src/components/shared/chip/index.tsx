import React from "react"

import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

import clsx from "clsx"

interface Props extends TouchableOpacityProps {
  isActive: boolean
  label: string
}
export function ThemedChip({ isActive, label, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      className={clsx("px-8 py-2 rounded-full bg-blue-50", {
        "bg-blue-950": isActive,
      })}
    >
      <Text
        className={clsx("font-black text-blue-900", {
          "text-white": isActive,
        })}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
