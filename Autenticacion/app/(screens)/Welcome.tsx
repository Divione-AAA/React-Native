import { View, Text, StatusBar } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle={"dark-content"}/>
      <View className="justify-center flex-1">
        <TouchableOpacity className="items-center">
          <Text className="font-bold text-gray-700 text-2xl">Cerrar sesion</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
