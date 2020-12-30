import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/header'
import ListItem from './src/listitem/main';

export default function App() {

  return (
    <View style={styles.container}>
      <Header />
      <ListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
