import { View } from "react-native"
import Animated, { ZoomIn } from "react-native-reanimated"

export function Header() {
  return (
    <View className="px-10 pt-5">
      <Animated.Image entering={ZoomIn.springify()} source={require("@/assets/images/ginko-logo.png")} />

      <Animated.Text className="font-black text-xl mt-5">SCREEN FREEDOM STARTS HERE</Animated.Text>

      <Animated.Text className="text-base mt-2 font-medium">
        Ginko is the first doctor-backed digital parenting copilot app that kids actually like. From first tablet to
        first social account, we offer expert support at every stage—like training wheels for the internet.
      </Animated.Text>
    </View>
  )
}
