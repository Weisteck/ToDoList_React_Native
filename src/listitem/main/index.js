import React, { useState, useEffect } from 'react';
import { View, FlatList, Alert, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoItem from '../todoitem';
import AddTodo from '../addtodoitem';
import styles from './styles';

const ListItem = ({ navigation }) => {

  const [todo, setTodo] = useState([]);

  useEffect(() => {
    restoreTodo()
  },)

  const pressHandler = (key) => {
    const newTodo = todo.filter(todo => todo.key !== key)
    setTodo(newTodo)
    storeTodo(newTodo)
  }

  const submitHandler = text => {
    if (text.length === 0) return;
    const key = Math.random().toString()
    const newTodo = [{ text, key }, ...todo]
    setTodo(newTodo)
    storeTodo(newTodo)
  }

  const asyncStorageKey = '@todos'

  const storeTodo = newTodo => {
    const stringifiedTodo = JSON.stringify(newTodo)
    AsyncStorage.setItem(asyncStorageKey, stringifiedTodo).catch(err => {
      console.log(err)
    })
  }

  const restoreTodo = () => {
    AsyncStorage.getItem(asyncStorageKey)
      .then(stringifiedTodo => {
        const parsedTodo = JSON.parse(stringifiedTodo)
        if (!parsedTodo || typeof parsedTodo !== 'object') return;
        setTodo(parsedTodo)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // const pressDetail = () => navigation.navigate('Detail', )

    return (
      <View style={styles.content}>
        <AddTodo 
          submitHandler = { submitHandler }
          // setItemStorage = { setItemStorage }
        />
        <View style={styles.list}>
          <FlatList 
            data={todo}
            keyExtractor={item => item.key}
            renderItem={({item}) => (
            <TodoItem item = { item } pressHandler = { pressHandler } navigation = { navigation } submitHandler = { submitHandler }/>
            )}
            
          />
        </View>
      </View>
    )
}

export default ListItem;