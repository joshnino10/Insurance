import React, { useState } from "react";
import { StyleSheet, Switch, Text, View, Image } from "react-native";

export default function Actions() {
  // Only need state for the first action
  const [isAutoSaveEnabled, setIsAutoSaveEnabled] = useState(false);

  const actions = [
    {
      id: '1',
      icon: require('../../assets/images/auto save icon.png'),
      title: 'Auto-Save Daily',
      description: 'Save $1/day automatically',
      hasSwitch: true,
    },
    {
      id: '2',
      icon: require('../../assets/images/emergency icon.png'),
      title: 'Emergency Withdrawal',
      description: 'Instant transfer to bank',
      hasSwitch: false,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.actionText}>Actions</Text>

      {actions.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={item.icon} style={styles.icon} />
            <View style={styles.textWrapper}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            {item.hasSwitch && (
              <Switch
                value={isAutoSaveEnabled}
                style={{ transform: [{ scale: 0.7 }] }}
                onValueChange={() => setIsAutoSaveEnabled(!isAutoSaveEnabled)}
              />
            )}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  actionText: {
    fontFamily: 'PoppinsBold',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  card: {
    marginVertical: 8,
    padding:16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    shadowColor:'#00000033',
    shadowOffset:{width: 0, height:6},
    shadowOpacity:0.3,
    shadowRadius:4,
    
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontFamily: 'PoppinsSemiBold',
    fontWeight:'600',
    marginBottom:4,
    fontSize: 12,
  },
  description: {
    fontFamily: 'PoppinsRegular',
    fontSize: 10,
    color: '#555',
    fontWeight:'400',
  },
});