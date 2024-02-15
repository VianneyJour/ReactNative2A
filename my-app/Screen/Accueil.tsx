import { StatusBar } from 'expo-status-bar';
import {FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import { Stub } from "../Model/Stub";
import LastJokeListItem from '../Component/LastJokeList';
import {darksalmonColor, indigoColor, purpleColor, whiteColor} from "../assets/Theme";
import SampleJokeListItem from "../Component/SampleJokeList";

const dataSampleJoke = Stub.sampleJokeStub;
const dataCustomJoke = Stub.customJokeStub;

export default function App() {
    return (
        <SafeAreaView style={{backgroundColor: purpleColor, flex:1}}>
            <StatusBar backgroundColor={indigoColor} style="light"/>

            <Image source={require('../assets/icons/logo.png')} style={{alignSelf:'center'}}/>
            <Text style={styles.testChat}>Chat c'est drôle</Text>

            <Text>Dernières blagues</Text>
            <FlatList data={dataSampleJoke}
                      renderItem={LastJokeListItem}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}/>

            <View style={{flexDirection: 'row'}}>
                <Text>Top Catégories</Text>
                <Image source={require('../assets/icons/fire_icon.png')}/>
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