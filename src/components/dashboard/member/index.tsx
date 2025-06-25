import { AddMemberForm } from "@/store/add-member"
import React from "react"
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import StarRating from "react-native-star-rating-widget"

interface Props extends TouchableOpacityProps {
  data: AddMemberForm
}

export function Member({ data, ...rest }: Props) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      className="w-full border-blue-950 border-2 rounded-xl bg-blue-100 min-h-40 p-5"
    >
      <View className="flex-row items-center justify-between mb-5">
        <Text className="font-black text-2xl text-center">{data?.name?.toUpperCase()}</Text>
        <Text className="font-black text-2xl text-center">{data?.age}</Text>
      </View>

      <View className="flex-row items-center justify-between mb-5">
        <Text className="font-semibold text-blue-950">Age: {data?.relation}</Text>
        <Text className="font-semibold text-blue-950">Gender: {data?.gender}</Text>
      </View>

      <View className="mt-auto justify-center items-center">
        <StarRating
          starSize={24}
          color="#172554"
          onChange={() => {}}
          enableSwiping={false}
          rating={data?.relationQuality}
        />
      </View>
    </TouchableOpacity>
  )
}
