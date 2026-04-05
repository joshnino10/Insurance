import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BotHeader() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
      
        <Image
          style={styles.icon}
          source={require("../../assets/images/BOT.png")}
        />

        <View style={styles.textContainer}>
          <Text style={styles.name}>HealthBot Assistant</Text>

         
          <View style={styles.statusContainer}>
            <View style={styles.active} />
            <Text style={styles.status}>Online</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    shadowColor:'#00000040',
    shadowOffset:{width:0, height:5},
    shadowOpacity:1.5,
    shadowRadius:4
  },
  icon: {
    width: 36,
    height: 36,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  statusContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 2,
    gap: 4, 
  },
  active: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#1A934E',
  },
  status: {
    fontSize: 8,
    color: '#1A934E', 
  },
});