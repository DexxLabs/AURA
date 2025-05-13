import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation } from '@react-navigation/native';

import Header from '../components/Header';
import Bar from '../components/Bar';
import Button from '../components/Button';
import {clothingCategories} from '../constants/category';
import {fonts, padding} from '../constants/data';
import * as Animatable from 'react-native-animatable';
import {products} from '../constants/products';
import Cards from '../components/Cards';


const Categories = () => {
  const [selectedId, setSelectedId] = useState(1);
  const navigation = useNavigation();
  return (
    <View>

      <View style={styles.productWrapper}>
        <FlatList
        ListHeaderComponent={
          <>
      <Header />
      <Bar />
      <View style={styles.List}>
        {clothingCategories.map(item => (
          <Pressable key={item.id} onPress={() => setSelectedId(item.id)}>
            <Button name={item.name} focused={selectedId === item.id} />
          </Pressable>
        ))}
      </View>

      <View style={{marginHorizontal: padding.s, marginVertical: padding.m}}>
        <Animatable.Text
          animation={'fadeIn'}
          key={selectedId}
          duration={500}
          style={styles.category}>
          {clothingCategories[selectedId - 1].name}
        </Animatable.Text>
      </View>
      </>
        }
          data={products.filter(data => data.category===clothingCategories[selectedId-1].name)}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={{ flex: 1, alignItems: 'center', marginVertical: 10 }}>
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
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  buttons: {},
  List: {
    marginTop: padding.m,
    marginHorizontal: padding.s,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  category: {
    fontFamily: fonts.bk,
    fontSize: 25,
  },
  productWrapper: {
  },
});
