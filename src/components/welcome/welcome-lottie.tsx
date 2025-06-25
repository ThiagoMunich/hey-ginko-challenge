import React from "react"

import { Device } from "@/configs/device"
import LottieView from "lottie-react-native"

export function WelcomeLottie() {
  return (
    <LottieView
      autoPlay
      style={{
        width: Device.screenWidth * 0.9,
        height: Device.screenHeight * 0.4,
        backgroundColor: "transparent",
        alignSelf: "center",
      }}
      source={require("../../assets/lotties/welcome-lottie.json")}
    />
  )
}
