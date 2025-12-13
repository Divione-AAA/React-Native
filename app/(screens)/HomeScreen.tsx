import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, ScrollView, View, Text, TextInput } from "react-native";
import * as Icon from "react-native-feather";
import Categorias from "@/components/categorias";
import Features from "@/components/features";
import { featured } from "@/constants/categorias";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-withe">
      {/*Caja de busqueda*/}
      <StatusBar barStyle={"dark-content"} />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300 ">
          <Icon.Search width={25} height={25} stroke={"gray"} />
          <TextInput placeholder="Restaurantes" className="ml-2 flex-1" />
          {/*Icono de localizacion*/}
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
            <Icon.MapPin width={25} height={25} stroke={"gray"} />
            <Text className="text-gray-600">Camaguey</Text>
          </View>
        </View>
        {/*Icono de ajustes de usuario*/}
        <View className="ml-2 p-3 rounded-full bg-gray-300">
          <Icon.User height={25} width={25} stroke={"gray"} />
        </View>
      </View>
      {/*Contenido principal para mostrar*/}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      >
        {/*Categorias*/}
        <Categorias/>
        {/*Featured*/}
        <View className="mt-5">
          {
            featured.map((item,index)=>{
              return(
                <Features
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                descripcion={item.description}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
