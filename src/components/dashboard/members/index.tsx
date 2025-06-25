import React, { memo } from "react"

import { deleteMemberById } from "@/services/members"
import { AddMemberForm } from "@/store/add-member"
import { FlatList } from "react-native"
import { Member } from "../member"

interface Props {
  data: AddMemberForm[]
}

export const Members = memo(({ data }: Props) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Member data={item} onPress={async () => await deleteMemberById(item.id)} />}
      contentContainerStyle={{ gap: 16, paddingTop: 12, paddingBottom: 12 }}
    />
  )
})
