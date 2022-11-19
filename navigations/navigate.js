import React from 'react';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';


import Loading from '../screens/Loading';
import ForgetPassword from '../screens/ForgetPassword';

import Home from '../screens/Home';
import WelcomeScreen from "../screens/WelcomeScreen"
import Postures from "../screens/Postures"
import Contact from "../screens/Contact"
import BottomTab from "../screens/BottomTab"

import { createStackNavigator } from '@react-navigation/stack';


//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


 const Stack1 = createStackNavigator();

 function HomeStack() {
     return (
       <Stack1.Navigator >
         <Stack1.Screen name="Home" component={Home} options={{headerShown:false}}/>
         <Stack1.Screen name="Contact" component={Contact} /> 
         <Stack1.Screen name="Postures" component={Postures} /> 
       </Stack1.Navigator>
     );
   }


   /*const Tab = createBottomTabNavigator();

   function MyTabs() {
     return (
       <Tab.Navigator>
         <Tab.Screen name="Home" component={HomeStack} />
         <Tab.Screen name="Contact" component={Contact} />
         <Tab.Screen name="Postures" component={Postures} />
       </Tab.Navigator>
     );
   }*/


const Stack = createStackNavigator();

function MyStack() { 
    return (
      <Stack.Navigator > 
      
       <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}}/> 
        <Stack.Screen name="Loading" component={Loading} options={{headerShown:false}}/> 
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
         <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown:true}} /> 
        
        <Stack.Screen name="Home" component={Home} /> 
          <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    );
  }

  export default MyStack;