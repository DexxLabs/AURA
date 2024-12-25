import {Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Tab from '../components/Tab';
import {Image} from 'react-native-animatable';
import {color, fonts, height, padding, width} from '../constants/data';


const ProductDetails = () => {
  const [cart,setCart] = useState([]);
  const navigation = useNavigation();
  const item = useRoute().params.item;
  return (
    <View style={{flex:1,backgroundColor: color.p}}>
      <StatusBar backgroundColor={color.p}/>
      <View style={{justifyContent: 'space-between', flexDirection: 'row',alignItems : 'center'}}>
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
            source={require('../assets/logoCropped.png')}
            style={styles.imageHandler}
          />
        </View>
        <View>
        <Pressable onPress={()=>navigation.navigate('Cart')}>
        <Image
            source={require('../assets/cartPS.png')}
            style={{height: 20, aspectRatio: 1, margin: padding.s}}
          />
          </Pressable>
        </View>
      </View>


      <View>
      <Image
            source={{uri : item.image}}
            style={{width: width, aspectRatio: 1,marginTop: padding.s}}
            />
      </View>
      <View style={{margin : padding.s,marginVertical:padding.l}}>
      <Text style={styles.name}>
        {item.name}
      </Text>
      <Text style={styles.price}>
        ${item.price}
      </Text>
      </View>


      <View style={{marginHorizontal: padding.s}}>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={()=>{
          
        }}>
        {/* <Image source={}/> */}
        <Text style={styles.addtoCart}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  name:{fontFamily: fonts.bk,
    fontSize : 20,
    color:color.sec,
  },
  price : {
    fontFamily: fonts.bk,
    fontSize : 30,
    color:color.sec,
  },
  imageHandler: {
    height: 20,
    width: 300,
    resizeMode: 'center',
  },
  description:{
    fontFamily : fonts.bk,
    color : color.tert
  },
  bottomBar:{
    backgroundColor: color.sec,
    position: 'absolute',
    bottom :'0%',
    width : width
  },
  addtoCart:{
    fontFamily : fonts.b,
    color: color.search,
    textAlign : 'center',
    flex:1,
    padding: width/20,
  }
});
