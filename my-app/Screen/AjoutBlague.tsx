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
    TouchableWithoutFeedback
} from "react-native";

export default function App() : React.JSX.Element {
    var [blague, changementBlague] = React.useState('');                    // déclaration d'un getter et d'un setter avec INotifyPropertyChange
    var [chute, changementChute] = React.useState('');
    var [categorie, changementCategorie] = React.useState('');

    return (
        <SafeAreaView style={{backgroundColor: purpleColor, flex:1}}>
            <StatusBar backgroundColor={indigoColor} style="light"/>

            <area onClick={Keyboard.dismiss}>

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
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}>
                <TextInput
                    style={styles.textInput}
                    multiline={true}
                    value={categorie}
                    onChangeText={text => changementCategorie(text)}
                    maxLength={10}
                    placeholder={"Entrez la catégorie de votre blague (10 caractères maximum)"}
                    placeholderTextColor={whiteColor}/>
            </KeyboardAvoidingView>
            </area>

            <Button title={"créer"}/>
            <Button title={"effacer"} onPress={blague => null}/>
        </SafeAreaView>
    );
}