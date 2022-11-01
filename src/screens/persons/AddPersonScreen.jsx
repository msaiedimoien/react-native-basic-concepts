import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {styles} from "../../styles/globalStyle";

const AddPersonScreen = () => {
  return (
      <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
          <Text style={[styles.boldText, styles.border1]}>Add New Person Screen</Text>
      </View>
  );
};

export default AddPersonScreen;
