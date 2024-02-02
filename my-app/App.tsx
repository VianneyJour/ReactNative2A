import { StatusBar } from 'expo-status-bar';
import {Button, FlatList, StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";

import { Stub } from "./Model/Stub";
import { loadExtension } from "./extensions";
import {SampleJoke} from "./Model/SampleJoke"
import SampleJokeListItem from "./Screen/SampleJokeList"

// loadExtension permet de charger la méthode displayDescription
//loadExtension();
//<Text>{dataSampleJoke.displayDescription()}</Text>
//<Text> {dataCustomJoke.displayDescription()} </Text>

const dataSampleJoke = Stub.sampleJokeStub;
const dataCustomJoke = Stub.customJokeStub;

export default function App() {
  return (
      <SafeAreaProvider>
          <View style={styles.container}>
              <Button title={"Voir les blagues"} />
              <Switch/>

              <Text style={styles.title}>Catalogue</Text>

              <FlatList data={dataSampleJoke}
                        renderItem={SampleJokeListItem}/>

              <StatusBar style="auto" />
          </View>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dark",
    alignItems: 'center',
    justifyContent: 'center',
  },
    title: {
      color: 'darksalmon',
        fontSize: 24,
    }
});
