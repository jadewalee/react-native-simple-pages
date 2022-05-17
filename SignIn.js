import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
// import { Actions } from 'react-native-router-flux'
import { ScrollView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Pressable} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function SignIn({navigation}) {
const [member, onChangeMember] = React.useState(null);
const [password, onChangePassword] = React.useState(null);
const facebookIcon = <FontAwesome5 name={'facebook'} />;
const googleIcon = <FontAwesome5 name={'google'} />

// const goToSignUp = () => {
//   Actions.SignUp()
// }
    return (

       <ScrollView style={styles.container}>
         <View style={styles.containerHeader}>
           <Text style={styles.headerText}>Welcome Back!</Text>
           <Text>Please sign into your account</Text>
         </View>

         <TextInput 
         style={styles.input} 
         placeholder= "Username"
         onChangeText={onChangeMember}
         value={member}
         />

         <TextInput style={styles.input}
         placeholder= "Password"
         secureTextEntry={true}
         onChangeText={onChangePassword}
         value={password}
         />

         <Pressable style={styles.forgotPassword}>
           <Text>Forgot Password?</Text>
         </Pressable>

         <View style={styles.buttonContainer}>
      
         <TouchableOpacity style={styles.button1}>
          <Text>Sign In</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button2}>
          <Text>{googleIcon}    Sign In With Google </Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button3}>
          <Text> {facebookIcon}  Sign In With Facebook</Text>
        </TouchableOpacity>

        <View style={styles.signupLink}>
          <Text>Not A Member? <Text   onPress={() =>
        navigation.navigate('SignUp')}>Sign-Up Here</Text> </Text>
        </View>

         </View>
        
       </ScrollView>
       
    )
}



const styles = StyleSheet.create({

  input: {
    height:45,
    width:300,
    borderWidth:1,
    borderRadius:7,
    padding:10,
    margin:10,
  },

  containerHeader: {
alignItems: "center",
marginBottom: 100,
marginTop: 200,
  },

  headerText: {
fontWeight:"bold",
fontSize:40,
paddingBottom:20,
  },

  forgotPassword: {
alignItems: "center",
marginTop:12,
  },

  button1: {
    marginTop:30,
    borderRadius:7,
    alignItems: "center",
    backgroundColor:"#2E8B57",
    height:55,
    padding:20,
  },
 
  button2: {
    marginTop: 30,
    height: 55,
    borderRadius:7,
    alignItems: "center",
    backgroundColor:"#d9d9d9",
    padding:20,
    
  },

  button3: {
    marginTop: 30,
    height: 55,
    borderRadius:7,
    alignItems: "center",
    backgroundColor:"#4267B2",
    padding:20,
  },

  text: {
    marginTop: 20,
    alignItems: "center",

  },

  signupLink: {
    marginTop:20,
    alignItems: "center",
  }
});

export default  SignIn;
