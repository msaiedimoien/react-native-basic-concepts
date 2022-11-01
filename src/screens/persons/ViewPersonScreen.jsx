import React from 'react';
import { Text, View } from 'react-native';
import {styles} from "../../styles/globalStyle";

const ViewPersonScreen = () => {
  return (
      <View style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
          <Text style={[styles.boldText, styles.border1]}>View, Edit Person Screen</Text>
      </View>
  );
};

export default ViewPersonScreen;
