import React, { useState } from 'react';
import { View,Text,StyleSheet,FlatList } from 'react-native';
import Header from "./components/Header";
import ListItem from "./components/ListItem"
import AddItem from './components/AddItem';
import uuid from "uuid4"

const Test = () => {
  const [items,setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Water'},
    {id: uuid(), text: 'Cola'},
    {id: uuid(), text: 'Juice'}
  ])

  const deleteItem = (id) => {
    setItems(items => {
      return items.filter(item => item.id !== id)
    })
  }

  const addItem = (text) => {
    setItems(items => {
      return [... items,{id:uuid(),text}]
    })
  }
  
  return(
    <View style={styles.container}>
      <Header></Header>
      <AddItem addItem={addItem}/>
      <FlatList
        data = {items}
        renderItem = {(
          {item}) => <ListItem item={item} deleteItem={deleteItem} />}
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