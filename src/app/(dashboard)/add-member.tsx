import { Header } from "@/components/add-member/header"
import React, { useCallback, useMemo } from "react"
import { Alert, Text, View } from "react-native"

import { Age } from "@/components/add-member/form/age"
import { Gender } from "@/components/add-member/form/gender"
import { Name } from "@/components/add-member/form/name"
import { Rating } from "@/components/add-member/form/rating"
import { Relation } from "@/components/add-member/form/relation"
import { ThemedButton } from "@/components/shared/button"
import { createOrUpdateMember } from "@/services/members"
import { useMemberStore } from "@/store/add-member"
import { router, useFocusEffect } from "expo-router"
import uuid from "react-native-uuid"

export default function AddMember() {
  const { memberForm, resetMemberForm, setMemberForm } = useMemberStore()

  useFocusEffect(
    useCallback(() => {
      if (!memberForm?.id) {
        setMemberForm({ id: uuid.v4() })
      }
    }, [])
  )

  const hasInputsWithoutFill = useMemo(() => {
    return Object.values(memberForm).some((item) => item === "")
  }, [memberForm])

  const handleAddOrEditChild = async () => {
    if (hasInputsWithoutFill) {
      Alert.alert("MISSING INFORMATION \n", "Please fill all the fields.")
      return
    }

    await createOrUpdateMember(memberForm)

    resetMemberForm()

    router.back()
  }

  return (
    <View className="flex-1 bg-blue-400">
      <Header />

      <View className="px-5 mt-5">
        <Text className="text-white font-semibold text-2xl mb-5">Please fill all the information below</Text>

        <Name />

        <Age />

        <Relation />

        <Gender />

        <Rating />
      </View>
      <View className="absolute bottom-12 w-full px-5">
        <ThemedButton onPress={handleAddOrEditChild}>
          <ThemedButton.Text>CONFIRM</ThemedButton.Text>
        </ThemedButton>
      </View>
    </View>
  )
}
