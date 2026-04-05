import BotHeader from "@/Component/BotScreen/BotHeader";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Image, Platform, View } from "react-native";

export default function TabLayout() {
  const router = useRouter()
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#681ABB",
        tabBarInactiveTintColor: "#707070",

        tabBarStyle: {
          position: "absolute",
          height: Platform.OS === "ios" ? 75 : 70,
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        },

        tabBarIconStyle: {
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 2,
        },

        tabBarLabelStyle: {
          fontFamily: "PoppinsSemiBold",
          fontSize: 10,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          header: () => <BotHeader />,
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/home icon Active.png")
                  : require("../../assets/images/home icon inactive.png")
              }
              style={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="savings"
        options={{
          title: "Savings",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/saving icon Active.png")
                  : require("../../assets/images/saving icon inactive.png")
              }
              style={styles.icon}
            />
          ),
        }}
      />


<Tabs.Screen
  name="chat"
  options={{
    headerShown:true,
    header:()=><BotHeader/>,
    tabBarLabel: () => null,
    tabBarIcon: () => (
      <View >
        <Image
          source={require("../../assets/images/Chat icon .png")}
          style={styles.chatIcon}
        />
      </View>
    ),
  }}


/>

      <Tabs.Screen
        name="plans"
        options={{
          title: "Plans",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/plans icon active.png")
                  : require("../../assets/images/plans icon inactive.png")
              }
              style={styles.icon}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("../../assets/images/profile icon active.png")
                  : require("../../assets/images/profile icon inactive.png")
              }
              style={styles.icon}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },

  chatIcon: {
    width: 56,
    height: 56,
    position: "relative",
    bottom: 11,
  },
});
