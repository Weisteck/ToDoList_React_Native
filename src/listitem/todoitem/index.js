import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const TodoItem = ({ item, pressHandler }) => {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <Text>{item.text}</Text>
                <Icon name="minus-square-o" size={18} color="red"/>
            </View>
        </TouchableOpacity>
    )
};

export default TodoItem;