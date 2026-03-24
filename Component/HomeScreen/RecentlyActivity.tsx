import {
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import { activies } from "../RecentActivities/Activities";
  
  export default function RecentlyActivity() {
    return (
      <View style={styles.Container}>
      
        <View style={styles.row}>
          <Text style={styles.recently}>Recent Activity</Text>
          <Pressable>
            <Text style={styles.viewAll}>View All</Text>
          </Pressable>
        </View>
  
       
        {activies.slice(0, 3).map((item) => (
          <TouchableOpacity key={item.id} style={styles.Card} activeOpacity={0.7}>
           
            <View style={styles.Header}>
              <Text style={styles.title}>{item.Title}</Text>
              <Text style={[styles.price, { color: item.color }]}>
                {item.Price}
              </Text>
            </View>
  
          
            <View style={styles.subheader}>
              <Text style={styles.date}>{item.Date}</Text>
  
    
              {item.isCovered && (
                <Text style={styles.covered}>Covered</Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    Container: {
      marginTop: 40,
      paddingHorizontal: 16,
    },
  
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  
    recently: {
      fontFamily: "PoppinsBold", // fixed font name
      fontSize: 12,
      color: "#000000",
    },
  
    viewAll: {
      fontFamily: "PoppinsSemiBold",
      color: "#681ABB",
      fontSize: 10,
    },
  
    Card: {
      marginTop: 12,
      backgroundColor: "#FFFFFF",
      padding: 20,
      borderRadius: 15,
      shadowColor: "#00000033",
      shadowOffset: { width: 0, height: 7 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 3,
    },
  
    Header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  
    subheader: {
      marginTop: 8,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  
    title: {
      fontFamily: "PoppinsSemiBold",
      fontSize: 11,
    },
  
    price: {
      fontFamily: "MontserratSemiBold",
      fontSize: 10,
    },
  
    date: {
      fontFamily: "PoppinsRegular",
      fontSize: 9,
      color: "#777",
    },
  
    covered: {
      fontFamily: "PoppinsSemiBold",
      fontSize: 8,
      color: "#FFFFFF",
      backgroundColor: "#A7C2EB",
      paddingHorizontal: 10,
      paddingVertical: 2,
      borderRadius: 10,
      alignSelf: "flex-start", 
      overflow: "hidden",       
    },
  });