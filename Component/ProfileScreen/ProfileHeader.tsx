import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function ProfileHeader() {
  const name = "Ben";
  const initial = name.charAt(0).toLowerCase();
  const AccountName = "favour ben"

  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
   
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      alert("Permission is required to access gallery");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.profile}>Your Profile</Text>
      <Text style={styles.manage}>Manage your health identity.</Text>

     
      <Pressable onPress={pickImage}>
        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <Text style={styles.avatarText}>{initial}</Text>
            )}
          </View>

          <View style={styles.cameraWrapper}>
            <Ionicons name="camera" size={18} color="#2E7D32" />
          </View>
        </View>
      </Pressable>

      <Text style={styles.AccountName}>{AccountName}</Text>
    </View>
  );
}

const SIZE = 120;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  outerCircle: {
    marginTop:20,
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  innerCircle: {
    width: SIZE - 12,
    height: SIZE - 12,
    borderRadius: (SIZE - 12) / 2,
    backgroundColor: "#EDFCF2",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", 
  },

  image: {
    width: "100%",
    height: "100%",
  },

  avatarText: {
    fontSize: 48,
    fontWeight: "600",
    color: "#000",
  },

  cameraWrapper: {
    position: "absolute",
    bottom: 4,
    right: 4,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },

  profile: {
    fontFamily: "PoppinsSemiBold",
    fontSize: 16,
    marginTop: 15,
    fontWeight: "600",
  },

  manage: {
    fontFamily: "PoppinsRegular",
    color: "#707070",
    marginTop: 5,
    fontSize: 12,
  },

  AccountName:{
    fontFamily: "PoppinsSemiBold",
    fontSize:16,
    marginTop:9
   
  }


});