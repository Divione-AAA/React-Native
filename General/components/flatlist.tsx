import {
  FlatList,
  View,
  Text,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: 1,
    title: "Pizza Italiana",
    description: "Pizza artesanal napolitana",
    image: "https://picsum.photos/400/200",
  },
  {
    id: 2,
    title: "Hamburguesas Gourmet",
    description: "Carne premium y pan brioche",
    image: "https://picsum.photos/401/200",
  },
  {
    id: 3,
    title: "Sushi Bar",
    description: "Sushi fresco todos los días",
    image: "https://picsum.photos/402/200",
  },
  {
    id: 4,
    title: "Tacos Mexicanos",
    description: "Tacos auténticos",
    image: "https://picsum.photos/403/200",
  },
];

export default function FlatListScreen() {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white">

      <View className="px-4 py-4 border-b border-gray-200">
        <Text className="text-2xl font-bold">Explorar</Text>
        <Text className="text-gray-500">
          Restaurantes cerca de ti
        </Text>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <RestaurantCard item={item} />
        )}
      />

    </SafeAreaView>
  );
}

function RestaurantCard({ item }: any) {
  return (
    <View className="mb-4 bg-gray-100 rounded-xl overflow-hidden">
      <Image source={{ uri: item.image }} className="h-44 w-full" />
      <View className="p-4">
        <Text className="text-lg font-semibold">
          {item.title}
        </Text>
        <Text className="text-gray-500 mt-1">
          {item.description}
        </Text>
      </View>
    </View>
  );
}
