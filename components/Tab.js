import {StyleSheet, Text, View,Image, Pressable} from 'react-native';
import React from 'react';
import {createBottomTabNavigator, TransitionSpecs} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Orders from '../screens/Orders';
import {border, color, fonts, height, padding, width} from '../constants/data';
import Categories from '../screens/Categories';

const Tabs = createBottomTabNavigator();
const Tab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarButton: (props) => <Pressable {...props}/>,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: '1%',
          width: '50%',
          height: '7%',
          borderRadius: border,
          transform: [{translateX: width / 2 - (0.5 * width) / 2}],
        },
        animation :'fade',
        tabBarActiveBackgroundColor: color.sec,
        tabBarIconStyle: {
          flex:1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
      >
      <Tabs.Screen component={Home} name="Hom" options={{headerShown: false,
        tabBarIcon :({focused}) => (
          <Image animation={'fadeIn'} duration={500} source={require('../assets/home.png')}
          style={{height:25,width:25,tintColor: focused ? color.s: color.sec}}/>
        ),
          tabBarActiveTintColor: color.sec,
      }} />
      <Tabs.Screen
        component={Categories}
        name="Category"
        options={{headerShown: false,
        tabBarIcon :({focused}) => (
          <Image source={require('../assets/search.png')}
          style={{height:25,width:25,tintColor: focused ? color.s : color.sec}}/>
        )
      }}/>
      <Tabs.Screen
        component={Cart}
        name="Cart"
        options={{headerShown: false,
          tabBarIcon :({focused}) => (
            <Image source={require('../assets/cart.png')}
            style={{height:25,width:25,tintColor: focused ? color.s: color.sec}}/>
          ),
        }}
      />
      <Tabs.Screen
        component={Orders}
        name="Orders"
        options={{headerShown: false,
        tabBarIcon :({focused}) => (
          <Image source={require('../assets/users.png')}
          style={{height:25,width:25,tintColor: focused ? color.s: color.sec}}/>
        )
      }}
      />
    </Tabs.Navigator>
  );
};

export default Tab;

const styles = StyleSheet.create({});
