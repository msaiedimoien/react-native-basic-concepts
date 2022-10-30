import React, {useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {

    const [fontsLoaded] = useFonts({
        'yekan': require('./assets/fonts/yekan.ttf'),
        'yekan-bold': require('./assets/fonts/yekan-bold.ttf'),
        'nazanin': require('./assets/fonts/nazanin.ttf'),
    });

    useEffect(() => {
        const loadFarsiFonts = async () => {
            if (fontsLoaded) {
                await SplashScreen.hideAsync();
            }
        }
        loadFarsiFonts();
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    };

    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                drawerPosition: 'right',

                //headerShown: false,
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    // fontWeight: 'bold',
                    fontFamily: 'yekan'
                },
                headerStyle: {
                    backgroundColor: '#f4511e'
                }
            }}>
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={() => ({
                        title: 'مدیریت اشخاص',
                        // headerLeft: () => (
                        //     // <Button style={styles.headerIcon} title="cs" onPress={() => alert('This is a button!')}/>
                        // ),
                    })}
                />
                <Drawer.Screen name='About' component={AboutScreen} options={{title: 'درباره ما'}}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;
