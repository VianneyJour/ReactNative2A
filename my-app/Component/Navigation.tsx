import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Image, View} from 'react-native';

import CatalogueScreen from '../Screen/Catalogue'
import AccueilScreen from '../Screen/Accueil'
import {darksalmonColor, greyColor, indigoColor, whiteColor} from "../assets/Theme";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    const taillePicto = 40;
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Accueil"
                screenOptions={{
                    headerStyle: {backgroundColor: indigoColor},
                    headerTitleStyle: {color: darksalmonColor, fontSize:24},
                    tabBarStyle: {backgroundColor: indigoColor},
                    tabBarShowLabel: false
                }}>
                <BottomTabNavigator.Screen name="Accueil" component={AccueilScreen}
                                           options={{
                                               tabBarIcon: ({focused}) => (
                                                   <Image
                                                       source={require("../assets/icons/home_icon.png")}
                                                       style={{
                                                           width: taillePicto, height: taillePicto,
                                                           tintColor: focused ? darksalmonColor : greyColor,
                                                       }}/>
                                               ),
                                           }}/>
                <BottomTabNavigator.Screen name="Catalogue" component={CatalogueScreen}
                                           options={{
                                               tabBarIcon: ({focused}) => (
                                                   <Image
                                                       source={require("../assets/icons/list_icon.png")}
                                                       style={{
                                                           width: taillePicto, height: taillePicto,
                                                           tintColor: focused ? darksalmonColor : greyColor,
                                                       }}/>
                                               )
                                           }}/>
                <BottomTabNavigator.Screen name="Ajouter" component={CatalogueScreen}
                                           options={{
                                               tabBarIcon: ({focused}) => (
                                                   <View style={{backgroundColor: greyColor, borderRadius: 5, padding: 5}}>
                                                   <Image
                                                       source={require("../assets/icons/add_icon.png")}
                                                       style={{
                                                           width: 30, height: 30,
                                                           tintColor: focused ? darksalmonColor : whiteColor,
                                                       }}/>
                                                   </View>
                                               )
                                           }}/>
                <BottomTabNavigator.Screen name="Favoris" component={CatalogueScreen}
                                           options={{
                                               tabBarIcon: ({focused}) => (
                                                   <Image
                                                       source={require("../assets/icons/favorite_icon.png")}
                                                       style={{
                                                           width: taillePicto, height: taillePicto,
                                                           tintColor: focused ? darksalmonColor : greyColor,
                                                       }}/>
                                               )
                                           }}/>
                <BottomTabNavigator.Screen name="Paramètres" component={CatalogueScreen}
                                           options={{
                                               tabBarIcon: ({focused}) => (
                                                   <Image
                                                       source={require("../assets/icons/settings_icon.png")}
                                                       style={{
                                                           width: taillePicto, height: taillePicto,
                                                           tintColor: focused ? darksalmonColor : greyColor,
                                                       }}/>
                                               )
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}