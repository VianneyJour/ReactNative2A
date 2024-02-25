import {Text, View} from "react-native";
import {styles, whiteColor} from "../assets/Theme";
import React from "react";

type CategoryListItemProps = {
    item: String;
}

export default function LastJokeListItem(props: CategoryListItemProps) {
    return (
        <View style={styles.chip}>
            <Text style={{color: whiteColor}}>{props.item}</Text>
        </View>
    )
}