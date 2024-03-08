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

export default function App() : React.JSX.Element {
    // @ts-ignore
    const props = useRoute().params.jokePara;
    console.log(props)

    // @ts-ignore
    const joke = useSelector(state => state.jokeReducer.joke);
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
            <View style={styles.JokeListHorizontal}>
                <View style={styles.rectangleHorizontal}/>
                <Text style={{color: whiteColor}}>{joke.setup}</Text>
                <Text style={{color: whiteColor}}>{joke.punchline}</Text>
                <Text style={{color: whiteColor}}>{joke.toString()}</Text>
            </View>
        </SafeAreaView>
    )
}