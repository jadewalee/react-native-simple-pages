import React,{useState} from "react";
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Button, ScrollView} from "react-native";
// import { Actions } from 'react-native-router-flux'

function SignUp({navigation}) {
    const [firstname, onChangeFirstName]= React.useState(null);
    const [lastname, onChangeLastName]= React.useState(null);
    const [email, onChangeEmail]= React.useState(null);
    const [username, onChangeUsername]= React.useState(null);
    const [password, onChangePassword]= React.useState(null);
    const [retypepassword, onChangeRetypePassword]= React.useState(null);
    // const [phone, onChangePhone]= React.useState(null);

    // const goToSignIn = () => {
    //     Actions.SignIn()
    //   }
  

    return (
        <ScrollView style={styles.container}>
         <View style={styles.containerHeader}>
           <Text style={styles.headerText}> Welcome </Text>
           <Text>Sign up here to continue </Text>
         </View>

         <TextInput 
         style={styles.input} 
         placeholder= "FirstName"
         onChangeText={onChangeFirstName}
         value={firstname}
         />

        <TextInput 
         style={styles.input} 
         placeholder= "LastName"
         onChangeText={onChangeLastName}
         value={lastname}
         />

        <TextInput 
         style={styles.input} 
         placeholder= "email"
         onChangeText={onChangeEmail}
         value={email}
         /> 

         <TextInput 
         style={styles.input} 
         placeholder= "UserName"
         onChangeText={onChangeUsername}
         value={username}
         />

        <TextInput 
         style={styles.input} 
         placeholder= "password"
         onChangeText={onChangePassword}
         value={password}
         />

        <TextInput 
         style={styles.input} 
         placeholder= "retype-password"
         onChangeText={onChangeRetypePassword}
         value={retypepassword}
         />

        {/* <TextInput 
         style={styles.input} 
         placeholder= "Phone"
         onChangeText={onChangePhone}
         value={phone}
         />  */}

        <TouchableOpacity style={styles.button1}>
          <Text>Sign-Up</Text>
        </TouchableOpacity>
                
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

              button1: {
                marginTop:30,
                borderRadius:7,
                alignItems: "center",
                backgroundColor:"#2E8B57",
                height:55,
                padding:20,
              },

})

export default SignUp;