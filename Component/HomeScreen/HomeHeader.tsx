import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>
              Hello, Ben
        </Text>

        <Text style={styles.desc}>Your health is your wealth</Text>
      </View>

      <View>
        <TouchableOpacity>
            <Image style={styles.img} source={require('../../assets/images/profile pics.png')}/>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16
    },

    greeting:{
        fontFamily:'PoppinsSemiBold',
        fontSize:17,
        fontWeight:'600',
        marginBottom:2

    },

    desc:{
        fontFamily:'PoppinsMedium',
        fontSize:10,
        fontWeight:'500',
        color: '#4A4A4A'

    },

    img:{
        width:40,
        height:40
    }

})