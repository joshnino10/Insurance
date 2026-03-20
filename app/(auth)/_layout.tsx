import { StyleSheet,  } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function Authlayout() {
  return (
   <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name='login'/>
    <Stack.Screen name='signup'/>
   </Stack>
  )
}

const styles = StyleSheet.create({})