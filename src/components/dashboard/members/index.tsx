import React, { memo } from "react"

import { deleteMemberById } from "@/services/members"
import { AddMemberForm, useMemberStore } from "@/store/add-member"
import { router } from "expo-router"
import { Alert, FlatList } from "react-native"
import { Member } from "../member"

interface Props {
  data: AddMemberForm[]
}

export const Members = memo(({ data }: Props) => {
  const { setMemberForm } = useMemberStore()

  const handleConfirmDelete = (member: AddMemberForm) => {
    Alert.alert(
      "REMOVING ONGOING \n",
      `Do you really want to remove ${member.name} from the list?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            await deleteMemberById(member.id)
          },
        },
      ],
      { cancelable: true }
    )
  }

  const handleGoToUpdate = (member: AddMemberForm) => {
    setMemberForm(member)

    router.push("/(dashboard)/add-member")
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <Member data={item} onLongPress={() => handleConfirmDelete(item)} onPress={() => handleGoToUpdate(item)} />
      )}
      contentContainerStyle={{ gap: 16, paddingTop: 12, paddingBottom: 12 }}
    />
  )
})
