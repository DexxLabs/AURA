import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {border, fonts, height, padding, width} from '../constants/data';

const Cards = ({name,price,image}) => {
  return (
    <View style={styles.card}>
      <View style={{flex: 4}}>
        <Image source={{uri : image}} style={styles.ImageHandler}/>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        <View style={{flexShrink:1}}>
          <Text style={styles.productName}>{name}</Text>
        </View>
        <View>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    height: height / 3.5,
    borderRadius: border,
    marginHorizontal: padding.s / 2,
    width: (width/2)-(padding.s*2),
    marginBottom: padding.s,
    elevation: 3
  },
  ImageHandler: {
    flex:1,
    width: "100%",
    borderTopLeftRadius: border,
    borderTopRightRadius:border,
  },
  productName: {
    color: '#000',
    fontFamily: fonts.bk,
    fontSize: 14,
    margin: padding.s,
  },
  price: {
    fontFamily :fonts.bk,
    margin: padding.s,
  },
});
