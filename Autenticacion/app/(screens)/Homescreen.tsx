import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Homescreen(){

  const route = useRouter();

  const crearMan = () => {
    route.push("/(screens)/Singup");
  };

  const loginMan = () => {
    route.push("/(screens)/Login");
  };

  return (
    <SafeAreaView className="flex-1 flex justify-around my-4 bg-teal-950">
      <StatusBar barStyle={"dark-content"} />
      <Text className="text-black text-center justify-around font-bold text-4xl">
        Comenzemos
      </Text>
      {/* <Image
            source={require("")}
            className='w-24 h-24 flex-row justify-center'
            
        /> */}
      <View className="space-y-4-">
        <TouchableOpacity
          className="py-3 mx-7 rounded-xl bg-yellow-500"
          onPress={crearMan}
        >
          <Text className="text-center font-bold text-xl text-gray-700">
            Crear cuenta
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center">
        <Text>¿Tienes una cuenta? </Text>
        <TouchableOpacity onPress={loginMan}>
          <Text className="text-yellow-500">Inicia Sesion</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
