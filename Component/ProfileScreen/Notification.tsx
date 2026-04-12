import {
    Pressable,
    StyleSheet,
    Text,
    View,
  
  } from "react-native";
  import React from "react";
  import MaterialIcons from "@expo/vector-icons/MaterialIcons";
  import Ionicons from '@expo/vector-icons/Ionicons';

  
  export default function Notification() {
   
  
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.row}>
          <Ionicons name="notifications-outline" size={24} color="#29A251" />
            <Text style={styles.title}>Notification</Text>
          </View>
        </View>
  
        <View style={styles.divider} />
  
      
        <View style={styles.infoBox}>
        
          <Pressable style={styles.rowItem}>
            <View>
              <Text style={styles.label}>Other Notification</Text>
              <Text style={styles.subText}>
              Control alerts and reminders
              </Text>
            </View>
  
            <MaterialIcons
              name="chevron-right"
              size={26}
              color="#B0B0B0"
            />
          </Pressable>
          <Pressable style={styles.rowItem}>
            <View>
              <Text style={styles.label}>Help & Support</Text>
              <Text style={styles.subText}>
              Get help when you need it
              </Text>
            </View>
  
            <MaterialIcons
              name="chevron-right"
              size={26}
              color="#B0B0B0"
            />
          </Pressable>
  
        
        
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      marginHorizontal: 16,
      backgroundColor: "white", 
      padding: 20,
      borderRadius: 20,
      shadowColor:'#000000',
      shadowOffset:{width:0, height:7},
      shadowOpacity:0.1,
      shadowRadius:4,
      elevation:3,
    },
  
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  
    row: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
  
    title: {
      fontFamily: "PoppinsSemiBold",
      fontSize: 14,
    },
  
    divider: {
      width: "100%",
      height: 1,
      backgroundColor: "#E5E5E5",
      marginTop: 12,
    },
  
    infoBox: {
      marginTop: 10,
    },
  
    rowItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 18,
    },
  
    label: {
        fontFamily:'PoppinsBold',
        fontSize: 10,
        color: "#919794",
    },
  
    subText: {
      fontFamily:'PoppinsMedium',
      fontSize: 12,
      fontWeight: "500",
      marginTop: 5,
    },
  });