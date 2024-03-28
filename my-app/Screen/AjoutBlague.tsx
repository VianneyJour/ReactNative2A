import React from "react";
import {indigoColor, purpleColor, styles, whiteColor} from "../assets/Theme";
import {StatusBar} from "expo-status-bar";
import {
    Button, Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Text,
    TextInput,
    TouchableWithoutFeedback, View
} from "react-native";

export default function App() : React.JSX.Element {
    var [blague, changementBlague] = React.useState('');                    // déclaration d'un getter et d'un setter avec INotifyPropertyChange
    var [chute, changementChute] = React.useState('');
    var [categorie, changementCategorie] = React.useState('');

                                                                                                                        // <KeyboardAvoidingView> pour monter l'input box lors de la saisie
    return (
        <SafeAreaView style={{backgroundColor: purpleColor, flex:1}}>
            <StatusBar backgroundColor={indigoColor} style="light"/>

            <View onTouchStart={Keyboard.dismiss}>

            <Text style={styles.titre}>Blague</Text>
            <TextInput
                inputAccessoryViewID={'texted'}
                style={styles.textInput}
                multiline={true}
                value={blague}
                onChangeText={text => changementBlague(text)}
                placeholder={"Entrez votre blague ici"}
                placeholderTextColor={whiteColor}/>

            <Text style={styles.titre}>Chute de la blague</Text>
            <TextInput
                style={styles.textInput}
                multiline={true}
                value={chute}
                onChangeText={text => changementChute(text)}
                placeholder={"Entrez la chute ici"}
                placeholderTextColor={whiteColor}/>

            <Text style={styles.titre}>Catégorie</Text>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    value={categorie}
                    onChangeText={text => changementCategorie(text)}
                    maxLength={10}
                    placeholder={"Entrez la catégorie de votre blague (10 caractères maximum)"}
                    placeholderTextColor={whiteColor}/>
            </View>

            <Button title={"créer"}/>
            <Button title={"effacer"} onPress={blague => null}/>
        </SafeAreaView>
    );
}