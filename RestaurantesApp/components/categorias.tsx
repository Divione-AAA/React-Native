import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categories } from "@/constants/categorias";

export default function Categorias() {
  const [activeCategory, setActivity] = useState<number | null>(null);

  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 13,
        }}
      >
        {categories.map((categories, index) => {
          let isActive = categories.id == activeCategory;
          let btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          let txtClass = isActive ? "font-semibold text-gray-800" : "text-gray-500";

          return (
            <View key={index} className="flex items-center justify-center mr-6">
              <TouchableOpacity
                onPress={() => setActivity(categories.id)}
                className={"p-1 rounded-full shadow " + btnClass}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  source={categories.image}
                />
              </TouchableOpacity>
              <Text className={"text-sm " + txtClass}>{categories.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
