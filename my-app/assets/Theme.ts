import {StyleSheet} from "react-native";

const indigoColor = "rgba(14, 14, 44, 1)";
const purpleColor = "rgba(74, 74, 104, 1)";
const darksalmonColor = "rgba(233, 150, 122, 1)";
const greyColor = "rgba(140, 140, 161, 1)";
const whiteColor = "rgba(239, 239, 253, 1)";

export {indigoColor, purpleColor, darksalmonColor, greyColor, whiteColor}

export const styles = StyleSheet.create({
    textChat: {
        color: darksalmonColor,
        fontSize: 24,
        alignSelf: 'center',
    },
    JokeListVertical: {
        flexDirection: "row",
        backgroundColor: indigoColor,
        height: 150,
        marginHorizontal: "5%",
        marginVertical: "5%",
    },
    JokeListHorizontal: {
        flexDirection: "column",
        backgroundColor: indigoColor,
        height: 150,
        width: 150,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    JokeDetail: {
        flex:0,
        margin: '2%',
        flexDirection: "column",
        backgroundColor: indigoColor,
        height:500,
        width:400,
        borderRadius: 20,
        borderColor: whiteColor,
        borderWidth: 2,
        padding: 10,
    },
    rectangleVertical: {
        flex: 0,
        width: 10,
        height: 150,
        backgroundColor: "darksalmon"
    },
    rectangleHorizontal: {
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
    bigImage: {
        height: 200,
        marginTop: 15,
        width: 350,
        borderRadius: 20,
        alignSelf: "center"
    },
    column: {
        flex: 2,
        flexDirection: "column",
        padding: 20,
    },
    titre: {
        color: "white",
        margin: "5%",
        fontSize: 20,
    },
    text: {
        color: "white",
        margin: "5%",
    },
    chip: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: greyColor,
        width: 120,
        height: 50,
        borderRadius: 20,
    },
});