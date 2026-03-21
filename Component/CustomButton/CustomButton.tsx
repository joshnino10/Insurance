import { StyleSheet, Text, Pressable, } from 'react-native'
import React from 'react'

interface CustomButtonProps {
  title: string
  onPress: () => void
  backgroundColor?: string
  textColor?: string
  style?: object
}

export default function CustomButton({
  title,
  onPress,
  backgroundColor = '#681ABB',
  textColor = '#fff',
  style = {},
}: CustomButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor },
        pressed && { opacity: 0.7 },
        style,
      ]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    width:'100%',
    height:55,
    borderRadius: 18,
    borderWidth:1,
    borderColor:'#B9B9B9',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    backgroundColor:'#681ABB',
    shadowColor: '#000',
    shadowOffset: {width:0, height:7},
    shadowOpacity:0.1,
    shadowRadius:4,
    elevation:4
  },
  text: {
    fontFamily: 'PoppinsMedium',
    fontSize: 16,
    color:'#FFFFFF',
    fontWeight: '600',
  },
})