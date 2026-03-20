import CustomButton from "@/Component/CustomButton/CustomButton";
import CustomInput from "@/Component/CustomInput/CustomInput";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    Platform,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  // Checkbox state
  const [agreed, setAgreed] = useState<boolean>(false);

   const router = useRouter()
  
      const goToSignUp = ()=>{
        //   router.push('/signup')
      }

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) setEmailError("Email is required");
    else if (!emailRegex.test(value)) setEmailError("Enter a valid email");
    else setEmailError("");
  };

  const validatePassword = (value: string) => {
    if (!value) setPasswordError("Password is required");
    else if (value.length < 8)
      setPasswordError("Password must be at least 8 characters");
    else setPasswordError("");
  };

  const handleEmailChange = (text: string) => {
    const formatted = text.trim().toLowerCase();
    setEmail(formatted);
    validateEmail(formatted);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    validatePassword(text);
  };

  const handleSubmit = () => {
    validateEmail(email);
    validatePassword(password);
    if (!emailError && !passwordError && email && password && agreed) {
      console.log("Login Data:", { email, password });
      // 👉 Connect to API here
    } else if (!agreed) {
      alert("You must agree to the terms to continue.");
    }
  };

  return (
    <SafeAreaView style={styles.SafeArea}>
      <StatusBar barStyle='dark-content' backgroundColor='white'/>
      <View style={styles.page}>
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require("../../assets/images/app logo.png")}
            />
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.descText}>
              Sign in to access your health savings and insurance.
            </Text>
          </View>

          <View style={{ marginTop: 20, width: "100%" }}>
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

            {/* Password */}
            <CustomInput
              leftIcon="lock-closed-outline"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={handlePasswordChange}
              secureTextEntry
              error={passwordError}
            />

            <Pressable>
              <Text style={styles.forgottenText}>Forgotten Password?</Text>
            </Pressable>

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

            <CustomButton
              title="Login"
              textColor="#FFFFFF"
              onPress={handleSubmit}
            />

            <View style={styles.orContainer}>
              <View style={styles.divider} />
              <Text style={styles.orText}>or</Text>
              <View style={styles.divider} />
            </View>
          </View>

          <View style={{ marginVertical: 4, alignSelf: "center" }}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../../assets/images/gmail icon.png")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
              <Text style={styles.socialText}>Continue with Google</Text>
              <View />
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 4, alignSelf: "center" }}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../../assets/images/facebook icon.png")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
              <Text style={styles.socialText}>Continue with Facebook</Text>
              <View />
            </TouchableOpacity>
          </View>
          <View style={{ marginVertical: 4, alignSelf: "center" }}>
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require("../../assets/images/app logo.png")}
                style={styles.socialIcon}
                resizeMode="contain"
              />
              <Text style={styles.socialText}>Continue with Apple</Text>
              <View />
            </TouchableOpacity>
          </View>

          <View style={styles.SignUpContainer}>
            <Text style={styles.dontHave}>Don’t have an account?</Text>
            <Pressable onPress={goToSignUp}>
              <Text style={styles.SignUp}>Sign up</Text>
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
  logo: {
    width: 82,
    height: 77,
    marginTop: 15,
  },
  welcomeText: {
    fontSize: 24,
  },
  descText: {
    marginTop: 5,
    fontSize: 12,
  },
  forgottenText: {
    alignSelf: "flex-end",
    color: "#0A3D62",
    marginVertical: 10,
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
    fontSize: 10,
    color: "#999797",
  },
  submitBtn: {
    backgroundColor: "#0A3D62",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  spanText: {
    color: "#681ABB",
    fontWeight: "500",
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#000000",
  },

  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#666",
  },
  SignUpContainer: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 5,
    marginTop:30,
  },
  dontHave: {
    fontSize: 12,
  },

  socialButton: {
    flexDirection: "row",
    width: 270,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#B9B9B9",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#F6F6F600",
  },

  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  socialText: {
    fontSize: 15,
    color: "#707070",
    fontWeight: "500",
    textAlignVertical: "center", // works on Android
    includeFontPadding: false, // helps on Android to truly center
  },

  SignUp: {
    fontSize: 12,
    color: "#681ABB",
    fontWeight: "500",
  },
});
