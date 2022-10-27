import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./src/components/Header";
import Persons from "./src/components/Persons";

const App = () => {
    const [persons, setPersons] = useState([
        { name: "یونس قربانی", key: "1" },
        { name: "ایمان مدائنی", key: "2" },
        { name: "سجاد باقرزاده", key: "3" },
        { name: "محمد اردوخانی", key: "4" },
        { name: "مصطفی سعیدی", key: "5" },
        { name: "متین نجفی", key: "6" },
        { name: "سینا معین", key: "7" },
        { name: "جواد فهیم", key: "8" },
        { name: "مهدیه حسامی", key: "9" },
        { name: "هانا سعیدی معین", key: "10" },
    ]);

    const pressHandler = (key) => {
        setPersons((prevPersons) => prevPersons.filter((p) => p.key != key));
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <Header />
            <View style={styles.body}>
                {/* Add Person */}
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