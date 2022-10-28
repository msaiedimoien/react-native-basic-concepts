import React, { useState } from "react";
import {StyleSheet, Text, View, FlatList, Keyboard, TouchableWithoutFeedback, Alert} from "react-native";
import Header from "./src/components/Header";
import Persons from "./src/components/Persons";
import AddPerson from "./src/components/AddPerson";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "یونس قربانی", key: "1" },
        { name: "ایمان مدائنی", key: "2" },
        { name: "سجاد باقرزاده", key: "3" },
        { name: "محمد اردوخانی", key: "4" },
    ]);
    const [person, setPerson] = useState('');

    const pressHandler = (key) => {
        setPersons((prevPersons) => prevPersons.filter((p) => p.key != key));
    };

    const submitHandler = () => {
        if (person.length < 3) {
            Alert.alert(
                "توجه",
                "نام شخص باید بیشتر از دو حرف باشد!",
                [{text: 'متوجه شدم'}]
            );
            return;
        }

        setPersons(prevState => [
            ...prevState,
            {name: person, key: (parseInt(prevState[prevState.length - 1].key) + 1).toString()}
        ]);
        setPerson('');
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {/* Header */}
                <Header />
                <View style={styles.body}>
                    {/* Add Person */}
                    <AddPerson
                        submitHandler={submitHandler}
                        person={person}
                        setPerson={setPerson}
                    />
                    <View style={styles.items}>
                        <FlatList
                            data={persons}
                            renderItem={({ item }) => (
                                <Persons
                                    person={item}
                                    pressHandler={pressHandler}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    body: {
        padding: 40,
    },
    items: {
        marginTop: 20,
    },
});