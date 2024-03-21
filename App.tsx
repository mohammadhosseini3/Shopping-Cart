import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

const Test = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    justifyContent : 'center',
    alignItems : 'center',
    flex:1
  },
  text : {
    fontSize : 40,
    color : 'darkblue'
  }
})

export default Test;