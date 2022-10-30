import React from 'react';
import { Text, View } from 'react-native';
import {styles} from "../styles/globalStyle";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>مدیریت کننده اشخاص</Text>
    </View>
  );
};

export default Header;
