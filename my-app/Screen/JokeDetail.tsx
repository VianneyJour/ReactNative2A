import {Image, StyleSheet, Text, View,SafeAreaView} from 'react-native';
import {SampleJoke} from "../Model/SampleJoke";
import {darksalmonColor, greyColor, indigoColor, purpleColor, whiteColor} from "../assets/Theme";
import {styles} from "../assets/Theme";
import {Joke} from "../Model/Joke";
import {CustomJoke} from "../Model/CustomJoke";
import {getJokeById, setLastJokeList} from "../redux/Actions/JokeActions";
import React, {useEffect} from 'react';
import {StatusBar} from "expo-status-bar";
import {useDispatch, useSelector} from "react-redux";
import {useRoute} from "@react-navigation/native";
import JokeCategory from "../Component/JokeCategory";

export default function App() : React.JSX.Element {
    // @ts-ignore
    const props = useRoute().params.jokePara;

    // @ts-ignore
    const joke: SampleJoke = useSelector(state => state.jokeReducer.joke);
    const dispatch = useDispatch();
    useEffect(() => {
        const loadJoke = async () => {
            // @ts-ignore
            await dispatch(getJokeById(props));
        };
        loadJoke();
    }, [dispatch]);

    return (
        <SafeAreaView style={{backgroundColor: purpleColor, flex:1}}>
            <StatusBar backgroundColor={indigoColor} style="light"/>
            <View style={{flexDirection: "column", backgroundColor: indigoColor, height:500, width:400}}>
                <Image source={{uri: joke.image}} style={styles.image}/>
                <JokeCategory item={joke.type}/>
                <Text style={{color: whiteColor}}>{joke.setup}</Text>
            </View>
        </SafeAreaView>
    )
}