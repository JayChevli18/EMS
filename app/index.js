import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from "./screens/homescreen";
import { EmployeeScreen } from './screens/Employeescreen';
import { AddDetailscreen } from './screens/AddDetailscreen';
import { Markattendance } from './screens/markattendance';
import { UserDetails } from './screens/User';
import { Summary } from './screens/Summary';

const Stack=createNativeStackNavigator();

export const Navigation=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='Employee' component={EmployeeScreen}></Stack.Screen>
        <Stack.Screen name='AddDetailscreen' component={AddDetailscreen}></Stack.Screen>
        <Stack.Screen name='Markattendance' component={Markattendance}></Stack.Screen>
        <Stack.Screen name='UserDetails' component={UserDetails}></Stack.Screen>
        <Stack.Screen name="Summary" component={Summary}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}