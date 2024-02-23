import { StatusBar } from 'expo-status-bar';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import { Stub } from "../Model/Stub";
import { loadExtension } from "../extensions";
import {SampleJoke} from "../Model/SampleJoke"
import SampleJokeListItem from "../Component/SampleJokeList"
import {indigoColor, purpleColor} from "../assets/Theme";
import {useDispatch, useSelector} from "react-redux";
import {getJokeList} from "../redux/Actions/JokeActions";

// loadExtension permet de charger la méthode displayDescription
//loadExtension();
//<Text>{dataSampleJoke.displayDescription()}</Text>
//<Text> {dataCustomJoke.displayDescription()} </Text>

//const dataSampleJoke = Stub.sampleJokeStub;
//const dataCustomJoke = Stub.customJokeStub;

export default function App() {
    // @ts-ignore
    const jokeList = useSelector(state => state.jokeReducer.jokes);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadJoke = async () => {
            // @ts-ignore
            await dispatch(getJokeList());
        };
        loadJoke();
    }, [dispatch]);
    return (
        <SafeAreaView style={{backgroundColor: purpleColor, flex:1}}>
            <StatusBar backgroundColor={indigoColor} style="light"/>
            <View style={{justifyContent: 'center'}}>
                <FlatList data={jokeList}
                          renderItem={SampleJokeListItem}/>
            </View>
        </SafeAreaView>
    );
}