import { Header } from "@/components/welcome/header"
import { router } from "expo-router"
import { Button, SafeAreaView } from "react-native"

export default function Index() {
  const navigateToOnboarding = () => {
    router.replace("/(onboarding)/name")
  }

  return (
    <SafeAreaView className="flex-1 px-10 bg-blue-400">
      <Header />

      <Button title="NEXT" onPress={navigateToOnboarding} />
    </SafeAreaView>
  )
}
