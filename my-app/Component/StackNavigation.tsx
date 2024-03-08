import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import Catalogue from '../Screen/Catalogue'
import JokeDetailItem from "../Screen/JokeDetail";

export default function StackNavigation() : React.JSX.Element {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName="JokeList">
            <Stack.Screen name="JokeList" component={Catalogue}/>
            <Stack.Screen name="JokeDetail" component={JokeDetailItem}/>
        </Stack.Navigator>
    )
}