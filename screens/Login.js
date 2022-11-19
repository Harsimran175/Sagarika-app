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
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  login=()=>{
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  .then((userCredential) => {
   alert('Welcome Back!')
   this.props.navigation.navigate('BottomTab')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
  }
  render() {
    return (
      <View style={{ flex: 1,backgroundColor:"rgba(146, 214, 227, 255)" }}>
        <ScrollView>
          <Image
            source={require("../assets/output-onlinepngtools.png")}
            style={{
              width: "80%",
              height: 250,
              marginTop: "20%",
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />

          <Text style={{ fontSize: 22, fontWeight: "bold",color:"rgba(39, 112, 184, 255)" , justifyContent: "center",
              alignItems: "center", alignSelf:"center"}}>
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
                borderBottomColor: "grey",
                color:"white"
              }}
              placeholder="Email ID"
              onChangeText={(val) => {
                this.setState({ email: val });
              }}
            />
          </View>

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
            <AntDesign name="lock" size={20} color="white" />
            <TextInput
              style={{
                width: "85%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "grey",
                color:"white"
              }}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(val) => {
                this.setState({ password: val });
              }}
            />
            <Feather name="eye-off" size={20} color="white" />
          </View>

          <Text
            style={{
              marginTop: 10,
              color: "rgba(39, 112, 184, 255)",
              fontWeight: "bold",
              alignSelf: "flex-end",
              marginHorizontal: "5%",
            }}
            onPress={() => {
              this.props.navigation.navigate("ForgetPassword");
            }}
          >
            Forgot Password?
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: "rgba(255, 71, 1, 255)",
              width: "40%",
              height: 40,
              marginTop: 30,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",

            }}
            onPress={() => {
              this.login()
            }}
          >
            <Text style={{ fontSize: 18, color: "white",fontWeight:"bold" }}>Login</Text>
          </TouchableOpacity>

          

          <Text style={{ alignSelf: "center", marginTop: 30, color: "grey" }}>
            Don't have an Account?
            <Text
              style={{ color: "rgba(39, 112, 184, 255)", fontWeight: "bold" }}
              onPress={() => {
                this.props.navigation.replace("SignUp");
              }}
            >
              {" "}
              Register
            </Text>{" "}
          </Text>
        </ScrollView>
      </View>
    );
  }
}
