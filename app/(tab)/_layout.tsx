import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown:false}}>
        <Tabs.Screen name='home'/>
        <Tabs.Screen name='savings'/>
        <Tabs.Screen name='chat'/>
        <Tabs.Screen name='plans'/>
        <Tabs.Screen name='profile'/>
    </Tabs>
  
  )
}

const styles = StyleSheet.create({

})