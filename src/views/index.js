import React, { Component } from 'react';
import { Text, SafeAreaView, View } from "react-native";
import Login from './Login';
import HomePage from './Home';
import Slide from './Slides';
import Landing from './Landing';
import register from './Register';
import RootComponent from './RootComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default RootComponent = () => {
  return (
    // <Login />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="RootComponent" component={RootComponent} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="register" component={register} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Slide" component={Slide} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}