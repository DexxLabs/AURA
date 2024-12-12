import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { border, color, fonts, height, padding } from '../constants/data'

const Bar = () => {
  return (
    <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchBar}
          autoCorrect={false}
          placeholderTextColor={'#888888'}
          caretHidden={true}
          placeholder="Search"
          keyboardType="ascii-capable"
          maxLength={30}
        />
      </View>
  )
}

export default Bar

const styles = StyleSheet.create({
    searchWrapper: {
        paddingVertical: height / 300,
        marginHorizontal: padding.s,
      },
      searchBar: {
        backgroundColor: color.search,
        borderRadius: border,
        paddingHorizontal: 15,
        color: '#444444',
        fontFamily: fonts.bk,
      },
})