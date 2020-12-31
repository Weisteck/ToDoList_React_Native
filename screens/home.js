import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../src/header'
import ListItem from '../src/listitem/main';

const Home = ({ navigation }) => {

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
        <ListItem navigation = { navigation }/>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});