import React, { memo } from "react"

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
      contentContainerStyle={{ gap: 12 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Member data={item} />}
    />
  )
})
