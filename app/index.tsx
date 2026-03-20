import { Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.page}>
        <ScrollView>
          <View style={styles.container}>
              <Image style={styles.logo} source={require('../assets/images/app logo.png')}/>
              <Text style={styles.welcomeText}>Welcome Back</Text>
              <Text style={styles.descText}>Sign in to access your health savings and insurance.</Text>
          </View>

        </ScrollView>
      </View>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeArea:{
      flex:1,
      backgroundColor:'#D9D9D900',
      justifyContent:'center',
      alignItems:'center',
      paddingTop: Platform.OS === 'android'? 10:0

  },
  page:{
    justifyContent:'center',
    alignItems:'center'

  },
  container:{
  alignItems:'center'

  },

  logo:{
    width:82,
    height:77,
    marginTop:15,
  },

  welcomeText:{
    fontSize:24


  },
  descText:{
    marginTop:5,
    fontSize:12

  },


})