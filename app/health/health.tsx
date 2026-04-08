import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HealthWallet from '@/Component/HealthScreen.tsx/HealthWallet'

export default function Health() {
  return (
    <SafeAreaView>
        <HealthWallet/>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

})