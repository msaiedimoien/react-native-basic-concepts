import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {styles} from "../styles/globalStyle";
import { MaterialIcons } from '@expo/vector-icons';

const Persons = ({ person, pressHandler, completedHandler }) => {
    return (
        <TouchableOpacity style={styles.person} onPress={() => completedHandler(person.key)}>
            <MaterialIcons name="delete" size={22} color="red" onPress={() => pressHandler(person.key)}/>
            <Text style={[styles.text, person.completed ? {textDecorationLine: "line-through", color: 'gray', fontStyle: "italic"} : {}]}>
                {person.name}
            </Text>
        </TouchableOpacity>
    );
};

export default Persons;