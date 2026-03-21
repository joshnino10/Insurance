import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

type CustomInputProps = {
  label?: string;
  error?: string;
  leftIcon?: keyof typeof Ionicons.glyphMap;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightIconPress?: () => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
} & TextInputProps;

export default function CustomInput({
  label,
  error,
  leftIcon,
  rightIcon,
  onRightIconPress,
  secureTextEntry,
  containerStyle,
  inputStyle,
  ...props
}: CustomInputProps) {
  const [isSecure, setIsSecure] = useState<boolean>(!!secureTextEntry);

  const handleRightPress = () => {
    if (secureTextEntry) {
      setIsSecure(!isSecure);
    } else if (onRightIconPress) {
      onRightIconPress();
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      
      {/* Label */}
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={[styles.inputContainer, error && styles.inputError]}>
        
        {/* Left Icon */}
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={20}
            color="#666"
            style={styles.leftIcon}
          />
        )}

        {/* Input */}
        <TextInput
          style={[styles.input, inputStyle]}
          placeholderTextColor="#999"
          secureTextEntry={isSecure}
          {...props}
        />

        {/* Right Icon */}
        {(secureTextEntry || rightIcon) && (
          <TouchableOpacity onPress={handleRightPress}>
            <Ionicons
              name={
                secureTextEntry
                  ? isSecure
                    ? "eye-off"
                    : "eye"
                  : (rightIcon as keyof typeof Ionicons.glyphMap)
              }
              size={20}
              color="#666"
              style={styles.rightIcon}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Error */}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    width: "100%",
  },

  label: {
    fontFamily: 'PoppinsRegular',
    marginBottom: 15,
    fontSize: 14,
    color: "#707070",
    fontWeight: "400",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    width: '100%',
    borderColor: "#B9B9B9",
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: "#D9D9D900", 
    height: 40,
  
   
    shadowColor: '#0000',
    shadowOffset: { width: 0, height: 7 }, 
    shadowOpacity: 0.1,
    shadowRadius: 4,
  
   
    elevation: 4,
  },

  input: {
    fontFamily: 'PoppinsRegular',
    flex: 1,
    fontSize: 12,
  
  },

  leftIcon: {
    marginRight: 10,
    color: '#B3B3B3'
  },

  rightIcon: {
    marginLeft: 10,
       color: '#B3B3B3'
  },

  inputError: {
    borderColor: "red",
  },

  errorText: {
    marginTop: 4,
    color: "red",
    fontSize: 12,
  },
});