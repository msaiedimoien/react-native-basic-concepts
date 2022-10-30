import React, {useState, useEffect} from "react";
import {View, FlatList, Keyboard, TouchableWithoutFeedback, Alert, Button, Text} from "react-native";
import {styles} from "../styles/globalStyle";
import Header from "../components/Header";
import Persons from "../components/Persons";
import AddPerson from "../components/AddPerson";
import { AntDesign } from '@expo/vector-icons';



const HomeScreen = ({ navigation }) => {
    const [persons, setPersons] = useState([
        {name: "یونس قربانی", key: "1", completed: false},
        {name: "ایمان مدائنی", key: "2", completed: false},
        {name: "سجاد باقرزاده", key: "3", completed: false},
        {name: "محمد اردوخانی", key: "4", completed: false},
    ]);
    const [person, setPerson] = useState('');

    React.useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <AntDesign style={styles.headerIcon} name="customerservice" onPress={() => navigation.navigate('About')}/>
            ),
        });
    }, [navigation]);

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

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {/* Header */}
                {/*<Header/>*/}
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

export default HomeScreen;