import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Persons = ({ person, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(person.key)}>
      <Text style={styles.person}>{person.name}</Text>
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
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold"
    }
});

export default Persons;
