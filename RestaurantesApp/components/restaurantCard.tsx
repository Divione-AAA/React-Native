import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import { useNavigation, useRouter } from 'expo-router';

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

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const router = useRouter();

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        router.push({
          pathname: '/restaurantScreen',
          params: {
            restaurante: JSON.stringify(restaurant),
          },
        })}
    >
      <View
        style={{
          shadowColor: 'orange',
          shadowRadius: 7,
        }}
        className="mr-6 bg-white rounded-3xl shadow-lg space-y-2"
      >
        <Image
          className="h-36 w-64 rounded-t-3xl"
          source={restaurant.image}
        />
        <View className="px-3 pb-4 space-y-2">
          <Text className="pt-2 text-lg font-bold">{restaurant.name}</Text>

          <View className="flex-row items-center space-x-1">
            <Image
              source={require('../assets/icons/star.png')}
              className="h-4 w-4"
            />
            <Text className="text-xs">
              <Text className="text-green-600">
                {' ' + restaurant.stars + '  '}
              </Text>
              <Text className="text-gray-400 font-semibold">
                {restaurant.category}
              </Text>
            </Text>
          </View>

          <View className="flex-row items-center space-y-2">
            <Icon.MapPin stroke={'gray'} width={15} height={15} />
            <Text className="text-xs text-gray-400">
              {restaurant.address}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
