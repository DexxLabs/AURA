import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Tab from '../components/Tab';
import {Image} from 'react-native-animatable';
import {color, padding, width} from '../constants/data';

const ProductDetails = () => {
  const navigation = useNavigation();
  const item = useRoute().params.item;
  return (
    <View style={{flex:1,backgroundColor: color.p}}>
      <StatusBar backgroundColor={color.p}/>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <View>
          <Pressable onPress={()=>navigation.goBack()}>
          <Image
            source={require('../assets/arrow.png')}
            style={{height: 20, aspectRatio: 1, margin: padding.s}}
            />
            </Pressable>
        </View>
        <View>
        <Image
            source={require('../assets/cartPS.png')}
            style={{height: 20, aspectRatio: 1, margin: padding.s}}
          />
        </View>
      </View>


      <View>
      <Image
            source={{uri : item.image}}
            style={{width: width, aspectRatio: 1, margin: padding.s}}
            />
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
