import { StyleSheet,Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HealthWallet from '@/Component/HealthScreen.tsx/HealthWallet'

export default function Health() {
  return (
    <SafeAreaView style={styles.SafeArea}>
        <HealthWallet/>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    SafeArea:{
          flex:1,
          backgroundColor:'#D9D9D900',
          paddingTop: Platform.OS === 'android'? 10:0

    }

})