import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import RestaurantCard from "./restaurantCard";

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

type FeaturesProps = {
  title: string;
  descripcion: string;
  restaurants: Restaurant[];
};

export default function Features({
  title,
  descripcion,
  restaurants,
}: FeaturesProps) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-3xl text-black">{title}</Text>
          <Text className="text-sm text-gray-600">{descripcion}</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-orange-600 font-bold">see all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15
      }}
      className="overflow-visible py-5"
      >
        {
            restaurants.map((item,index)=>{
                return(
                    <RestaurantCard
                    restaurant={item}
                    key={index}
                    />
                )
            })
        }
      </ScrollView>
    </View>
  );
}
