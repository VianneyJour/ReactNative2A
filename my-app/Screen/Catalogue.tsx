import { StatusBar } from 'expo-status-bar';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import { Stub } from "../Model/Stub";
import { loadExtension } from "../extensions";
import {SampleJoke} from "../Model/SampleJoke"
import SampleJokeListItem from "../Component/SampleJokeList"
import {darksalmonColor, indigoColor, purpleColor} from "../assets/Theme";

// loadExtension permet de charger la méthode displayDescription
//loadExtension();
//<Text>{dataSampleJoke.displayDescription()}</Text>
//<Text> {dataCustomJoke.displayDescription()} </Text>

const dataSampleJoke = Stub.sampleJokeStub;
const dataCustomJoke = Stub.customJokeStub;

export default function App() {
    return (
        <SafeAreaView style={{backgroundColor: purpleColor, flex:1}}>
            <StatusBar backgroundColor={indigoColor} style="light"/>
            <View style={{justifyContent: 'center'}}>
                <FlatList data={dataSampleJoke}
                          renderItem={SampleJokeListItem}/>
            </View>
        </SafeAreaView>
    );
}