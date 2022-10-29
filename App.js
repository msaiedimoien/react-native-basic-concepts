import React, {useCallback, useState, useEffect} from "react";
import {StyleSheet, Text, View, FlatList, Keyboard, TouchableWithoutFeedback, Alert} from "react-native";
import Header from "./src/components/Header";
import Persons from "./src/components/Persons";
import AddPerson from "./src/components/AddPerson";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const App = () => {
    const [persons, setPersons] = useState([
        {name: "یونس قربانی", key: "1", completed: false},
        {name: "ایمان مدائنی", key: "2", completed: false},
        {name: "سجاد باقرزاده", key: "3", completed: false},
        {name: "محمد اردوخانی", key: "4", completed: false},
    ]);
    const [person, setPerson] = useState('');
    const [fontsLoaded] = useFonts({
        'yekan': require('./assets/fonts/yekan.ttf'),
        'yekan-bold': require('./assets/fonts/yekan-bold.ttf'),
        'nazanin': require('./assets/fonts/nazanin.ttf'),
    });

    useEffect(() => {
        const newFunc = async () => {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
        }
        newFunc();
    }, [fontsLoaded]);

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
            {name: person, key: (parseInt(prevState[prevState.length - 1].key) + 1).toString(), completed: false}
        ]);
        setPerson('');
        Keyboard.dismiss();
    };

    const completedHandler = key => {
        const allPersons = [...persons];
        const personIndex = allPersons.findIndex(p => p.key === key);
        const completedPerson = allPersons[personIndex];
        completedPerson.completed = !completedPerson.completed;
        allPersons[personIndex] = completedPerson;
        setPersons(allPersons);
    };

    if (!fontsLoaded) {
        return null;
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {/* Header */}
                <Header/>
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
                            renderItem={({item}) => (
                                <Persons
                                    person={item}
                                    pressHandler={pressHandler}
                                    completedHandler={completedHandler}
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
        flex: 1,
        padding: 40,
        backgroundColor:'seashell'
    },
    items: {
        flex: 1,
        marginTop: 10,
    },
});