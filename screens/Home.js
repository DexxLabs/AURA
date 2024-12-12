import {ImageBackground, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {border, color, fonts, height, padding, user} from '../constants/data';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Bar from '../components/Bar';

const Home = () => {
  const [selection,isSelected]=useState(true)
  return (
    <ScrollView style={{flex: 1, backgroundColor: color.p}}>
      <Header/>

      <View style={styles.middleWrapper}>
        <Text style={styles.headerText}>Hello</Text>
        <Text style={styles.headerTextName}>{user}</Text>
      </View>

      {/* search */}

      <Bar/>

      {/* section */}
      <View style={styles.sectionWrapper}>
        <View style={[styles.men,selection?{backgroundColor:color.sec}:{backgroundColor: color.p}]}>
        <Pressable onPress={()=>{isSelected(true)}}>
          <Text style={[styles.sectionText,selection?{color:color.p}:{color:color.sec}]}>MEN</Text>
        </Pressable>
        </View>
        <View style={[styles.women,selection?{backgroundColor:color.p}:{backgroundColor: color.sec}]}>
        <Pressable onPress={()=>{isSelected(false)}}>
        <Text style={[styles.sectionText,selection?{color:color.sec}:{color:color.p}]}>WOMEN</Text>
        </Pressable>
        </View>
        </View>
      {/* products */}
      

    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  middleWrapper: {
    margin: padding.s,
  },
  sectionWrapper:{
    flexDirection : "row",
    height : height/12,
    marginVertical : height/50,
    marginHorizontal : padding.s
  },
  men:{
    flex:1,
    justifyContent: 'center',
    borderRadius: border,
    marginRight : padding.s,
    elevation : 3
  },
  women:{
    flex:1,
    justifyContent: 'center',
    borderRadius: border,
    elevation : 3
  },
  sectionText:{
    padding:20,
    fontFamily : fonts.b,
    color:color.sec,
    textAlign: 'center'
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
