import React, {useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from "./src/screens/AboutScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import {styles} from "./src/styles/globalStyle";
import ListPersonsScreen from "./src/screens/persons/ListPersonsScreen";
import AddPersonScreen from "./src/screens/persons/AddPersonScreen";
import ViewPersonScreen from "./src/screens/persons/ViewPersonScreen";

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

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

    const MainScreen = ({ navigation }) => {
        return (
            <Stack.Navigator>
                <Stack.Screen name='List' component={ListPersonsScreen} options={{
                    headerShown: false,
                    title: 'لیست اشخاص',
                    headerRight: () => (
                        <AntDesign style={styles.headerIcon} name="customerservice" onPress={() => alert('لطفا با پشتیبانی تماس بگیرید!')}/>
                    ),
                }}/>
                <Stack.Screen name='Add' component={AddPersonScreen} />
                <Stack.Screen name='view' component={ViewPersonScreen} />
            </Stack.Navigator>
        )
    };

    const TabBottomScreen = ({ navigation }) => {
        return(
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Main') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }else if (route.name === 'About') {
                            iconName = focused ? 'md-information-circle' : 'md-information-circle-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Main" component={MainScreen} options={() => ({title: 'صفحه اصلی'})} />
                <Tab.Screen name='About' component={AboutScreen} options={{title: 'درباره ما'}}/>
                <Tab.Screen name="Settings" component={SettingsScreen} options={{title: 'تنظیمات'}}/>
            </Tab.Navigator>
        )
    };

    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                title: 'مدیریت اشخاص',
                drawerPosition: 'right',
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
                <Drawer.Screen name='Tabs' component={TabBottomScreen} options={{title: 'لیست اشخاص'}} />
                <Drawer.Screen name='Add' component={AddPersonScreen} options={{title: 'اضافه کردن شخص جدید'}} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default App;