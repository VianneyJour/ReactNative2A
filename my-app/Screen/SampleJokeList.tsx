import {Image, StyleSheet, Text, View} from 'react-native';
import {SampleJoke} from "../Model/SampleJoke";
import {purpleColor} from "../assets/Theme";

type SampleJokeListItemProps = {
    item: SampleJoke;
}

export default function SampleJokeListItem(props: SampleJokeListItemProps) {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.rectangle}/>
                <Image source={{uri: props.item.image}} style={styles.image}/>
                <View style={styles.column}>
                    <Text style={styles.text}>{props.item.summary()}</Text>
                    <Text style={styles.chip}>blague {props.item.type}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: "5%",
        backgroundColor: purpleColor,
        height: 150,
    },
    text: {
        color: "white",
        margin: "5%",
        flex: 1,
    },
    chip: {
        flex: 2,
        color: "white",
        backgroundColor: "grey",
        margin: "5%"
    },
    rectangle: {
        flex: 1,
        width: 10,
        height: 150,
        backgroundColor: "darksalmon"
    },
    image: {
        flex: 2,
        height: 150,
        width:150,
    },
    column: {
        flex: 3,
        flexDirection: "column",
    }
});