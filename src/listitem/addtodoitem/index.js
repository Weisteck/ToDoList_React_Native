import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

const AddTodo = ({ submitHandler }) => {
    const [text, setText] = useState('');
    //const [value, onChangeValue] = useState('')

    // const saveData = async (value) => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('@storage_Key')
    //         const MyTodo = jsonValue != null ? JSON.parse(jsonValue) : []
    //         MyTodo.push(value)
    //         await AsyncStorage.setItem('@storage_Key', JSON.stringify(MyTodo))
    //         console.log('To do save')
    //     } catch (err) {
    //         console.log('Erreur sauvegarde')
    //     }
    // }

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
                onPress={() => {
                    // saveData(text)
                    submitHandler(text)
                }}
                title='+'
                style={styles.button}
            />
        </View>
    )
}

export default AddTodo;