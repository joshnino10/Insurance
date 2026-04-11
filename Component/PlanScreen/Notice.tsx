import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Notice() {
  return (
    <View style={styles.Container}>
      <View style={styles.content}>
        <Image style={styles.icon} source={require('../../assets/images/notice icon.png')}/>
        <Text style={styles.decription}>Need help deciding? Ask HealthBot to explain the difference between Daily Shield and Silver Care.</Text>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        paddingHorizontal:16,

    },
    content:{
        flexDirection:'row',
        backgroundColor:'#ECF1FA',
        padding:20,
        gap:5,
        borderRadius:20

    },
    icon:{
        width:24,
        height:24
    },
    decription:{
       fontFamily:'PoppinsRegular',
        fontSize:11,
        fontWeight:'400',
        color:'#1A48BB'


    }
})