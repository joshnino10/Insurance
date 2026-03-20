import CustomButton from "@/Component/CustomButton/CustomButton";
import CustomInput from "@/Component/CustomInput/CustomInput";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Platform,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
  
  export default function Signup() {
    const router = useRouter();
  
    // Form states
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    // Error states
    const [fullNameError, setFullNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
  
    // Checkbox
    const [agreed, setAgreed] = useState(false);
  
    // Navigation
    const goToLogin = () => {
      router.push("/");
    };
  
    // Validators
    const validateFullName = (value: string) => {
      if (!value) setFullNameError("Full Name is required");
      else setFullNameError("");
    };
  
    const validateEmail = (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) setEmailError("Email is required");
      else if (!emailRegex.test(value)) setEmailError("Enter a valid email");
      else setEmailError("");
    };
  
    const validatePhone = (value: string) => {
      const phoneRegex = /^[0-9]{10,15}$/;
      if (!value) setPhoneError("Phone number is required");
      else if (!phoneRegex.test(value))
        setPhoneError("Enter a valid phone number (10-15 digits)");
      else setPhoneError("");
    };
  
    const validatePassword = (value: string) => {
      if (!value) setPasswordError("Password is required");
      else if (value.length < 8)
        setPasswordError("Password must be at least 8 characters");
      else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value))
        setPasswordError("Password must contain a special character");
      else setPasswordError("");
    };
  
    const validateConfirmPassword = (value: string) => {
      if (!value) setConfirmPasswordError("Confirm Password is required");
      else if (value !== password) setConfirmPasswordError("Passwords do not match");
      else setConfirmPasswordError("");
    };
  
    // Handlers
    const handleFullNameChange = (text: string) => {
      setFullName(text);
      validateFullName(text);
    };
  
    const handleEmailChange = (text: string) => {
      const formatted = text.trim().toLowerCase();
      setEmail(formatted);
      validateEmail(formatted);
    };
  
    const handlePhoneChange = (text: string) => {
      const formatted = text.replace(/[^0-9]/g, "");
      setPhone(formatted);
      validatePhone(formatted);
    };
  
    const handlePasswordChange = (text: string) => {
      setPassword(text);
      validatePassword(text);
    };
  
    const handleConfirmPasswordChange = (text: string) => {
      setConfirmPassword(text);
      validateConfirmPassword(text);
    };
  
    // Password rules for hints
    const getPasswordRules = (pass: string) => ({
      minLength: pass.length >= 8,
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
    });
  
    const handleSubmit = () => {
      validateFullName(fullName);
      validateEmail(email);
      validatePhone(phone);
      validatePassword(password);
      validateConfirmPassword(confirmPassword);
  
      if (
        !fullNameError &&
        !emailError &&
        !phoneError &&
        !passwordError &&
        !confirmPasswordError &&
        fullName &&
        email &&
        phone &&
        password &&
        confirmPassword &&
        agreed
      ) {
        console.log("Signup Data:", { fullName, email, phone, password });
        // 👉 Connect to API here
      } else if (!agreed) {
        alert("You must agree to the terms to continue.");
      }
    };
  
    return (
      <SafeAreaView style={styles.SafeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={styles.page}>
          <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
            <View style={styles.container}>
              <Text style={styles.welcomeText}>Create an Account</Text>
              <Text style={styles.descText}>
                Sign up to access your health savings and insurance.
              </Text>
            </View>
  
            <View style={{ marginTop: 20, width: "100%" }}>
              {/* Full Name */}
              <CustomInput
                label="Full Name"
                placeholder="John Doe"
                value={fullName}
                onChangeText={handleFullNameChange}
                error={fullNameError}
              />
  
              {/* Email */}
              <CustomInput
                leftIcon="mail-outline"
                label="Email Address"
                placeholder="yourname@example.com"
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
                error={emailError}
                autoCapitalize="none"
              />
  
              {/* Phone Number */}
              <CustomInput
                leftIcon="call-outline"
                label="Phone Number"
                placeholder="+234 800 000 0000"
                value={phone}
                onChangeText={handlePhoneChange}
                keyboardType="phone-pad"
                error={phoneError}
              />
  
              {/* Password */}
              <CustomInput
                leftIcon="lock-closed-outline"
                label="Password"
                placeholder="Create a password"
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry
                error={passwordError}
              />
  
              {/* Password Rules */}
              <View style={{ marginTop: 5, marginLeft: 5, marginBottom:25 }}>
                {(() => {
                  const rules = getPasswordRules(password);
                  return (
                    <>
                      <Text style={[styles.ruleText, rules.minLength && styles.ruleValid]}>
                        • At least 8 characters
                      </Text>
                      <Text style={[styles.ruleText, rules.hasSpecial && styles.ruleValid]}>
                        • Contains a special character
                      </Text>
                    </>
                  );
                })()}
              </View>
  
              {/* Confirm Password */}
              <CustomInput
                leftIcon="lock-closed-outline"
                label="Confirm Password"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChangeText={handleConfirmPasswordChange}
                secureTextEntry
                error={confirmPasswordError}
              />
  
              {/* Checkbox */}
              <Pressable
                style={styles.checkboxContainer}
                onPress={() => setAgreed(!agreed)}
              >
                <View style={[styles.checkbox, agreed && styles.checked]}>
                  {agreed && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.checkboxText}>
                  By continuing you agree to our{" "}
                  <Text style={styles.spanText}>Terms of Services</Text> and{" "}
                  <Text style={styles.spanText}>Privacy Policy</Text>
                </Text>
              </Pressable>
  
              {/* Sign Up Button */}
              <CustomButton
                title="Sign Up"
                textColor="#FFFFFF"
                onPress={handleSubmit}
              />
            </View>
  
            <View style={styles.SignUpContainer}>
              <Text style={styles.dontHave}>Already have an account?</Text>
              <Pressable onPress={goToLogin}>
                <Text style={styles.SignUp}>Login</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    SafeArea: {
      flex: 1,
      backgroundColor: "#D9D9D900",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: Platform.OS === "android" ? 10 : 0,
    },
    page: {
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      alignItems: "center",
    },
    welcomeText: {
      marginTop:10,
      fontSize: 24,
      fontWeight: "600",
    },
    descText: {
      marginTop: 5,
      fontSize: 12,
      color: "#666",
    },
    checkboxContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 15,
    },
    checkbox: {
      width: 17,
      height: 17,
      borderWidth: 1,
      borderRadius: 3,
      marginRight: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    checked: {
      backgroundColor: "#0A3D62",
    },
    checkmark: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "bold",
    },
    checkboxText: {
      flex: 1,
      fontSize: 12,
      color: "#999797",
    },
    spanText: {
      color: "#681ABB",
      fontWeight: "500",
    },
    SignUpContainer: {
      flexDirection: "row",
      alignSelf: "center",
      gap: 5,
      marginTop: 30,
    },
    dontHave: {
      fontSize: 12,
      color: "#666",
    },
    SignUp: {
      fontSize: 12,
      color: "#681ABB",
      fontWeight: "500",
    },
    ruleText: {
      fontSize: 12,
      color: "#999",
    },
    ruleValid: {
      color: "#0A3D62", // highlight when rule satisfied
    },
  });