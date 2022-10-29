import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

const AddPerson = ({ person, setPerson, submitHandler }) => {
  return (
    <View>
      <TextInput
          style={styles.input}
          placeholder='نام شخص را تایپ نمایید...'
          placeholderTextColor= 'gray'
          onChangeText={setPerson}
          value={person}
      />
        <Button
            title='اضافه کن!'
            color='orange'
            onPress={submitHandler}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'orangered',
        padding: 10,
        marginBottom: 10,
        fontFamily: "yekan",
        fontSize: 16
    }
});

export default AddPerson;
