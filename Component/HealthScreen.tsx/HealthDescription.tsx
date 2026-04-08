import { StyleSheet, Image, View, Text } from "react-native";
import React from "react";

export default function HealthDescription() {
  const description = [
    {
      id: "1",
      Title: "How your Health Wallet Works",
      SubTitle:
        "Pre-fund your wallet with savings to pay for medical expenses instantly. Use it for co-pays, medications, and bills not covered by insurance.",
      Benefit: [
        "No transaction fee",
        "Instant payment to providers",
        "Track all health spending in one place",
      ],
    },
  ];

  return (
    <View style={styles.Container}>
      {description.map((item) => (
        <View key={item.id}>
          
          {/* Header */}
          <View style={styles.headerRow}>
            <Image
              style={{ width: 16, height: 16 }}
              source={require("../../assets/images/light icon.png")}
            />
            <Text style={styles.title}>{item.Title}</Text>
          </View>

          {/* Subtitle */}
          <Text style={styles.subtitle}>{item.SubTitle}</Text>

          {/* Benefits with dot */}
          <View style={styles.benefitContainer}>
            {item.Benefit.map((benefit, index) => (
              <Text key={index} style={styles.benefitText}>
                • {benefit}
              </Text>
            ))}
          </View>

        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 20,
    paddingHorizontal: 16,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  title: {
    fontFamily: "PoppinsMedium",
    fontSize: 12,
  },

  subtitle: {
    fontFamily: "PoppinsRegular",
    fontSize: 12,
    marginTop: 6,
    lineHeight:22
  },

  benefitContainer: {
    marginTop: 10,
    gap: 4,
  },

  benefitText: {
    fontFamily: "PoppinsRegular",
    fontSize: 12,
  },
});