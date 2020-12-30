import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './styles';

const AddTodo = ({ submitHandler }) => {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Nouvelle tâche...'
                onChangeText={(val) => changeHandler(val)}
            />
            <Button 
                onPress={() => submitHandler(text)}
                title='+'
                style={styles.button}
            />
        </View>
    )
}

export default AddTodo;