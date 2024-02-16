import {Image, StyleSheet, Text, View} from 'react-native';
import {SampleJoke} from "../Model/SampleJoke";
import {darksalmonColor, greyColor, indigoColor, purpleColor, whiteColor} from "../assets/Theme";
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
                    <View style={styles.chip}>
                        <Text style={{color: whiteColor}}>blague {props.item.type}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}