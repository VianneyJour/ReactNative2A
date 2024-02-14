import {Image, StyleSheet, Text, View} from 'react-native';
import {SampleJoke} from "../Model/SampleJoke";
import {CustomJoke} from "../Model/CustomJoke";
import {darksalmonColor, greyColor, indigoColor, purpleColor, whiteColor} from "../assets/Theme";

type JokeListItemProps = {
    item: (CustomJoke | SampleJoke);
}

export default function SampleJokeListItem(props: JokeListItemProps) {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.rectangle}/>
                <Image source={{uri: props.item.image}} style={styles.image}/>
                <Text style={styles.text}>{props.item.summary()}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: indigoColor,
        height: 150,
        width: 150,
        marginHorizontal: "5%",
        marginVertical: "5%",
    },
    rectangle: {
        flex: 0,
        width: 150,
        height: 10,
        backgroundColor: "darksalmon"
    },
    image: {
        flex: 1,
        height: 150,
        width:150,
    },
    text: {
        color: "white",
        margin: "5%",
        flex: 1,
    },
});