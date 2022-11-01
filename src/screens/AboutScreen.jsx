import React, {useCallback} from 'react';
import { Text, View } from 'react-native';
import {useFocusEffect} from "@react-navigation/native";
import {styles} from "../styles/globalStyle";

const AboutScreen = () => {
    useFocusEffect(
        useCallback(() => {
            alert("Focused");

            return () => {
                //// Alert unFocused
                // alert('UnFocused')
            };
        })
    );

  return (
      <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
          <View style={styles.border1}>
              <Text style={styles.text}>Programmer:</Text>
              <Text style={[styles.boldText]}>Mostafa Saeidi Moein</Text>
              <View style={{marginVertical: 10}}/>
              <Text>https://github.com/msaiedimoien</Text>
              <Text>Email: msaiedimoien@yahoo.com</Text>
          </View>
      </View>
  );
};

export default AboutScreen;
