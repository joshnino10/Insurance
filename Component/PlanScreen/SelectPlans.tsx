import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { plan, Plan } from "./Plans";
import { Ionicons } from "@expo/vector-icons";

export default function SelectPlans() {
  const [plansState, setPlansState] = useState<Plan[]>(plan);

  const handleSelect = (id: string) => {
    const updatedPlans = plansState.map((item) => ({
      ...item,
      isSelected: item.id === id,
    }));
    setPlansState(updatedPlans);
  };

  return (
    <View style={styles.container}>
      {plansState.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[styles.card, item.isSelected && styles.selectedCard]}
          onPress={() => handleSelect(item.id)}
          activeOpacity={0.9}
        >
          <View style={styles.headerRow}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>
              #{item.price.toLocaleString()}
              <Text style={styles.duration}>{item.duration}</Text>
            </Text>
          </View>

          <Text style={styles.type}>{item.planType}</Text>

          <View style={styles.limitRow}>
            <Text style={styles.limit}>Coverage Limit</Text>
            <Text style={styles.amount}>
              #{item.coverageLimit.toLocaleString()}
            </Text>
          </View>
          <View style={styles.divider} />

          <View style={styles.details}>
            {item.benefits.map((benefit, index) => (
              <View key={index} style={styles.benefitRow}>
                <Image
                  style={{ width: 16, height: 16 }}
                  source={require("../../assets/images/mark.png")}
                />
                <Text style={styles.benefitText}>{benefit}</Text>
              </View>
            ))}
          </View>

          {/* Inner button with conditional background color */}
          <TouchableOpacity
            onPress={() => handleSelect(item.id)}
            style={{
              marginTop: 10,
              paddingVertical: 10,
              paddingHorizontal: 12,
              borderRadius: 10,
              backgroundColor: item.isSelected ? "#8ED5A5" : "#000000",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: item.isSelected ? "#D8FAE3" : "#FFFFFF",
                fontWeight: "700",
                fontFamily: 'PoppinsBold',
                fontSize:12,

              }}
            >
              {item.isSelected ? "CURRENT PLAN" : "SELECT PLAN"}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#00000040",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  limitRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divider: {
    marginVertical: 10,
    height: 1,
    backgroundColor: "#EFF0EF",
  },
  selectedCard: {
    borderWidth: 1,
    backgroundColor: "#EDFCF2",
    borderColor: "#29A251",
  },

  title: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 14,
    fontWeight: "bold",
  },

  type: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 10,
    color: "#707070",
    marginBottom: 10,
  },

  price: {
    fontFamily: "MontserratSemiBold",
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 6,
    color: "#1A934E",
  },
  duration: {
    fontFamily: "MontserratMedium",
    color: "#000000",
    fontSize: 12,
    fontWeight: "500",
  },
  limit: {
    fontFamily: "PoppinsMedium",
    color: "#707070",
    fontSize: 12,
    marginBottom: 6,
  },
  amount: {
    fontFamily: "MontserratSemiBold",
    fontSize: 10,
    fontWeight: "600",
  },
  details: {
    marginTop: 6,
    gap: 4,
  },
  benefitRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  benefitText: {
    fontFamily: "PoppinsSemiBold",
    color: "#707070",
    fontSize: 10,
    marginLeft: 6,
  },
});
