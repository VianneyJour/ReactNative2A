import { StatusBar } from 'expo-status-bar';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {TouchableHighlight} from "react-native-gesture-handler";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {indigoColor, purpleColor} from "../assets/Theme";

import { Stub } from "../Model/Stub";
import { loadExtension } from "../extensions";
import {SampleJoke} from "../Model/SampleJoke"
import SampleJokeListItem from "../Component/SampleJokeList"
import {getJokeList} from "../redux/Actions/JokeActions";
import StackNavigation from "../Component/StackNavigation";

// loadExtension permet de charger la méthode displayDescription
//loadExtension();
//<Text>{dataSampleJoke.displayDescription()}</Text>
//<Text> {dataCustomJoke.displayDescription()} </Text>

//const dataSampleJoke = Stub.sampleJokeStub;
//const dataCustomJoke = Stub.customJokeStub;

export default function App() : React.JSX.Element {
    const navigation = useNavigation();

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
                          renderItem={({item}) =>
                              // @ts-ignore
                              <TouchableHighlight onPress={() => navigation.navigate("Détails d'une blague", {"jokePara": item.id.toString()})}>
                                  <SampleJokeListItem item={item}/>
                              </TouchableHighlight>
                          } keyExtractor={(item: SampleJoke) => item.id.toString()}/>
            </View>
        </SafeAreaView>
    );
}