import { ThemedButton } from "@/components/shared/button"
import { Header } from "@/components/welcome/header"
import { WelcomeLottie } from "@/components/welcome/welcome-lottie"
import { router } from "expo-router"
import { View } from "react-native"
import Animated, { FadeInUp, SlideInDown } from "react-native-reanimated"

const features = [
  {
    description: "• Track feelings and emotional patterns",
  },
  {
    description: "• Identify problematic habits early",
  },
  {
    description: "• Spot issues before they develop",
  },
  {
    description: "• Connect data across appointments",
  },
]

export default function Index() {
  const navigateToOnboarding = () => {
    router.replace("/(onboarding)/name")
  }

  return (
    <View className="flex-1 bg-blue-400 pt-20 pb-14 px-14">
      <Header />

      <View className="gap-y-5 mt-10 mb-auto">
        {features.map((feature, index) => {
          return (
            <Animated.Text
              key={feature.description}
              className="font-semibold text-blue-950 text-xl"
              entering={FadeInUp.delay((index + 1) * 1400).duration(600)}
            >
              {feature.description}
            </Animated.Text>
          )
        })}
      </View>

      <WelcomeLottie />

      <Animated.View entering={SlideInDown.delay(6000).springify().mass(0.5).stiffness(50)}>
        <ThemedButton className="absolute bottom-0" onPress={navigateToOnboarding}>
          <ThemedButton.Text>GET STARTED</ThemedButton.Text>
        </ThemedButton>
      </Animated.View>
    </View>
  )
}
