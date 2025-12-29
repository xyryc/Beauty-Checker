import firebase from '@react-native-firebase/app';
                                                                                         
  // Initialize Firebase (only if not already initialized)                               
  if (!firebase.apps.length) {                                                           
    firebase.initializeApp();                                                            
  }                                                                                      
                                                                                         
  import { setBackgroundMessageHandler } from '@react-native-firebase/messaging';
import * as Notifications from 'expo-notifications';
import 'expo-router/entry';
                                                                                         
  // Background message handler registered at top level                                  
  // This allows FCM to handle messages when app is in background/quit state             
  setBackgroundMessageHandler(async (remoteMessage) => {                                 
    console.log('📦 Background FCM message received:', remoteMessage);                   
                                                                                         
    try {                                                                                
      // Display notification using expo-notifications                                   
      await Notifications.scheduleNotificationAsync({                                    
        content: {                                                                       
          title: remoteMessage.notification?.title || 'New Notification',                
          body: remoteMessage.notification?.body || '',                                  
          data: remoteMessage.data,                                                      
          sound: 'default',                                                              
        },                                                                               
        trigger: null, // Show immediately                                               
      });                                                                                
    } catch (error) {                                                                    
      console.error('Error displaying background notification:', error);                 
    }                                                                                    
  });                                                                                    
     