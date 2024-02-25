import {Image, StyleSheet, Text, View} from 'react-native';
import {SampleJoke} from "../Model/SampleJoke";
import {darksalmonColor, greyColor, indigoColor, purpleColor, whiteColor} from "../assets/Theme";
import {styles} from "../assets/Theme";
import {Joke} from "../Model/Joke";
import {CustomJoke} from "../Model/CustomJoke";
import {setLastJokeList} from "../redux/Actions/JokeActions";

export default async function JokeDetailItem({route}) {                             //faire appel API pour les détails et la punchline
    const props = route.params.jokePara;

    /*console.log("test")
    const jokePromise = await fetch('https://iut-weather-api.azurewebsites.net/jokes/' + props);
    const jokeJson = await jokePromise.json();
    const joke: Joke = jokeJson.map(elt => new SampleJoke(elt["type"], elt["setup"], elt["punchline"], elt["image"], elt["id"]));
    console.log("maintanant")*/

    return (
        <View style={styles.JokeListHorizontal}>
            <View style={styles.rectangleHorizontal}/>
            <Text>{props}</Text>
        </View>
    )
}