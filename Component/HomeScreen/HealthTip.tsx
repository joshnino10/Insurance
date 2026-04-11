import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function HealthTip() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        
        <View style={styles.row}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/light icon.png')}
          />
          <Text style={styles.title}>Health Tip</Text>
        </View>

        <Text style={styles.tipText}>
          Save $25 by scheduling your annual preventive check-up this month.
          It’s 100% covered by your plan.
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 10,
  },

  content: {
    padding: 15,
    backgroundColor: "#ECF1FA",
    borderRadius: 12,
  },

  row: {
    flexDirection: 'row',
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
  },

  icon: {
    width: 18,  
    height: 18,
  },

  title: {
    fontFamily: 'PoppinsMedium',
    fontSize: 13,
  },

  tipText: {
    fontSize: 12,
    // color: '#333',
    lineHeight: 18, 
  },
});