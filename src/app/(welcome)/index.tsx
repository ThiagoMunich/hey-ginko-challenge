import { ThemedButton } from "@/components/shared/button"
import { Header } from "@/components/welcome/header"
import { router } from "expo-router"
import { View } from "react-native"

export default function Index() {
  const navigateToOnboarding = () => {
    router.replace("/(onboarding)/name")
  }

  return (
    <View className="flex-1 bg-blue-400 pt-20 pb-14 px-14">
      <Header />
      <ThemedButton className="absolute bottom-0" onPress={navigateToOnboarding}>
        <ThemedButton.Text>GET STARTED</ThemedButton.Text>
      </ThemedButton>
    </View>
  )
}
