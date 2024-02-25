import { StatusBar } from 'expo-status-bar';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import LastJokeListItem from '../Component/LastJokeList';
import JokeCategory from '../Component/JokeCategory';
import {indigoColor, purpleColor, whiteColor} from "../assets/Theme";
import {styles} from "../assets/Theme";

import {getLastList} from "../redux/Actions/JokeActions";
import {getTopCategoriesList} from "../redux/Actions/CategoryActions";
import {useEffect} from 'react';

export default function App() {
    // @ts-ignore
    const LastList = useSelector(state => state.jokeReducer.lastJokes);
    // @ts-ignore
    const TopCategories = useSelector(state => state.categoryReducer.TopCategories);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadJoke = async () => {
            // @ts-ignore
            await dispatch(getLastList());
        };
        loadJoke();

        const loadCategories = async () => {
            // @ts-ignore
            await dispatch(getTopCategoriesList());
        };
        loadCategories();
    }, [dispatch]);

    return (
        <SafeAreaView style={{backgroundColor: purpleColor, flex:1}}>
            <StatusBar backgroundColor={indigoColor} style="light"/>

            <Image source={require('../assets/icons/logo.png')} style={{alignSelf:'center'}}/>
            <Text style={styles.textChat}>Chat c'est drôle</Text>

            <Text style={styles.titre}>Dernières blagues</Text>
            <FlatList data={LastList}
                      renderItem={LastJokeListItem}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      style={{maxHeight: '25%'}}/>

            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <Text style={styles.titre}>Top Catégories</Text>
                <Image source={require('../assets/icons/fire_icon.png')}/>
            </View>

            <FlatList data={TopCategories} renderItem={JokeCategory}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      style={{maxHeight: '25%'}}/>
        </SafeAreaView>
    );
}