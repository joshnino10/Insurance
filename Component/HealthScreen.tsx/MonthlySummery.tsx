import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MonthlySummery() {
  return (
    <View style={styles.Container}>
      <Text>Monthly Summary</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        paddingHorizontal:16,
        marginTop:10,

    },
})