import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';


import SignupScreen from './src/Signup';
import LoginScreen from './src/Loginscreen';
import Dashscreen from './src/Dashscreen';
import IDCardScreen from './src/Idcard';
import DetailsScreen from './src/Details';
import MarkScreen from './src/mark';

enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashscreen" component={Dashscreen} />
        <Stack.Screen name="IDCard" component={IDCardScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Marks" component={MarkScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
