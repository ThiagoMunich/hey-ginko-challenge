import React from "react"
import { TextInput, TextInputProps } from "react-native"

interface Props extends TextInputProps {}

export function MultiLIneInput({ ...rest }: Props) {
  return (
    <TextInput
      {...rest}
      multiline
      autoCorrect={false}
      cursorColor="#FFF"
      placeholderTextColor="#cecece"
      className="border-2 absolute top-1/3 w-full border-blue-300 text-xl text-white rounded-xl h-96 px-4 font-bold focus:border-white"
    />
  )
}
