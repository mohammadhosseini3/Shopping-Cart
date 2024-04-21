import React, { useState } from 'react';
import { View,Text,StyleSheet,FlatList } from 'react-native';
import Header from "./components/Header";
import uuid from "uuid4"
import ListItem from "./components/ListItem"

const Test = () => {
  const [items,setItems] = useState([
    {id: uuid, text: 'Milk'},
    {id: uuid, text: 'Water'},
    {id: uuid, text: 'Cola'},
    {id: uuid, text: 'Juice'}
  ])
  return(
    <View style={styles.container}>
      <Header></Header>
      <FlatList
        data = {items}
        renderItem = {({item}) => <ListItem item = {item}/>}
      />
        
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1
  }
})

export default Test;