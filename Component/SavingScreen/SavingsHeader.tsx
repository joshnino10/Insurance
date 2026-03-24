import React from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";

export default function SavingsHeader() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <View style={styles.Container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Pressable onPress={goBack}>
          <Feather name="arrow-left" size={24} color="#1A48BB" />
        </Pressable>
        <Text style={styles.savingPlan}>Savings Plans</Text>
      </View>

     





    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 16,
  },
  savingPlan: {
    color: "#1A48BB",
    fontFamily: "PoppinsSemiBold",
    fontSize: 12,
    fontWeight: "600",
  },
});
