import Notice from "@/Component/PlanScreen/Notice";
import PlanHeader from "@/Component/PlanScreen/PlanHeader";
import SelectPlans from "@/Component/PlanScreen/SelectPlans";
import WhyInsurance from "@/Component/PlanScreen/WhyInsurance";
import React from "react";

import { StyleSheet, Platform, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Plans() {
  return (
    <SafeAreaView style={styles.SafeArea}>
       <StatusBar barStyle="dark-content" backgroundColor="#D9D9D900"/>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:80}}>
       <PlanHeader />
       <SelectPlans/>
       <Notice/>
       <WhyInsurance/>
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
