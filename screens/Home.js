import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation } from '@react-navigation/native';
import {border, color, fonts, height, padding, user} from '../constants/data';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Bar from '../components/Bar';
import { products } from '../constants/products';

const Home = () => {
  const [selection, isSelected] = useState(true);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: color.p}}>
      {/* products */}
      <FlatList 
      ListHeaderComponent={
        <>
        <View>
          <Header/>
        </View>
      <View style={styles.middleWrapper}>
        <Text style={styles.headerText}>Hello</Text>
        <Text style={styles.headerTextName}>{user}</Text>
      </View>
      {/* search */}
      <Bar />
      {/* section */}
        </>
      }
      data={products}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Pressable onPress={() => navigation.navigate('ProductDetails', { item })}>
            <Cards
              name={item.name}
              image={item.image}
              price={item.price}
            />
          </Pressable>
        </View>
      )}
      
      numColumns={2}
      style={{}}
      contentContainerStyle={{}}
    />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  middleWrapper: {
    marginHorizontal:padding.s
  },

  headerText: {
    fontFamily: fonts.th,
    fontSize: 18,
  },
  headerTextName: {
    fontFamily: fonts.th,
    fontSize: 40,
  },
});
