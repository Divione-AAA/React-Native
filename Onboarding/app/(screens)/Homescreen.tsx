import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Homescreen() {
  return (
    <SafeAreaView className='mt-1'>
        <StatusBar barStyle={"dark-content"}/>
        <Text>Prosti el q lo lea</Text>
    </SafeAreaView>
  )
}