
import { Image } from 'expo-image'
import { Platform, Text, View } from 'react-native'

const SocialLogin = () => {

  return (
    <View className="mt-8" >
    <Text className="text-primary mb-6 text-lg font-medium" style={{fontFamily: 'Poppins'}}>
      Continue With
    </Text>

    <View>
      {/* google login */}
      <View className={`py-4 items-center flex flex-row justify-center gap-2.5 border border-primary rounded-2xl bg-white mb-4 ${
                        Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
                      }`}>
        <Image source={require("@/assets/images/google.png")} style={{ width: 24, height: 24 }} />

        <Text className='text-accent text-sm' style={{fontFamily: 'Poppins'}}>Google</Text>
      </View>

      {/* apple login */}
      <View className={`py-4 items-center flex flex-row justify-center gap-2.5 border border-primary rounded-2xl bg-white ${
                        Platform.OS === "ios" ? "shadow-ios" : "shadow-android"
                      }`}>
        <Image source={require("@/assets/images/apple.png")} style={{ width: 24, height: 24 }} />

        <Text className='text-accent text-sm' style={{fontFamily: 'Poppins'}}>Apple</Text>
      </View>
    </View>
  </View>
  )
}

export default SocialLogin