import Chatflow from '@/Component/BotScreen/Chatflow'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


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
    
  }


  
})