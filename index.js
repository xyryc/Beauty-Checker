/**
 * Root index file for Expo Router
 * CRITICAL: Background handlers MUST be registered here before app initialization
 */
import notifee, { EventType } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import 'expo-router/entry';

// ✅ CRITICAL: Background message handler MUST be registered at top level
// This allows FCM to handle messages when app is in background/quit state
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('📦 Background FCM message received:', remoteMessage);

  try {
    // Display notification using Notifee when app is in background
    await notifee.displayNotification({
      title: remoteMessage.notification?.title || 'New Notification',
      body: remoteMessage.notification?.body || '',
      android: {
        channelId: remoteMessage.data?.channelId || 'default',
        pressAction: {
          id: 'default',
        },
        importance: 4, // HIGH
        smallIcon: 'ic_launcher',
        color: '#612AC3',
        sound: 'default',
      },
      ios: {
        sound: 'default',
        foregroundPresentationOptions: {
          alert: true,
          badge: true,
          sound: true,
        },
      },
      data: remoteMessage.data,
    });
  } catch (error) {
    console.error('❌ Error displaying background notification:', error);
  }


});

  // ✅ Background event handler for Notifee (when user taps notification)
notifee.onBackgroundEvent(async ({ type, detail }) => {
    console.log('📱 Notifee background event:', type, detail);

    if (type === EventType.PRESS) {
      console.log('User pressed notification in background:', detail.notification);
      // Navigation will be handled in _layout.tsx via onNotificationOpenedApp
    }

    return Promise.resolve(); 
  });

