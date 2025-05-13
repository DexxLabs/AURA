import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
//imports
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//screens
import Splash from './screens/Splash';
import {color} from './constants/data';
import Tab from './components/Tab';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';

//constants
const height = StatusBar.currentHeight;
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#f4f4f4'}}>
      <StatusBar backgroundColor={color.p}  />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Tab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({});
