import { StatusBar } from 'expo-status-bar';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { Stub } from "../Model/Stub";
import LastJokeListItem from '../Component/LastJokeList';
import {indigoColor, purpleColor, whiteColor} from "../assets/Theme";
import {styles} from "../assets/Theme";
import jokeReducer from "../redux/Reducers/JokeReducer"

import {getJokeList} from "../redux/Actions/JokeActions";
import {useEffect} from 'react';

const dataSampleJoke = Stub.sampleJokeStub;
const dataCustomJoke = Stub.customJokeStub;

export default function App() {
    // @ts-ignore
    const jokeList = useSelector(state => state.jokeReducer.jokes);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadNounours = async () => {
            await dispatch(getJokeList());
        };
        loadNounours();
    }, [dispatch]);

    return (
        <SafeAreaView style={{backgroundColor: purpleColor, flex:1}}>
            <StatusBar backgroundColor={indigoColor} style="light"/>

            <Image source={require('../assets/icons/logo.png')} style={{alignSelf:'center'}}/>
            <Text style={styles.textChat}>Chat c'est drôle</Text>

            <Text style={styles.titre}>Dernières blagues</Text>
            <FlatList data={jokeList}
                      renderItem={LastJokeListItem}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      style={{maxHeight: '25%'}}/>

            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Text style={styles.titre}>Top Catégories</Text>
                <Image source={require('../assets/icons/fire_icon.png')}/>
            </View>

            <View style={{flexDirection: 'row'}}>
                <View style={styles.chip}>
                    <Text style={{color: whiteColor}}>SampleJoke</Text>
                </View>
                <View style={styles.chip}>
                    <Text style={{color: whiteColor}}>CustomJoke</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}