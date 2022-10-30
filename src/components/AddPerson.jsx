import React from 'react';
import { View, TextInput, Button } from 'react-native';
import {styles} from "../styles/globalStyle";

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

export default AddPerson;
