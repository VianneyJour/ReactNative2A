import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import Catalogue from '../Screen/Catalogue'
import JokeDetailItem from "../Screen/JokeDetail";
import {darksalmonColor, indigoColor} from "../assets/Theme";

export default function StackNavigation() : React.JSX.Element {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Catalogue" screenOptions={{headerStyle: {backgroundColor: indigoColor},
            headerTitleStyle: {color: darksalmonColor, fontSize:24}}}>
            <Stack.Screen name="Catalogue" component={Catalogue}/>
            <Stack.Screen name="Détails d'une blague" component={JokeDetailItem}/>
        </Stack.Navigator>
    )
}