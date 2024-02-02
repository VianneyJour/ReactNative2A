import {Image, StyleSheet, Text, View} from 'react-native';
import {SampleJoke} from "../Model/SampleJoke";

type SampleJokeListItemProps = {
    item: SampleJoke;
}

export default function SampleJokeListItem(props: SampleJokeListItemProps) {
    return (
        <View>
            <View style={styles.container}>
                <View style={{width: "80%"}}>
                    <Image source={{uri: props.item.image}}/>
                    <Text style={styles.text}>{props.item.summary()}</Text>
                    <Text style={styles.chip}>blague {props.item.type}</Text>
                </View>
            </View>
            <View style={styles.separator}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: "5%",
        paddingVertical: "5%",
        backgroundColor: "darkblue",
    },
    separator: {
        marginVertical: 4,
        backgroundColor: "rgba(255,255,255,0.3)",
        height: 1,
        width: '90%',
    },
    teaserImage: {
        width: 50,
        height: 50,
    },
    text: {
        color: "white",
        margin: "5%"
    },
    chip: {
        color: "white",
        backgroundColor: "grey",
        margin: "5%"
    }
});