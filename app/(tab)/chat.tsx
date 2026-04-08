import Chatflow from '@/Component/BotScreen/Chatflow'
import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'


export default function Chat() {
  return (
    <View style={styles.container}>
      <Chatflow/>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#D9D9D900',
    paddingTop: Platform.OS === 'android'? 10:0
    
  }


  
})