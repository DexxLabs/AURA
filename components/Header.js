import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-animatable'
import { fonts, height, padding } from '../constants/data'

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
        <View style={styles.menu}>
          <Image
            source={require('../assets/menu.png')}
            style={styles.imageHandlerMenu}
          />
        </View>
        <View style={styles.logo}>
          <Image
            source={require('../assets/logoCropped.png')}
            style={styles.imageHandler}
          />
        </View>
        <View style={styles.search}>
          <Image
            source={require('../assets/user.png')}
            style={styles.imageHandlerUser}
          />
        </View>
      </View>
  )
}

export default Header

const styles = StyleSheet.create({
    imageHandler: {
        height: 20,
        width: 300,
        resizeMode: 'center',
      },
      headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: padding.s,
        paddingVertical: height / 50,
      },
      imageHandlerMenu: {
        height: 20,
        aspectRatio: 1,
      },
      imageHandlerUser: {
        height: 25,
        aspectRatio: 1,
      },
      logo: {},
     
})