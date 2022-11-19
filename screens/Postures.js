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
export default class Postures extends React.Component {

  render() {
    return (
      <View style={{ flex: 1,backgroundColor:"rgba(146, 214, 227, 255)"}}>
   

        <ScrollView>
         
          <Text style={{ fontSize: 30, alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",color:"blue",marginTop:"5%",fontWeight:"bold"}}>
            Postures
          </Text>
         
        </ScrollView>
       
      </View>
    );
  }
}
