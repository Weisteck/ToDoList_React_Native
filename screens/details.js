import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';

const Home = () => {

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Text> DEUXIEME ECRAN</Text>
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