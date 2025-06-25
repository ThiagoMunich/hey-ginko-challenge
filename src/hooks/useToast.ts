import { Toast } from "toastify-react-native"

export const useToast = () => {
  const showToast = (text1: string) => {
    Toast.show({
      type: "error",
      text1,
      position: "bottom",
      visibilityTime: 2000,
      autoHide: true,
    })
  }

  return { showToast }
}
