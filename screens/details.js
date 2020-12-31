import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import Detail from '../src/detailitem/main'

const ViewDetail = ({ navigation }) => {

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Detail navigation = { navigation }/>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ViewDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});