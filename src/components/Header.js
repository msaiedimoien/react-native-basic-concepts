import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>مدیریت کننده اشخاص</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        height: 90,
        paddingTop: 40,
        backgroundColor: 'darkorange'
    },
    title: {
        textAlign: "center",
        color: 'white',
        fontSize: 25,
        // fontWeight: "bold"
        fontFamily: 'yekan'
    }
});

export default Header;
