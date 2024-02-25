import {Image, StyleSheet, Text, View} from 'react-native';
import {SampleJoke} from "../Model/SampleJoke";
import JokeCategory from "./JokeCategory";
import {styles} from "../assets/Theme";

type SampleJokeListItemProps = {
    item: SampleJoke;
}

export default function SampleJokeListItem(props: SampleJokeListItemProps) {
    return (
        <View>
            <View style={styles.JokeListVertical}>
                <View style={styles.rectangleVertical}/>
                <Image source={{uri: props.item.image}} style={styles.image}/>
                <View style={styles.column}>
                    <Text style={styles.text}>{props.item.summary()}</Text>
                    <JokeCategory item={"blague " + props.item.type}/>
                </View>
            </View>
        </View>
    )
}

