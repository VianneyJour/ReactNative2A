import { StatusBar } from 'expo-status-bar';
import {Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import { Stub } from "../Model/Stub";
import LastJokeList from '../Component/LastJokeList';
import SampleJokeListItem from "../Component/SampleJokeList"
import {darksalmonColor, indigoColor, purpleColor} from "../assets/Theme";

const dataSampleJoke = Stub.sampleJokeStub;
const dataCustomJoke = Stub.customJokeStub;

export default function App() {
    return (
        <SafeAreaView style={{backgroundColor: purpleColor, flex:1}}>
            <StatusBar backgroundColor={indigoColor} style="light"/>

            <Image source={require('../assets/icons/logo.png')} style={{alignSelf:'center'}}/>
            <Text style={styles.testChat}>Chat c'est drôle</Text>

            <View style={styles.composant}>
                <ScrollView horizontal={true} style={{padding:10}}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}>
                    
                </ScrollView>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    composant: {
        justifyContent: 'center',
    },
    testChat: {
        color: darksalmonColor,
        fontSize: 24,
        alignSelf: 'center'
    }
});