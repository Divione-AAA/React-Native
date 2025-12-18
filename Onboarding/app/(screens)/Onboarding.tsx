import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingSwiper from "react-native-onboarding-swiper";
import { Image } from "react-native";

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <OnboardingSwiper
        pages={[
          {
            backgroundColor: "#fff",
            image: <Image className="w-64 h-64" source={require("../../assets/imagen1.png")} />,
            title: "Bienvenido",
            subtitle: "Esta es la primera pantalla de onboarding",
          },
          {
            backgroundColor: "#fff",
            image: <Image className="w-64 h-64" source={require("../../assets/imagen2.png")} />,
            title: "Explora",
            subtitle: "Descubre las funcionalidades de la app",
          },
          {
            backgroundColor: "#fff",
            image: <Image className="w-64 h-64" source={require("../../assets/imagen3.png")} />,
            title: "Comienza",
            subtitle: "¡Ya estás listo para empezar!",
          },
        ]}
      />
    </SafeAreaView>
  );
}
