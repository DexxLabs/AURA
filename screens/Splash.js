import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { color } from '../constants/data'

const height = StatusBar.currentHeight
const Splash = () => {
const Navigation = useNavigation();
  useEffect(()=> {
    setTimeout(()=>{
      Navigation.replace("Home");
    },1700)
  });
  return (
    <View style={{flex:1,backgroundColor: color.p,justifyContent:'center',alignItems:'center'}}>
      <StatusBar backgroundColor={color.p}/>
      <Animatable.Image animation={'fadeOut'} delay={100} easing={'ease-in-out-cubic'} duration={1500} source={require('../assets/logo.png')} style={{height:300,aspectRatio:1}}/>
    </View>
  )
}
export default Splash

const styles = StyleSheet.create({})