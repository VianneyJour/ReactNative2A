import {Image, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {SampleJoke} from "../Model/SampleJoke";
import {indigoColor, purpleColor, whiteColor} from "../assets/Theme";
import {styles} from "../assets/Theme";
import {Joke} from "../Model/Joke";
import {CustomJoke} from "../Model/CustomJoke";
import {getJokeById} from "../redux/Actions/JokeActions";
import React, {useEffect, useState} from 'react';
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

    const [showPunchline, setShowPunchline] = useState(false);

    const buttonPress = () => {
        setShowPunchline((prevShowPunchline) => !prevShowPunchline);
    }

    return (
        <SafeAreaView style={{backgroundColor: purpleColor, flex:1}}>
            <StatusBar backgroundColor={indigoColor} style="light"/>
            <View style={styles.JokeDetail}>
                <Image source={{uri: joke.image}} style={styles.bigImage}/>
                <JokeCategory item={joke.type}/>
                <Text style={{color: whiteColor}}>{joke.setup}</Text>

                <View style={{flexDirection: 'row'}}>
                    <Image source={require("../assets/icons/favorite_icon.png")}/>
                    <TouchableOpacity onPress={buttonPress} style={{flexDirection : "row", alignItems: "center"}}>
                            <Image
                                source={showPunchline ? require("../assets/icons/eye_off_icon.png") : require("../assets/icons/eye_icon.png")}
                            />
                            <Text style={styles.text}> La chute </Text>
                        </TouchableOpacity>
                </View>
                {showPunchline && (
                    <Text style={styles.text}> {joke.punchline} </Text>
                )}
            </View>
        </SafeAreaView>
    )
}