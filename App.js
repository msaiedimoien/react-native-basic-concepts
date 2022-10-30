import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle:{
                // fontWeight: 'bold',
                fontFamily: 'yekan-bold'
            },
            headerStyle: {
                backgroundColor: '#f4511e'
            }
        }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{title: 'مدیریت اشخاص'}} />
            <Stack.Screen name='About' component={AboutScreen} options={{title: 'درباره ما'}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
