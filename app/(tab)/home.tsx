import CurrentCoverage from '@/Component/HomeScreen/CurrentCoverage'
import HealthBalance from '@/Component/HomeScreen/HealthBalance'
import HomeHeader from '@/Component/HomeScreen/HomeHeader'
import QuickAction from '@/Component/HomeScreen/QuickAction'
import RecentlyActivity from '@/Component/HomeScreen/RecentlyActivity'
import React from 'react'
import { Platform, ScrollView, StyleSheet, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView style={styles.SafeArea}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }} >
            <HomeHeader/>
            <HealthBalance/>
            <CurrentCoverage/>
            <QuickAction/>
            <RecentlyActivity/>

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