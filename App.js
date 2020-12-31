import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Navigator from './routes/homeStack';
import { LinearGradient, AppLoading } from 'expo';

export default function App() {

    return (
      <Navigator />
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
