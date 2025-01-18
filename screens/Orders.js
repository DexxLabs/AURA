import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Image } from 'react-native-animatable'
import { padding, user } from '../constants/data'

const Orders = () => {
  return (
    <ScrollView>
      <Header/>
      <View style={{flexDirection: 'row',justifyContent: 'space-between',marginHorizontal: padding.s,paddingVertical:20}}>
        <Image source={require("../assets/profile.jpeg")} style={styles.imageHandler}/>
        <View style={{justifyContent: 'center'}}>
        <Text style={{fontFamily: 'GothamBook',fontSize:14,textAlign: 'right'}}>Hello</Text>
        <Text style={{fontFamily: 'GothamMedium',fontSize:30}}>{user}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default Orders

const styles = StyleSheet.create({
  imageHandler:{
    height:80,
    width:80,
    borderRadius:50
  }
})