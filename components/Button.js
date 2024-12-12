import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { border, color, fonts, height, padding, width } from '../constants/data'

const Button = ({name,focused}) => {
  return (
    <View style={[styles.buttonWrapper,focused?{backgroundColor: color.sec}:{}]}>
      <Text style={[styles.text,focused?{color: color.s}:{}]}>{name}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    buttonWrapper:{
        backgroundColor:color.s,
        padding: height/70,
        borderRadius: border,
        marginHorizontal :padding.s/2,
        marginBottom : padding.s/2,
        alignSelf : 'flex-start'
        
    },
    text:{
        fontFamily : fonts.bk
    }
})