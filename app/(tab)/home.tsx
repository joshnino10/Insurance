import CurrentCoverage from '@/Component/HomeScreen/CurrentCoverage'
import HealthBalance from '@/Component/HomeScreen/HealthBalance'
import HomeHeader from '@/Component/HomeScreen/HomeHeader'
import React from 'react'
import { Platform, ScrollView, StyleSheet, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView style={styles.SafeArea}>
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }} >
            <HomeHeader/>
            <HealthBalance/>
            <CurrentCoverage/>

        </ScrollView>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    SafeArea:{
        flex:1,
        backgroundColor:'#D9D9D900',
        paddingTop: Platform.OS === 'android'? 10:0
    },
})