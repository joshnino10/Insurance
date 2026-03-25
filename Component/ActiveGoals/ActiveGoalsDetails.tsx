import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { goals } from "./Goals";


type Goal = {
  id: string;
  Title: string;
  Monthly: string;
  Saved: number;
  Color: string
  Target: number;
  icon: ImageSourcePropType;
  LastSeen: string
};


export default function ActiveGoalsDetails() {
  return (
    <View>
    
      <View style={styles.row}>
        <Text style={styles.activeText}>Active Goals</Text>
        <Pressable>
          <Text style={styles.newGoals}>+ New Goals</Text>
        </Pressable>
      </View>

    
      {(goals as Goal[]).map((item) => {
        const progress = item.Saved / item.Target;

        return (
          <TouchableOpacity key={item.id} style={styles.Card}>
          
            <View style={styles.topRow}>
            
              <View style={styles.left}>
                <Image style={styles.icon} source={item.icon} />

                <View>
                  <Text style={styles.title}>{item.Title}</Text>
                  <Text style={styles.monthly}>{item.Monthly}</Text>
                </View>
              </View>

            
              <View style={styles.right}>
                <Text style={styles.amount}>
                  #{(item.Saved / 1000).toFixed(0)}k
                </Text>
                <Text style={styles.target}>
                  of #{(item.Target / 1000).toFixed(0)}k
                </Text>
              </View>
            </View>

          
            <View style={styles.progressBg}>
              <View
                style={[
                  styles.progressFill,{backgroundColor: item.Color},
                  { width: `${progress * 100}%` },
                ]}
              />
            </View>

          <View style={{flexDirection:'row',alignItems:'center',gap:5}}>

            <Text style={styles.bottomText}>
              {Math.round(progress * 100)}% complete
            </Text>
            <Text style={styles.bottomText}>{item.LastSeen}</Text>
          </View>
            
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  activeText: {
    fontFamily: "PoppinsBold",
    fontSize: 14,
  },

  newGoals: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 10,
    color: "#0C419A",
  },

  Card: {
    marginVertical: 10,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  icon: {
    width: 36,
    height: 36,
  },

  title: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 14,
    fontWeight:'600',
  },

  monthly: {
    fontFamily:'PoppinsRegular',
    fontSize: 10,
    marginTop:3,
    color: "#000000",
  },

  right: {
    alignItems: "flex-end",
  },

  amount: {
    fontFamily: "MontserratMedium",
    fontSize: 11,
    fontWeight:'500',

  },

  target: {
    fontFamily: "MontserratRegular",
    marginTop:3,
    fontSize: 12,
    color: "#000000",
    fontWeight:'400',
  },

  progressBg: {
    height: 6,
    width: "100%",
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#0C419A",
    borderRadius: 10,
  },

  bottomText: {
    fontFamily:'PoppinsRegular',
    fontSize: 11,
    marginTop: 8,
  },
});