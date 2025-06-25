import { AddMemberForm } from "@/store/add-member"
import React from "react"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

interface Props extends TouchableOpacityProps {
  data: AddMemberForm
}

export function Member({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      className="w-full border-blue-950 border-2 shadow-lg rounded-xl bg-blue-100 min-h-40"
    >
      <Text>{data.name}</Text>
    </TouchableOpacity>
  )
}
