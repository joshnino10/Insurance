import React from 'react'
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Feather from '@expo/vector-icons/Feather';

export default function HealthBalance() {

  const Amount = '#500,000.00'

  return (
    <View style={styles.Container}>
      <ImageBackground
        style={styles.BackgroundImage}
        source={require('../../assets/images/health background.png')}
        resizeMode="cover"
      >
        <View style={styles.content}>

          <View style={styles.header}>
            <Text style={styles.title}>Health Balance</Text>
            <TouchableOpacity >

                <Feather name="arrow-right" size={24} color="#E8DAF6" />
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 8 }}>
            <Text style={styles.Amount}>{Amount}</Text>
          </View>

          <View style={styles.Actions}>

            {/* Add Funds Button */}
            <TouchableOpacity style={styles.actionBtn1}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Feather
                  name="plus"
                  size={20}
                  color="#fff"
                  style={{ marginRight: 4 }}
                />
                <Text style={styles.actionText1}>Add Funds</Text>
              </View>
            </TouchableOpacity>

            {/* Withdraw Button */}
            <TouchableOpacity style={styles.actionBtn2}>
              <Text style={styles.actionText2}>Withdraw</Text>
            </TouchableOpacity>

          </View>

        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 20,
    paddingHorizontal: 16,
  },

  BackgroundImage: {
    height: 160,
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
  },

  content: {
    padding: 23
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 10,
    color: '#E8DAF6',
  },

  Amount: {
    fontFamily: 'MontserratBold',
    fontSize: 24,
    fontWeight:'700',
    color: '#FFFFFF'
  },

  Actions: {
    marginTop: 10,
    paddingHorizontal:16,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  actionBtn1: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#9155D2',
    borderRadius: 10,
  },

  actionBtn2: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },

  actionText1: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'PoppinsBold',
  },

  actionText2: {
    color: '#9155D2',
    fontSize: 14,
    fontFamily: 'PoppinsBold',
  },
});