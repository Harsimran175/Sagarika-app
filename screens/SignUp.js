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
import firebase from 'firebase';
import db from '../config'
export default class SignUp extends React.Component {
  signUp=()=>{
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then((userCredential) => {
    alert('User created!');

    db.collection('users').add({email:this.state.email, name:'Test!', password:this.state.password})

    this.props.navigation.replace('Home')
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    
  });
  }
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "rgba(146, 214, 227, 255)" }}>
        <ScrollView>
          <Image
            source={require("../assets/66-512.webp")}
            style={{
              width: "80%",
              height: 250,
              marginTop: "20%",
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />

          <Text style={{ fontSize: 22, fontWeight: "bold", marginLeft: "5%", color: "rgba(39, 112, 184, 255)", alignSelf: "center" }}>
            Sign Up
          </Text>

          <View
            style={{
              flexDirection: "row",
              width: "90%",
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(39, 112, 184, 255)",
              borderRadius: 20,
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
                color: "white",
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
              backgroundColor: "rgba(39, 112, 184, 255)",
              borderRadius: 20,
            }}
          >
            <AntDesign name="lock" size={20} color="white" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
                color: "white",
              }}
              placeholder="Password"
              onChangeText={(val) => {
                this.setState({ password: val });
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
              backgroundColor: "rgba(39, 112, 184, 255)",
              borderRadius: 20,
            }}
          >
            <AntDesign name="lock" size={20} color="white" />
            <TextInput
              style={{
                width: "90%",
                height: 30,
                borderBottomWidth: 1,
                paddingLeft: 10,
                borderBottomColor: "white",
                color: "white"
              }}
              placeholder="Confirm Password"
              onChangeText={(val) => {
                this.setState({ confirmPassword: val });
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "rgba(243, 108, 33, 255)",
              width: "40%",
              height: 40,
              marginTop: 30,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              this.signUp()
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={{ alignSelf: "center", marginTop: 30, color: "grey" }}>
            Already have an account?
            <Text
              style={{ color: "blue", fontWeight: "bold" }}
              onPress={() => {
                this.props.navigation.replace("Login");
              }}
            >
              {" "}
              Login
            </Text>{" "}
          </Text>
        </ScrollView>
      </View>
    );
  }
}
