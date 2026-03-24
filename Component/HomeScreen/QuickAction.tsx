import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function QuickAction() {

    const QuickAction = [
        {
            id:'1',
            Icon: require('../../assets/images/track icon.png'),
            Title: 'Track Saving',
            SubTitle: 'Goal: $500 for emergencies',
        },

        {
            id:'2',
            Icon: require('../../assets/images/health icon.png'),
            Title: 'Health Guide',
            SubTitle: 'Ask HealthBot Anything',
        },
    ]

  return (
    <View style={styles.Container}>
        {
            QuickAction.map((item)=>(
                <Pressable key={item.id} style={styles.Card}>

                    <Image style={styles.icon} source={item.Icon}/>

                    <Text style={styles.title}>{item.Title}</Text>
                    <Text style={styles.subTitle}>{item.SubTitle}</Text>

                </Pressable>
            ))
        }
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        marginTop:20,
        marginHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        
    },

    Card:{
        backgroundColor:'#FFFFFF',
        padding:16,
        borderRadius:25,
        width:'48%', 
        shadowColor:'#000',
        shadowOffset:{width:0, height:4},
        shadowOpacity:0.1,
        shadowRadius:4,
        elevation:3,
    },

    icon:{
        width:24,
        height:24,
        marginBottom:10
    },

    title:{
        fontFamily:'PoppinsBold',
        fontSize:12,
        fontWeight:'600',
        marginBottom:4
    },

    subTitle:{
        fontFamily:'PoppinsRegular',
        fontSize:8,
        color:'#000000'
    }
})