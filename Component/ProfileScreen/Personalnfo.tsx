import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import MaterialIcons from "@expo/vector-icons/MaterialIcons";
  
  export default function PersonalInfo() {
    const [fullName, setFullName] = useState("Favour Ben");
    const [email, setEmail] = useState("favourben46@gmail.com");
    const [number, setNumber] = useState("+234 70 4227 4890");
    const [isEditing, setIsEditing] = useState(false);
  
    const handleEditPress = () => {
      if (isEditing) {
        // 👉 simulate save (you can call API here)
        console.log("Saved:", { fullName, email, number });
      }
      setIsEditing(!isEditing);
    };
  
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.row}>
            <MaterialIcons name="person-outline" size={20} color="#29A251" />
            <Text style={styles.title}>Personal Info</Text>
          </View>
  
          <Pressable onPress={handleEditPress}>
            <Text style={styles.editText}>
              {isEditing ? "Save" : "Edit"}
            </Text>
          </Pressable>
        </View>
  
        <View style={styles.divider} />
  
        {/* Content */}
        <View style={styles.infoBox}>
          {/* Full Name */}
          <View style={styles.field}>
            <Text style={styles.label}>FULL NAME</Text>
            {isEditing ? (
              <TextInput
                value={fullName}
                onChangeText={setFullName}
                style={styles.input}
                placeholder="Enter full name"
              />
            ) : (
              <Text style={styles.value}>{fullName}</Text>
            )}
          </View>
  
          {/* Email */}
          <View style={styles.field}>
            <Text style={styles.label}>EMAIL ADDRESS</Text>
            {isEditing ? (
              <TextInput
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={styles.input}
                placeholder="Enter email"
              />
            ) : (
              <Text style={styles.value}>{email}</Text>
            )}
          </View>
  
          {/* Phone */}
          <View style={styles.field}>
            <Text style={styles.label}>PHONE NUMBER</Text>
            {isEditing ? (
              <TextInput
                value={number}
                onChangeText={setNumber}
                keyboardType="phone-pad"
                style={styles.input}
                maxLength={11}
                placeholder="Enter phone number"
              />
            ) : (
              <Text style={styles.value}>{number}</Text>
            )}
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
      gap: 5,
    },
  
    title: {
      fontFamily:'PoppinsSemiBold',
      fontSize: 12,
      fontWeight: "600",
    },
  
    editText: {
      fontFamily:'PoppinsBold',
      color: "#1A934E",
      fontWeight: "600",
      fontSize:12
    },
  
    divider: {
      width: "100%",
      height: 1,
      backgroundColor: "#EFF0EF",
      marginTop: 12,
    },
  
    infoBox: {
      marginTop: 10,
    },
  
    field: {
      marginTop: 17,
    },
  
    label: {
      fontFamily:'PoppinsBold',
      fontSize: 10,
      color: "#919794",

    },
  
    value: {
      fontFamily:'PoppinsMedium',
      fontSize: 12,
      fontWeight: "500",
      marginTop: 5,
    },
  
    input: {
      borderBottomWidth: 1,
      borderBottomColor: "#E0E0E0",
      paddingVertical: 6,
      marginTop: 4,
      fontSize: 15,
    },
  });