import React, { useState, useEffect } from 'react';
import { View, Text, Alert, Button, TextInput } from 'react-native';
import styles from './styles';

const Detail = ({ navigation }) => {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <Text style={styles.text}>{navigation.getParam('text')}</Text>
            <TextInput
                style={styles.input}
                placeholder='Description de la tâche...'
                onChangeText={(val) => changeHandler(val)}
            />
            <Button
                onPress={() => {}}
                title="SAUVEGARDER"
            />
        </View>
    )
}

export default Detail;