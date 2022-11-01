import React from 'react';
import { Text, View } from 'react-native';
import {styles} from "../styles/globalStyle";

const SettingsScreen = () => {
  return (
    <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
      <Text style={[styles.boldText, styles.border1]}>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
