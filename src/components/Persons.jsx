import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Persons = ({ person, pressHandler, completedHandler }) => {
    return (
        <TouchableOpacity style={styles.person} onPress={() => completedHandler(person.key)}>
            <MaterialIcons name="delete" size={24} color="red" onPress={() => pressHandler(person.key)}/>
            <Text style={[styles.text, person.completed ? {textDecorationLine: "line-through", color: 'gray', fontStyle: "italic"} : {}]}>
                {person.name}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    person: {
        padding: 20,
        marginTop: 15,
        borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 20,
        borderStyle: 'dashed',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    text: {
        fontSize: 17,
        // fontWeight: "bold",
        fontFamily: 'nazanin'
    }
});

export default Persons;
