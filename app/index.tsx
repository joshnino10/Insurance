import { Image, Platform, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomInput from '@/Component/CustomInput/CustomInput'
import CustomButton from '@/Component/CustomButton/CustomButton'

export default function Index() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  // Checkbox state
  const [agreed, setAgreed] = useState<boolean>(false)

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!value) setEmailError('Email is required')
    else if (!emailRegex.test(value)) setEmailError('Enter a valid email')
    else setEmailError('')
  }

  const validatePassword = (value: string) => {
    if (!value) setPasswordError('Password is required')
    else if (value.length < 8) setPasswordError('Password must be at least 8 characters')
    else setPasswordError('')
  }

  const handleEmailChange = (text: string) => {
    const formatted = text.trim().toLowerCase()
    setEmail(formatted)
    validateEmail(formatted)
  }

  const handlePasswordChange = (text: string) => {
    setPassword(text)
    validatePassword(text)
  }

  const handleSubmit = () => {
    validateEmail(email)
    validatePassword(password)
    if (!emailError && !passwordError && email && password && agreed) {
      console.log('Login Data:', { email, password })
      // 👉 Connect to API here
    } else if (!agreed) {
      alert('You must agree to the terms to continue.')
    }
  }

  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.page}>
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
          <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/images/app logo.png')} />
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.descText}>Sign in to access your health savings and insurance.</Text>
          </View>

          <View style={{ marginTop: 20, width: '100%' }}>
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
            <Pressable style={styles.checkboxContainer} onPress={() => setAgreed(!agreed)}>
              <View style={[styles.checkbox, agreed && styles.checked]}>
                {agreed && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxText}>
                By continuing you agree to our <Text style={styles.spanText}>Terms of Services</Text> and <Text style={styles.spanText}>Privacy Policy</Text>
              </Text>
            </Pressable>

            <CustomButton
             title='Sign in'
             textColor='#FFFFFF'
             onPress={handleSubmit}
            />

         
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeArea:{
      flex:1,
      backgroundColor:'#D9D9D900',
      justifyContent:'center',
      alignItems:'center',
      paddingTop: Platform.OS === 'android'? 10:0
  },
  page:{
    justifyContent:'center',
    alignItems:'center'
  },
  container:{
    alignItems:'center'
  },
  logo:{
    width:82,
    height:77,
    marginTop:15,
  },
  welcomeText:{
    fontSize:24
  },
  descText:{
    marginTop:5,
    fontSize:12
  },
  forgottenText:{
    alignSelf:'flex-end',
    color:'#0A3D62',
    marginVertical: 10
  },
  checkboxContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical: 15
  },
  checkbox:{
    width:17,
    height:17,
    borderWidth:1,
    borderRadius:3,
    marginRight:10,
    justifyContent:'center',
    alignItems:'center'
  },
  checked:{
    backgroundColor:'#0A3D62'
  },
  checkmark:{
    color:'#fff',
    fontSize:14,
    fontWeight:'bold'
  },
  checkboxText:{
    flex:1,
    fontSize:10,
    color:'#999797'
  },
  submitBtn:{
    backgroundColor:'#0A3D62',
    paddingVertical:12,
    borderRadius:8,
    alignItems:'center',
    marginTop:10
  },
  submitText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold'
  },
  spanText:{
    color:'#681ABB'
  }
})