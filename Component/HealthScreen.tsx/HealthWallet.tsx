import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";


export default function HealthWallet() {
    const router = useRouter();
  
    const goBack = () => {
      router.back();
    };
  const Amount = "#500,000.00";

  return (
    <View style={styles.Container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          marginBottom: 10,
        }}
      >
       
        <Pressable onPress={goBack}>
          <Feather name="arrow-left" size={24} color="#681ABB" />
        </Pressable>
      
        <Text style={styles.health}>Health Wallet</Text>
      </View>

      <ImageBackground
        style={styles.BackgroundImage}
        source={require("../../assets/images/health background.png")}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Health Balance</Text>
          </View>

          <View style={{ marginTop: 8 }}>
            <Text style={styles.Amount}>{Amount}</Text>
          </View>

          <View style={styles.Actions}>
            {/* Add Funds Button */}
            <TouchableOpacity
              style={[styles.actionBtn1, { flex: 1, marginRight: 6 }]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Feather
                  name="plus"
                  size={20}
                  color="#fff"
                  style={{ marginRight: 4 }}
                />
                <Text style={styles.actionText1}>Add Funds</Text>
              </View>
            </TouchableOpacity>

            {/* Pay Bill Button */}
            <TouchableOpacity
              style={[styles.actionBtn2, { flex: 1, marginLeft: 6 }]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.actionText2}>Pay Bill</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 16,
  },
  health:{
    color: "#681ABB",
    fontFamily: "PoppinsSemiBold",
    fontSize: 12,
    fontWeight: "600",

  },

  BackgroundImage: {
    height: 160,
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },


  content: {
    padding: 23,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 10,
    color: "#E8DAF6",
  },

  Amount: {
    fontFamily: "MontserratBold",
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  Actions: {
    marginTop: 18,
    paddingHorizontal: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  actionBtn1: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#9155D2",
    borderRadius: 10,
  },

  actionBtn2: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },

  actionText1: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "PoppinsBold",
  },

  actionText2: {
    color: "#9155D2",
    fontSize: 14,
    fontFamily: "PoppinsBold",
  },
});
