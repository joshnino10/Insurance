import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageSourcePropType } from 'react-native';
import { recentTransaction, Transaction } from './transaction';

export default function RecentTransaction() {
  return (
    <View style={styles.container}>
      <Text style={styles.recentText}>Recent Transaction</Text>

      {recentTransaction.map((item: Transaction) => {
        // Determine background color automatically
        const iconBgColor = item.Amount < 0 ? '#CCDCF4': '#C8E6C9'; // red-ish for expense, green-ish for income

        return (
          <TouchableOpacity key={item.id} style={styles.transactionCard}>
            <View style={[styles.icon, { backgroundColor: iconBgColor }]}>
              {React.isValidElement(item.icon) ? (
                item.icon
              ) : (
                <Image source={item.icon as ImageSourcePropType} style={{ width: 24, height: 24 }} />
              )}
            </View>

            <View style={styles.transactionInfo}>
              <Text style={styles.title}>{item.Title}</Text>
              <Text style={styles.date}>{item.Date}</Text>
            </View>

            <Text
              style={[
                styles.amount,
                { color: item.Amount < 0 ? '#000000' : '#1A934E' },
              ]}
            >
              {item.Amount < 0 ? '-' : '+'}#{Math.abs(item.Amount).toLocaleString()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingHorizontal: 16,
  },
  recentText: {
    fontFamily: 'PoppinsBold',
    fontSize: 12,
    marginBottom: 10,
  },
  transactionCard: {
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#00000033',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    paddingHorizontal: 12,
    borderRadius: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 200,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionInfo: {
    flex: 1,
  },
  title: {
    fontFamily: 'PoppinsMedium',
    fontSize: 14,
    fontWeight: '500',
  },
  date: {
    marginTop: 8,
    fontWeight: '400',
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
    color: '#000000',
  },
  amount: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 12,
  },
});