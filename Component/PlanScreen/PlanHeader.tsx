import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PlanHeader() {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Micro-Insurance</Text>
      <Text style={styles.Subtitle}>Simple protection for you and your family.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        alignItems:'center',

    },
    title:{
        fontFamily:'PoppinsSemiBold',
        fontSize:20,
        fontWeight:'600',

    },

    Subtitle:{
        fontFamily:'PoppinsSemiBold',
        fontSize:12,
        color:'#707070',
        fontWeight:'600',

    },
})