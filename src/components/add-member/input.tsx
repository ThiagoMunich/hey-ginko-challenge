import React from "react"
import { TextInput, TextInputProps } from "react-native"

interface Props extends TextInputProps {}

export function Input({ ...rest }: Props) {
  return (
    <TextInput
      {...rest}
      autoCorrect={false}
      cursorColor="#FFF"
      placeholderTextColor="#cecece"
      className="bg-white w-full text-xl text-blue-950 rounded-xl h-14 px-4 font-bold focus:border-blue-950 border"
    />
  )
}
