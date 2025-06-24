import { Header } from "@/components/welcome/header"
import { SafeAreaView } from "react-native"

export default function Index() {
  return (
    <SafeAreaView className="flex-1 px-10 bg-blue-400">
      <Header />
    </SafeAreaView>
  )
}
