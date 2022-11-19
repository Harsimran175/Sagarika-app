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
export default class WelcomeScreen extends React.Component {

  render() {
    return (
      <View style={{ flex: 1,backgroundColor:"rgba(146, 214, 227, 255)"}}>
   

        <ScrollView>
         
          <Text style={{ fontSize: 30, alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",color:"blue",marginTop:"5%",fontWeight:"bold"}}>
            Yoga & Fitness
          </Text>
 <Text style={{ fontSize: 17, alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",color:"white"}}>
            Stay Healthy & Strong
          </Text>
       
         
 <Image
            source={require("../assets/yogapose3.gif")}
            style={{
              width: "110%",
              height: 320,
              marginTop: "20%",
              alignSelf: "center",
              resizeMode: "contain",
            }}
          />
         <TouchableOpacity
            style={{
              backgroundColor: "#e75480",
              width: "35%",
              height: 30,
              marginTop: 30,
              borderRadius: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
             this.props.navigation.navigate('SignUp') 
            }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Sign up</Text>
          </TouchableOpacity>
    <TouchableOpacity
            style={{
              width: "60%",
              height: 30,
              marginTop: 10,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
             this.props.navigation.navigate('Login') 
            }}
          >
            <Text style={{ fontSize: 15, color: "blue" }}>I have an account</Text>
          </TouchableOpacity>        
        </ScrollView>
       
      </View>
    );
  }
}
