import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Catalogue from '../Screen/Catalogue'
import LastJokeListItem from "./LastJokeList";

export default function StackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Catalogue}/>
            <Stack.Screen name="JokeDetails" component={LastJokeListItem}/>
        </Stack.Navigator>
    )
}