import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function SavingTips() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Savings Tips</Text>

      <View style={styles.background}>
        <View style={{flexDirection:'row', gap:2, marginBottom:10, alignItems:'center'}}>
          <Image
            style={{ width: 12, height: 12 }}
            source={require("../../assets/images/moneybag.png")}
          />
          <Text style={styles.start}> Start Small</Text>
        </View>

          <Text style={styles.desc}>
            Even $5 a week adds up to $260 a year. Small consistent savings
            build big safety nets.
          </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 16,
  },

  text: {
    fontFamily: "PoppinsBold",
    fontSize: 12,
    fontWeight: "600",
    color: "#000000",
  },

  background: {
    marginTop: 10,
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#ECF1FA",
  },
  start:{
    fontFamily:'PoppinsMedium',
    fontSize:12,
    fontWeight:'500',
  },

  desc:{
    fontFamily:'PoppinsRegular',
    color:'#707070',
    fontSize:10

  },
});
