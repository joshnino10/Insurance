import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';

export default function MonthlySummary() {

  const monthlySummary = [
    {
      id: '1',
      icon: 'arrow-down-left',
      title: 'Money in',
      amount: 300.0,
      color: '#1A934E',
      bgColor: '#D0E2FF',
      iconBg: '#DCFCE7',     // light green
      iconColor: '#16A34A',  // green
    },
    {
      id: '2',
      icon: 'arrow-up-right',
      title: 'Money out',
      amount: 300.0,
      color: '#000000',
      bgColor: '#D0E2FF',
      iconBg: '#CCDCF4',     
      iconColor: '#1A48BB', 
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Monthly Summary</Text>

      <View style={styles.cardsContainer}>
        {monthlySummary.map(item => (
          <View
            key={item.id}
            style={[styles.card, { backgroundColor: item.bgColor }]}
          >
            {/* Top Row */}
            <View style={styles.row}>
              <View
                style={[
                  styles.iconContainer,
                  { backgroundColor: item.iconBg },
                ]}
              >
                <Feather
                  name={item.icon}
                  size={14}
                  color={item.iconColor}
                />
              </View>

              <Text style={styles.title}>{item.title}</Text>
            </View>

            {/* Amount */}
            <Text style={[styles.amount, { color: item.color }]}>
              ${item.amount.toFixed(2)}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  headerText: {
    fontFamily: 'PoppinsBold',
    fontSize: 14,
    marginBottom: 12,
  },
  cardsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  card: {
   paddingHorizontal:16,
   paddingVertical:8,
    borderRadius: 12,
    
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'PoppinsMedium',
    fontSize: 12,
  },
  amount: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 10,
    marginTop: 10,
    textAlign:'center'
  },
});