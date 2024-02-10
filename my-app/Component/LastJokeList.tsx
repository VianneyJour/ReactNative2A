import {Image, StyleSheet, Text, View} from 'react-native';
import {SampleJoke} from "../Model/SampleJoke";
import {darksalmonColor, greyColor, indigoColor, purpleColor, whiteColor} from "../assets/Theme";

type SampleJokeListItemProps = {
    item: SampleJoke[];
}

export default function SampleJokeListItem(props: SampleJokeListItemProps) {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.rectangle}/>
                <Image source={{uri: props.item[1].image}} style={styles.image}/>
                <View style={styles.column}>
                    <Text style={styles.text}>{props.item[1].summary()}</Text>
                    <View style={styles.chip}>
                        <Text style={{color: whiteColor}}>blague {props.item[1].type}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: indigoColor,
        height: 150,
        marginHorizontal: "5%",
        marginVertical: "5%",
    },
    rectangle: {
        flex: 0,
        width: 10,
        height: 150,
        backgroundColor: "darksalmon"
    },
    image: {
        flex: 1,
        height: 150,
        width:150,
    },
    column: {
        flex: 2,
        flexDirection: "column",
        padding: 20,
    },
    text: {
        color: "white",
        margin: "5%",
        flex: 1,
    },
    chip: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: greyColor,
        width: 120,
        borderRadius: 20,
    },
});