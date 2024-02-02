import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Switch, Text, View} from 'react-native';
import { Stub } from "./Model/Stub";
import { loadExtension } from "./extensions";

// Appel à loadExtension pour charger la méthode displayDescription
loadExtension();

const dataSampleJoke = Stub.sampleJokeStub;
const dataCustomJoke = Stub.customJokeStub;

export default function App() {
  return (
    <View style={styles.container}>
        <Button title={"Voir les blagues"} />
        <Switch/>

      <Text>Voilà une liste de blague :</Text>
      <Text>{dataSampleJoke.displayDescription()}</Text>
        <Text> {dataCustomJoke.displayDescription()} </Text>

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
