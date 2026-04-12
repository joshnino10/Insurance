import { router } from 'expo-router';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'

export default function Logout() {

  const handleLogout = () => {

    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => router.replace('/(auth)/login') ,
          style: "destructive"
        }
      ]
    );
  };

  return (
    <View style={styles.Container}>
        <TouchableOpacity style={styles.btn} onPress={handleLogout}>
            <Image 
              style={styles.icon} 
              source={require('../../assets/images/logout icon.png')}
            />
            <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
        <Text style={styles.name}>CARESAVE HEALTH V2.1.0</Text>



    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        paddingHorizontal:16,
        marginTop:20
    },

    icon:{
        width:24,
        height:24
    },

    btn:{
        backgroundColor:'#FBE7E5',
        padding:20,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        gap:5,
        flexDirection:'row',
    },

    text:{
        fontFamily:'PoppinsSemiBold',
        color:'#FF2E2E',
        fontSize:16,
    },


    name:{
        fontSize: 16,
        color:'#B9B9B9',
        textAlign:'center',
        marginTop:10,
    }
})