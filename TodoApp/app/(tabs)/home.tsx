import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import addButton from '@/components/addButton'

const home = () => {
  return (
    <SafeAreaView className='mt-1'>
      <StatusBar barStyle={'dark-content'}/>
      <View>
        {/*Componente para agregar*/}
        </addButton>
      </View>
    </SafeAreaView>
  )
}

export default home