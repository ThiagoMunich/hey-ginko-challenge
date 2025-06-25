import React from "react"
import { TextInput, TextInputProps } from "react-native"

interface Props extends TextInputProps {}

export function SingleLineInput({ ...rest }: Props) {
  return (
    <TextInput
      {...rest}
      autoCorrect={false}
      cursorColor="#FEFEFE"
      placeholderTextColor="#FEFEFE"
      className="border-x-8 absolute top-1/2 w-full border-blue-300 text-xl text-white rounded-full h-16 px-4 font-bold focus:border-white"
    />
  )
}
