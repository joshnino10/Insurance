import { StyleSheet,  View, ImageBackground, Text, Image } from "react-native";
import React from "react";

export default function TotalBalance() {

    const SavingsAmount = '#310,000.00'

  return (
    <View style={styles.Container}>
      <ImageBackground
        style={styles.BackgroundImage}
        resizeMode="cover"
        source={require("../../assets/images/savingsBackground image.png")}
      >

        <View style={styles.content}>
            <Text style={styles.TotalText}>Total Savings</Text>
            <Text style={styles.Amount}>{SavingsAmount}</Text>

            <View style={styles.row}>
                <Image style={{width:24, height:21}} source={require('../../assets/images/statistics.png')}/>
                <Text style={styles.bonus}>+#50K this Month</Text>
            </View>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 12,
    paddingHorizontal: 20,
  },

  BackgroundImage: {
    height: 160,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  content:{
    padding:25
  },

  TotalText:{
    fontSize:10,
    color:'#E8DAF6',
    fontWeight:'600',
    fontFamily: 'PoppinsSemiBold',
  },

  Amount:{
    fontFamily:'MontserratBold',
    marginTop:10,
    fontSize:24,
    color:'#FFFFFF'

  },

  row:{
    marginTop:25,
    flexDirection:'row',
    alignItems:'center', 
    gap:3,


  },
  bonus:{
    fontFamily:'MontserratBold',
    color:'#E8DAF6',
    fontSize:10
  }



});
