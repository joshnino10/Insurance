import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function RecentTransaction() {
  return (
    <View style={styles.Container}>
      <Text style={styles.recentText}>Recent Transaction</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        marginTop:15,
        paddingHorizontal:16,

    },
    recentText:{
        fontFamily:'PoppinsBold',
        fontSize:12,

    }
})