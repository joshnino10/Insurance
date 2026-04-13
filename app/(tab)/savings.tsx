import Actions from "@/Component/SavingScreen/Actions";
import ActiveGoals from "@/Component/SavingScreen/ActiveGoals";
import SavingsHeader from "@/Component/SavingScreen/SavingsHeader";
import SavingTips from "@/Component/SavingScreen/SavingTips";
import TotalBalance from "@/Component/SavingScreen/TotalBalance";
import React from "react";
import { StyleSheet,  Platform, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Savings() {
  return (
    <SafeAreaView style={styles.SafeArea}>
       <StatusBar barStyle="dark-content" backgroundColor="#D9D9D900"/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >

        <SavingsHeader/>
        <TotalBalance/>
        <ActiveGoals/>
        <Actions/>
        <SavingTips/>




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
