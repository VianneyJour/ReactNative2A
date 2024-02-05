import { StatusBar } from 'expo-status-bar';
import {Button, FlatList, SafeAreaView, StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';

import { Stub } from "./Model/Stub";
import { loadExtension } from "./extensions";
import {SampleJoke} from "./Model/SampleJoke"
import SampleJokeListItem from "./Screen/SampleJokeList"
import {darksalmonColor, indigoColor, purpleColor} from "./assets/Theme";

// loadExtension permet de charger la méthode displayDescription
//loadExtension();
//<Text>{dataSampleJoke.displayDescription()}</Text>
//<Text> {dataCustomJoke.displayDescription()} </Text>

const dataSampleJoke = Stub.sampleJokeStub;
const dataCustomJoke = Stub.customJokeStub;

export default function App() {
  return (
      <SafeAreaView style={{backgroundColor: purpleColor}}>
          <StatusBar backgroundColor={purpleColor}/>

          <View style={styles.composant}>
              <Text style={styles.title}>Catalogue</Text>

              <FlatList data={dataSampleJoke}
                        renderItem={SampleJokeListItem}/>

              <StatusBar style="auto" />
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  composant: {
    justifyContent: 'center',
  },
    title: {
      color: 'darksalmon',
        fontSize: 24,
    }
});
