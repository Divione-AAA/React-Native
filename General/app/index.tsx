import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  Modal,
} from "react-native";
import React from "react";
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";

const router = useRouter();

const btpHand = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
  });

  if (!result.canceled) {
    console.log(result.assets[0].uri);
  }
};

const btHand = () => {
  console.log("Ajustes Modal abierto");
  return(
    <Modal
      animationType="slide"
      transparent={false}
      visible={true}
      presentationStyle={"pageSheet"}
    >
      <View>
        <Text>Ajustes Modal abierto</Text>
      </View>
    </Modal>
  )
};

export default function index() {

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle={"light-content"} />
      <View className="flex-1 items-center justify-start pt-20 px-6">
        <View className="bg-white rounded-full p-5 mb-10 ">
          <Image source={require("../assets/logo.png")} className="w-20 h-20" />
        </View>
        <View className="flex-row">
          <View className="flex-1 items-center">
            <Text className="text-white text-xl">Siguiendo</Text>
            <Text className="text-white text-center text-2xl">150</Text>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-white text-xl">Seguidores</Text>
            <Text className="text-white text-2xl">100</Text>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-white text-xl">Likes</Text>
            <Text className="text-white text-2xl">50</Text>
          </View>
        </View>
        <View className="flex-row justify-between mt-10 space-x-4">
          <TouchableOpacity
            className="bg-white px-6 py-3 rounded-md"
            onPress={btHand}
          >
            <Text className="text-black text-xl">Ajustes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-white px-6 py-3 rounded-md"
            onPress={btpHand}
          >
            <Text className="text-black text-xl">Editar Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-10 space-y-4">
        <OptionItem text="Configuración" />
        <OptionItem text="Notificaciones" />
        <OptionItem text="Seguridad" />
        <OptionItem text="Cerrar sesión" danger />
      </View>
    </SafeAreaView>
  );
}

function OptionItem({ text, danger }: { text: string; danger?: boolean }) {
  return (
    <View className="border-b ml-5 pb-3">
      <TouchableOpacity>
        <Text
          className={`text-base ${danger ? "text-red-500" : "text-gray-800"}`}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
