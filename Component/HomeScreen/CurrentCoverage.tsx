import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function CurrentCoverage() {
  const currentCoverage = [
    {
      id: "1",
      Icon: require("../../assets/images/silver care icon.png"),
      Title: "Silver Care",
      Renew: "Renew in 12 Days",
      isActive: true,
    },
  ];

  return (
    <View style={styles.Container}>
      <View style={styles.titleHeader}>
        <Image
          style={styles.icon}
          source={require("../../assets/images/current icon.png")}
        />
        <Text style={styles.current}>Current Coverage</Text>
      </View>

      {currentCoverage.map((item) => (
        <TouchableOpacity key={item.id} style={styles.Card}>
          <View style={{flexDirection:'row', gap:10}}>
            <Image style={{ width: 34, height: 34 }} source={item.Icon} />
            <View >
              <Text style={styles.Title}>{item.Title}</Text>
              <Text style={styles.Renew}>{item.Renew}</Text>
            </View>
          </View>

          <View>
            <Text style={styles.active}>{item.isActive ? "Active" : null}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 20,
    paddingHorizontal: 16,
  },

  icon: {
    width: 24,
    height: 24,
  },

  titleHeader: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },

  current: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 12,
    fontWeight: "600",
    color: "#000000",
  },
  Card: {
    marginTop:14,
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor:'#00000033',
    shadowOffset:{width:0, height:9},
    shadowOpacity:0.3,
    shadowRadius:4,

    elevation:4


  },


  Title:{
    fontSize:13,
    fontFamily:'PoppinsSemiBold',
    fontWeight:'600',


  },

  Renew:{
    fontFamily:'PoppinsRegular',
    fontSize:9,
    color:'#000000'

  },
  active:{
    fontFamily:'PoppinsSemiBold',
    backgroundColor:'#C8A7EB',
    fontSize:9,
    fontWeight:'600',
    paddingHorizontal:10,
    paddingVertical:2,
    borderRadius:10,
    color:'#FFFFFF',

  }
  
});
