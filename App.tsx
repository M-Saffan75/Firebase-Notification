import React, { useEffect } from 'react'
import messaging from '@react-native-firebase/messaging'
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native'

const App = () => {

  useEffect(() => {
    getDevicesToken();
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });
  }, [])  

  
  const getDevicesToken = async () => {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    await messaging().registerDeviceForRemoteMessages();

    const fcmtoken = await messaging().getToken();
    // await AsyncStorage.setItem('fcmtokens', fcmtoken);
    console.log('tokensave' ,fcmtoken)
    return fcmtoken;
  }


  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})