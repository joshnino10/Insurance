import {
    Pressable,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
  } from "react-native";
  import React, { useState } from "react";
  import MaterialIcons from "@expo/vector-icons/MaterialIcons";
  
  export default function PaymentMethod() {
    const [paymentMethod, setPaymentMethod] = useState("Card");
    const [isEditing, setIsEditing] = useState(false);
  
    const options = ["Card", "Bank Transfer", "PayPal"];
  
    const handleEditPress = () => {
      if (isEditing) {
        console.log("Saved payment method:", paymentMethod);
      }
      setIsEditing(!isEditing);
    };
  
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.row}>
            <MaterialIcons name="payment" size={20} color="#29A251" />
            <Text style={styles.title}>Payment Method</Text>
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
          {isEditing ? (
            // EDIT MODE
            <View style={styles.optionsContainer}>
              {options.map((option) => {
                const isSelected = paymentMethod === option;
  
                return (
                  <TouchableOpacity
                    key={option}
                    style={[
                      styles.optionButton,
                      isSelected && styles.selectedOption,
                    ]}
                    onPress={() => setPaymentMethod(option)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        isSelected && styles.selectedOptionText,
                      ]}
                    >
                      {option}
                    </Text>
  
                    {isSelected && (
                      <MaterialIcons
                        name="check-circle"
                        size={16}
                        color="#fff"
                        style={{ marginLeft: 6 }}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : (
            // VIEW MODE
            <View style={styles.optionsContainer}>
              {paymentMethod === "Card" && (
                <View style={styles.cardRow}>
                  <View style={styles.cardInfo}>
                    <Image
                      style={styles.cardImage}
                      source={require("../../assets/images/visa.png")}
                    />
                    <View>
                      <Text style={styles.cardText}>
                        Visa •••• 4242
                      </Text>
                      <Text style={styles.cardSubText}>
                        Expires 09/26
                      </Text>
                    </View>
                  </View>
  
                  <Pressable>
                    <Image
                      style={styles.deleteIcon}
                      source={require("../../assets/images/delete.png")}
                    />
                  </Pressable>
                </View>
              )}
  
              {paymentMethod === "Bank Transfer" && (
                <Text style={styles.methodText}>
                  Bank Transfer Selected
                </Text>
              )}
  
              {paymentMethod === "PayPal" && (
                <Text style={styles.methodText}>
                  PayPal Selected
                </Text>
              )}
            </View>
          )}
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
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 7 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
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
      fontFamily: "PoppinsSemiBold",
      fontSize: 12,
      fontWeight: "600",
    },
  
    editText: {
      fontFamily: "PoppinsBold",
      color: "#1A934E",
      fontWeight: "600",
      fontSize: 12,
    },
  
    divider: {
      width: "100%",
      height: 1,
      backgroundColor: "#EFF0EF",
      marginTop: 12,
    },
  
    infoBox: {
      marginTop: 10,
      backgroundColor:'#E9E9E9',
      paddingHorizontal:10,
      paddingVertical:8,
      borderRadius:20
    },
  
    optionsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 10,
      alignItems: "center",
      justifyContent: "space-between",
    },
  
    optionButton: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#E0E0E0",
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 12,
    },
  
    selectedOption: {
      backgroundColor: "#1A934E",
      borderColor: "#1A934E",
    },
  
    optionText: {
      fontFamily: "PoppinsMedium",
      fontSize: 12,
      color: "#000",
    },
  
    selectedOptionText: {
      color: "white",
      fontWeight: "600",
    },
  
    cardRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
  
    cardInfo: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
  
    cardImage: {
      width: 42,
      height: 36,
      borderRadius:10
    },
  
    cardText: {
      fontFamily: "PoppinsBold",
      fontSize: 12,
    },
  
    cardSubText: {
      fontFamily: "PoppinsMedium",
      fontSize: 8,
      color: "#000000",
    },
  
    deleteIcon: {
      width: 18,
      height: 18,
    },
  
    methodText: {
      fontFamily: "PoppinsMedium",
      fontSize: 12,
      color: "#333",
    },
  });