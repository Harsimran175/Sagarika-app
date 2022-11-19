import React from "react";
import {
  StyleSheet, 
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import firebase from 'firebase'
//main axis - justifyContent
//cross axis - alignItems

//alignSelf, justifyContent, alignItems, margin and padding
export default class ForgetPassword extends React.Component {
  constructor(){
    super()
    this.state={email:''}
  }
  render() {
    return (
      <View style={{ flex: 1,backgroundColor:"rgba(146, 214, 227, 255)" }}>
        <ScrollView>
          <Image
            source={require("../assets/forget.png")}
            style={{
              width: "80%",
              height: 250,
              marginTop: "20%",
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />

          <Text style={{ fontSize: 22, fontWeight: "bold",color:"rgba(39, 112, 184, 255)" , justifyContent: "center",
              alignItems: "center", alignSelf:"center" }}>
            Login
          </Text>

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor:"rgba(39, 112, 184, 255)",
              borderRadius:20
            }}
          >
            <Feather name="at-sign" size={20} color="white" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
                color:"white"
              }}
              placeholder="Email ID"
              onChangeText={(val)=>{
                this.setState({email:val})
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "rgba(243, 108, 33, 255)",
              width: "70%",
              height: 40,
              marginTop: 30,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={()=>{
              firebase.auth().sendPasswordResetEmail(this.state.email)
              .then(() => {
               alert('Password reset link sent!')
              })
              .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
              });
            }}
          >
            <Text style={{ fontSize: 18, color: "white", }}>Send Reset Password Link</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
