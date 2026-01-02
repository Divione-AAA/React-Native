import { View, Text, Image,TextInput } from "react-native";
import React from "react";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Singup() {
  const router = useRouter();

  const backMan = () => {
    router.back();
  };

  return (
    <View className="flex-1 bg-teal-950">
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            className="bg-yellow-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            onPress={backMan}
          >
            <ArrowLeftIcon size={20} color={"black"} />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          {/* <Image
                source={require("../../assets")}
                style={{width:240, height:240}}
               /> */}
        </View>
      </SafeAreaView>
      <View
        className="bg-white px-8 pt-8 flex-1"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-800 ml-4 text-xl mt-5">Nombre</Text>
          <TextInput
            className="bg-gray-100 p-4 rounded-2xl text-xl"
            placeholder="Introduce tu nombre"
          />
          <Text className="text-gray-800 ml-4 text-xl mt-5">Correo</Text>
          <TextInput
            className="bg-gray-100 p-4 rounded-2xl text-xl"
            placeholder="Introduce tu email"
          />
          <Text className="text-gray-800 ml-4 text-xl mt-5">Contraseña</Text>
          <TextInput
            className="bg-gray-100 p-4 rounded-2xl text-xl"
            secureTextEntry
            placeholder="Escribe tu contraseña"
          />
          <TouchableOpacity className="bg-yellow-500 py-4 mt-10 items-center rounded-2xl">
            <Text className="text-xl text-black font-bold">Crear cuenta</Text>
          </TouchableOpacity>
          <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold">
              Ya tienes una cuenta?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/(screens)/Login")}>
              <Text className="text-yellow-500 font-semibold">
                Iniciar sesion
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
