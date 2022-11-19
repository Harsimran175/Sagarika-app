import React, { Component } from "react";
import { View,StyleSheet ,Picker} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import {MaterialIcons} from "@expo/vector-icons";
import Home from "../screens/Home";
import Postures from "../screens/Postures";
import Contact from "../screens/Contact";
const Tab = createBottomTabNavigator();
import { RFValue } from "react-native-responsive-fontsize";
export default class BottomTabNavigator extends Component {
  render() {
    return (
       <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Postures') {
            return<Ionicons name="md-home" size={24} color={color} />
          } else if (route.name === 'Contact') {
            return<Ionicons name="open" size={24} color={color} />
          } else if(route.name === 'Home')  {
            return<Ionicons name="open" size={24} color={color} />
          }
          
        },
        tabBarActiveTintColor: '#6d3c09',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Postures"
        component={Postures}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Contact" component={Contact}   options={{ headerShown: false }}/>
       <Tab.Screen name="Home" component={Home}   options={{ headerShown: false }}/>
    </Tab.Navigator>
      
  );
}
}
const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

