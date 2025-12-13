
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import * as Icon from 'react-native-feather';

type Restaurant = {
  id: number;
  name: string;
  image: any;
  description: string;
  lng: number;
  lat: number;
  address: string;
  stars: number;
  reviews: string;
  category: string;
  dishes: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: any;
  }[];
};

export default function RestaurantScreen(restaurante : Restaurant) {
  //const { restaurants } = useLocalSearchParams<{ restaurants: string }>();
  console.log(restaurante.image)
  const navigation = useNavigation()
  return (
    <View>
      <ScrollView>
        <View className='relative'>
          <Image source={restaurante.image} className='w-full h-72'/>
          <TouchableOpacity onPress={()=>navigation.goBack()} className='bg-gray-50 absolute p-2 rounded-full top-14 left-4 shadow-lg'>
            <Icon.ArrowLeft stroke={"orange"}/>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}