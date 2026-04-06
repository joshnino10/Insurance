import PlanHeader from "@/Component/PlanScreen/PlanHeader";
import SelectPlans from "@/Component/PlanScreen/SelectPlans";
import React from "react";
import { StyleSheet, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Plans() {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <ScrollView contentContainerStyle={{paddingBottom:80}}>
       <PlanHeader />
       <SelectPlans/>
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
