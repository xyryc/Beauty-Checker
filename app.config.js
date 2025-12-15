import 'dotenv/config';

export default {
  "expo": {
    "name": "Beauty-Checker",
    "owner": "xyryc",
    "slug": "Beauty-Checker",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "beautychecker",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "platforms": ["ios", "android"],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.xyryc.beautychecker",
      "infoPlist": {
        "ITSAppUsesNonExemptEncryption": false
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true,
      "package": "com.xyryc.beautychecker",
      "googleServicesFile": "./android/app/google-services.json"
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "@react-native-firebase/app",
      "@react-native-firebase/messaging",
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ],
      [
        "@react-native-google-signin/google-signin", 
        {
          "iosUrlScheme": process.env.GOOGLE_IOS_URL_SCHEME
        }
      ],
      [
        "@rnmapbox/maps",
        {
          "RNMapboxMapsDownloadToken": process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN
        }
      ],
      "expo-font",
      [
        "expo-video"
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "router": {},
      "eas": {
        "projectId": "9c1eea47-9f31-4306-bedb-55f1bd5f120f"
      }
    }
  },
  "entryPoint": "./index.js"
}
