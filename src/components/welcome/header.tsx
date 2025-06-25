import { View } from "react-native"
import Animated, { FadeInUp, ZoomIn } from "react-native-reanimated"

export function Header() {
  return (
    <View>
      <Animated.Image
        className="scale-125 self-center mb-10"
        entering={ZoomIn.springify().duration(1000)}
        source={require("@/assets/images/ginko-logo.png")}
      />

      <Animated.Text entering={FadeInUp.delay(600).duration(800)} className="font-black text-4xl text-blue-950">
        SCREEN FREEDOM STARTS HERE
      </Animated.Text>
    </View>
  )
}
