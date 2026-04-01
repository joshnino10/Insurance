import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Switch,
  } from "react-native";
  import React, { useState } from "react";
  import MaterialIcons from "@expo/vector-icons/MaterialIcons";
  import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
  
  export default function Security() {
    const [biometricLogin, setBiometricLogin] = useState(false);
  
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.row}>
          <MaterialCommunityIcons name="shield-outline" size={20} color="#29A251" />
            <Text style={styles.title}>Security</Text>
          </View>
        </View>
  
        <View style={styles.divider} />
  
      
        <View style={styles.infoBox}>
        
          <Pressable style={styles.rowItem}>
            <View>
              <Text style={styles.label}>Change Password</Text>
              <Text style={styles.subText}>
                Update your account access
              </Text>
            </View>
  
            <MaterialIcons
              name="chevron-right"
              size={26}
              color="#B0B0B0"
            />
          </Pressable>
  
          {/* Biometric Login */}
          <View style={styles.rowItem}>
            <View>
              <Text style={styles.label}>Biometric Login</Text>
              <Text style={styles.subText}>
                Use FaceID or Fingerprint
              </Text>
            </View>
  
            <Switch
              value={biometricLogin}
              onValueChange={setBiometricLogin}
              style={{ transform: [{ scale: 0.7 }] }}
              trackColor={{ false: "#E1E1E1", true: "#29A251" }}
              thumbColor="#FFFFFF"
            />
          </View>
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