import {Image, StyleSheet, Text, View} from 'react-native';
import {SampleJoke} from "../Model/SampleJoke";
import {CustomJoke} from "../Model/CustomJoke";
import {styles} from "../assets/Theme"

type JokeListItemProps = {
    item: SampleJoke;
}

/*export default function LastJokeListItem(props: JokeListItemProps) {
    return (
        <View style={styles.JokeListHorizontal}>
            <View style={styles.rectangleHorizontal}/>
            <Image source={{uri: props.item.image}} style={styles.image}/>
            <Text style={styles.text}>{props.item.summary()}</Text>
        </View>
    )
}*/

export default function LastJokeListItem({route}) {                             //faire appel API pour les détails et la punchline
    const props = route.params.joke;
    return (
        <View style={styles.JokeListHorizontal}>
            <View style={styles.rectangleHorizontal}/>
            <Image source={{uri: props.item.image}} style={styles.image}/>
            <Text style={styles.text}>{props.item.summary()}</Text>
        </View>
    )
}