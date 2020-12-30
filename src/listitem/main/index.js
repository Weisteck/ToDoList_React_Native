import React, { useState } from 'react';
import { View, FlatList, Alert } from 'react-native';
import TodoItem from '../todoitem';
import AddTodo from '../addtodoitem';
import styles from './styles'

const ListItem = () => {

    const [todo, setTodo] = useState([
        {text: 'acheter', key: '1' },
        {text: 'boire', key: '2' },
        {text: 'jouer', key: '3' }
      ]);

    const pressHandler = (key) => {
        setTodo((prevTodo) => {
          return prevTodo.filter(todo => todo.key != key);
        })
    }

    const submitHandler = (text) => {

        if(text.length > 2){
          setTodo((prevTodo) => {
            return [
              { text: text, key: Math.random().toString() },
              ...prevTodo
            ]
          }) 
        } else if(text.length == 0) {
          Alert.alert('alerte1', 'La tâche ne peut pas être vide flemmard !', [
            {text: 'Ok je me bouge !'}
          ])
        } else if(text.length == 1) {
          Alert.alert('alerte2', 'Quelle tâche peut contenir 1 caractère ?', [
            {text: 'Wouah tu es dure !'}
          ])
        } else {
          Alert.alert('alerte3', 'Tu es presque ! Encore 1 caractère...', [
            {text: 'Relou'}
          ])
        }
      }

    return (
      <View style={styles.content}>
        <AddTodo submitHandler = { submitHandler }/>
        <View style={styles.list}>
          <FlatList 
            data={todo}
            renderItem={({item}) => (
            <TodoItem item = { item } pressHandler = { pressHandler }/>
            )}
          />
        </View>
      </View>
    )
}

export default ListItem;