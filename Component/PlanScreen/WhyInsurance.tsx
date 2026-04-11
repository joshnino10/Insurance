import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function WhyInsurance() {
  const why = [
    {
      id: "1",
      icon: require("../../assets/images/affordable icon.png"),
      title: "Affordable",
      subtitle:
        "Plans start as low as $5/month - less than a coffee! Pay only for what you need.",
    },

    {
      id: "2",
      icon: require("../../assets/images/transparent icon.png"),
      title: "Transparent",
      subtitle:
        "No confusing jargon. We clearly show what's covered and what's not.",
    },
  ];

  return (
    <View style={styles.Container}>
      <Text style={styles.why}>Why Micro-Insurance?</Text>

      {why.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.row}>
            <Image style={styles.icon} source={item.icon} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      ))}
      
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 16,
    marginTop: 10,
  },

  why: {
    fontFamily: "PoppinsBold",
    fontSize: 12,
    fontWeight: "700",
  },

  card: {
    marginTop: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 20,

    backgroundColor: "#ECF1FA",
  },
  row: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  icon: {
    width: 12,
    height: 12,
  },

  title: {
    fontFamily: "PoppinsMedium",
    fontSize: 13,
  },

  subtitle: {
    fontFamily: "PoppinsRegular",
    marginTop: 5,
    color: "#707070",
    fontSize: 11,
  },
});
