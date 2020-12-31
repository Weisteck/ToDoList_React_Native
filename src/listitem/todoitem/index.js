import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon  from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const TodoItem = ({ item, pressHandler, pressDetail }) => {
    
    return (
        <TouchableOpacity 
            onPress={pressDetail}
        >
            <View style={styles.item}>
                <Text style={styles.text}>{item.text}</Text>
                <Icon name="minus-square-o" size={18} color="red"
                    onPress={() => pressHandler(item.key)}
                />
            </View>
        </TouchableOpacity>
    )
};

export default TodoItem;