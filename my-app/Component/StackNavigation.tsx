import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import Catalogue from '../Screen/Catalogue'
import JokeDetailItem from "./JokeDetail";

export default function StackNavigation() {
    const Stack = createStackNavigator();
    const rout = this.route.params.jokePara;
    return (
        <Stack.Navigator initialRouteName="Catalogue">
            <Stack.Screen name="JokeList" component={Catalogue}/>
            <Stack.Screen name="JokeDetails" component={JokeDetailItem({route: rout})}/>
        </Stack.Navigator>
    )
}