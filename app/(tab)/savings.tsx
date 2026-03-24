import SavingsHeader from "@/Component/SavingScreen/SavingsHeader";
import React from "react";
import { StyleSheet,  Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Savings() {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >

        <SavingsHeader/>




      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "#D9D9D900",
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
});
