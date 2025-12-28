import React from "react";
import { StatusBar, View, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingSwiper from "react-native-onboarding-swiper";
import Lottie from "lottie-react-native";
import { useRouter } from "expo-router";

export default function Onboarding() {
  const router = useRouter();

  const handleButton = () => {
    router.push("/Homescreen");
  };

  const DoneButton = (props: any) => {
    return (
      <TouchableOpacity {...props} style={{ marginHorizontal: 10 }}>
        <Text style={{ color: "blue", fontWeight: "bold" }}>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <OnboardingSwiper
        onDone={handleButton}
        onSkip={handleButton}
        //DoneButtonComponent={DoneButton as any} // o DoneButton según versión
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Lottie
                  source={require("../../assets/animations/boost.json")}
                  autoPlay
                  loop
                  style={{ width: 200, height: 200 }}
                />
              </View>
            ),
            title: "Bienvenido",
            subtitle: "Esta es la primera pantalla de onboarding",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Lottie
                  source={require("../../assets/animations/loots.json")}
                  autoPlay
                  loop
                  style={{ width: 200, height: 200 }}
                />
              </View>
            ),
            title: "Explora",
            subtitle: "Descubre las funcionalidades de la app",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Lottie
                  source={require("../../assets/animations/work.json")}
                  autoPlay
                  loop
                  style={{ width: 200, height: 200 }}
                />
              </View>
            ),
            title: "Comienza",
            subtitle: "¡Ya estás listo para empezar!",
          },
        ]}
      />
    </SafeAreaView>
    </View>
  );
}
