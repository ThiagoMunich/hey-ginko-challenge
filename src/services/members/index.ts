import { AddMemberForm } from "@/store/add-member"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const saveMember = async (data: AddMemberForm) => {
  const membersString = await AsyncStorage.getItem("members")
  let members: AddMemberForm[] = []

  if (membersString) {
    try {
      members = JSON.parse(membersString)
      if (!Array.isArray(members)) {
        members = []
      }
    } catch (e) {
      members = []
    }
  }

  members.push(data)

  await AsyncStorage.setItem("members", JSON.stringify(members))
}

export const getMembers = async (): Promise<AddMemberForm[]> => {
  const members = await AsyncStorage.getItem("members")
  if (!members) return []
  try {
    const parsed = JSON.parse(members)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export const clearAllMembers = async () => {
  await AsyncStorage.multiRemove(["members"])
}
