import React from "react";
import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingSwiper from "react-native-onboarding-swiper";
import { Image } from "react-native";
import Lottie from "lottie-react-native";

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <OnboardingSwiper
        pages={[
          {
            backgroundColor: "#fff",
            image: (<View>
              <Lottie
                source={require("../../assets/animations/boost.json")}
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
              />
            </View>),
            title: "Bienvenido",
            subtitle: "Esta es la primera pantalla de onboarding",
          },
          {
            backgroundColor: "#fff",
            image: (<View>
              <Lottie
                source={require("../../assets/animations/loots.json")}
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
              />
            </View>),
            title: "Explora",
            subtitle: "Descubre las funcionalidades de la app",
          },
          {
            backgroundColor: "#fff",
            image:(<View>
              <Lottie
                source={require("../../assets/animations/work.json")}
                autoPlay
                loop
                style={{ width: 200, height: 200 }}
              />
            </View>),
            title: "Comienza",
            subtitle: "¡Ya estás listo para empezar!",
          },
        ]}
      />
    </SafeAreaView>
  );
}
