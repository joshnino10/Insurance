
import Logout from "@/Component/ProfileScreen/Logout";
import Notification from "@/Component/ProfileScreen/Notification";
import PaymentMethod from "@/Component/ProfileScreen/PaymentMethod";
import Personalnfo from "@/Component/ProfileScreen/Personalnfo";
import ProfileHeader from "@/Component/ProfileScreen/ProfileHeader";
import Security from "@/Component/ProfileScreen/Security";
import React from "react";
import { Platform, ScrollView, StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="white"  />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <ProfileHeader/>
        <Personalnfo/>
        <Security/>
        <PaymentMethod/>
        <Notification/>
        <Logout/>
       
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
