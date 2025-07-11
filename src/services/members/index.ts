import { AddMemberForm } from "@/store/add-member"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const createOrUpdateMember = async (data: AddMemberForm) => {
  try {
    const membersString = await AsyncStorage.getItem("members")
    let members: AddMemberForm[] = []

    if (membersString) {
      members = JSON.parse(membersString)
      if (!Array.isArray(members)) {
        members = []
      }
    }

    const index = members.findIndex((item) => item.id === data.id)

    if (index !== -1) {
      members[index] = data
    } else {
      members.push(data)
    }

    await AsyncStorage.setItem("members", JSON.stringify(members))
  } catch (error) {}
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

export const deleteMemberById = async (id: string) => {
  const membersString = await AsyncStorage.getItem("members")
  if (!membersString) return

  let members: AddMemberForm[] = []
  try {
    members = JSON.parse(membersString)
    if (!Array.isArray(members)) {
      members = []
    }
  } catch {
    members = []
  }

  const updatedMembers = members.filter((member) => member.id !== id)
  await AsyncStorage.setItem("members", JSON.stringify(updatedMembers))
}

export const clearAllMembers = async () => {
  await AsyncStorage.multiRemove(["members"])
}
