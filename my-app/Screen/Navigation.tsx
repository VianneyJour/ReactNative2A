import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                           options={{
                                               title: 'Home',
                                           }}/>
                <BottomTabNavigator.Screen name="Settings" component={SettingsScreen}
                                           options={{
                                               title: 'Settings',
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}