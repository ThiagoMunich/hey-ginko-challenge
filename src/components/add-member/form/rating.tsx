import { useMemberStore } from "@/store/add-member"
import React from "react"
import { InputLabel } from "../input-label"

import StarRating from "react-native-star-rating-widget"

export function Rating() {
  const { memberForm, setMemberForm } = useMemberStore()

  return (
    <>
      <InputLabel label="What's the relationship quality between you and the child?" />
      <StarRating
        starSize={42}
        rating={memberForm.relationQuality}
        onChange={(e) => setMemberForm({ relationQuality: e })}
      />
    </>
  )
}
