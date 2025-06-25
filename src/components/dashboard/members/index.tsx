import React, { memo } from "react"

import { deleteMemberById } from "@/services/members"
import { AddMemberForm } from "@/store/add-member"
import { Alert, FlatList } from "react-native"
import { Member } from "../member"

interface Props {
  data: AddMemberForm[]
}

export const Members = memo(({ data }: Props) => {
  const confirmDeleteMember = (member: AddMemberForm) => {
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

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Member data={item} onLongPress={() => confirmDeleteMember(item)} />}
      contentContainerStyle={{ gap: 16, paddingTop: 12, paddingBottom: 12 }}
    />
  )
})
