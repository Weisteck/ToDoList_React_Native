import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Header = () => {
    return (
        <View style={styles.title}>
            <Text style={styles.text}>Mes tâches</Text>
        </View>
    )
}

export default Header;