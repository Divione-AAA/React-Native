import {
  ScrollView,
  View,
  Text,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ExampleScrollScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Scroll */}
      <ScrollView
        className="flex-1 mt-"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 16,
        }}
      >

        {/* Card */}
        <RestaurantCard
          title="Pizza Italiana"
          description="Pizza artesanal estilo napolitano"
          image="https://picsum.photos/400/200"
        />

        <RestaurantCard
          title="Hamburguesas Gourmet"
          description="Carne premium y pan brioche"
          image="https://picsum.photos/401/200"
        />

        <RestaurantCard
          title="Sushi Bar"
          description="Sushi fresco todos los días"
          image="https://picsum.photos/402/200"
        />

        <RestaurantCard
          title="Comida Mexicana"
          description="Tacos, burritos y más"
          image="https://picsum.photos/403/200"
        />

        <RestaurantCard
          title="Café & Postres"
          description="Café de especialidad y dulces"
          image="https://picsum.photos/404/200"
        />

        <RestaurantCard
          title="Comida Asiática"
          description="Sabores orientales auténticos"
          image="https://picsum.photos/405/200"
        />

      </ScrollView>
    </SafeAreaView>
  );
}

function RestaurantCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <View className="mb-4 bg-gray-100 rounded-xl overflow-hidden">
      <Image
        source={{ uri: image }}
        className="h-44 w-full"
      />
      <View className="p-4">
        <Text className="text-lg font-semibold">
          {title}
        </Text>
        <Text className="text-gray-500 mt-1">
          {description}
        </Text>
      </View>
    </View>
  );
}
