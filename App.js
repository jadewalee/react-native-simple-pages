import { StatusBar } from 'expo-status-bar';
import React, { Components } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './Components/SignIn.js';
import SignUp from './Components/SignUp.js';
import { NavigationContainer } from '@react-navigation/native';





export default function App() {
  return (
   
    <View style={styles.container}>

      
         <NavigationContainer>

            <SignIn />

         </NavigationContainer>

   
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
