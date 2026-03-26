import React from 'react'
import { StyleSheet,  View } from 'react-native'
import ActiveGoalsDetails from '../ActiveGoals/ActiveGoalsDetails'

export default function ActiveGoals() {
  return (
    <View style={styles.Container}>
       <ActiveGoalsDetails/>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        marginTop:20,
        paddingHorizontal:16
    },
})