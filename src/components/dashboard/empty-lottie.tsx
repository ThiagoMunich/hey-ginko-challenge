import React from "react"

import { Device } from "@/configs/device"
import LottieView from "lottie-react-native"

export function EmptyLottie() {
  return (
    <LottieView
      autoPlay
      style={{
        width: Device.screenWidth * 0.9,
        height: Device.screenHeight * 0.5,
        backgroundColor: "transparent",
        alignSelf: "center",
      }}
      source={require("../../assets/lotties/empty-lottie.json")}
    />
  )
}
