import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-2xl font-bold text-blue-500">
        Hello from NativeWind!
      </Text>
      <Text className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Tailwind styles are working 🎉
      </Text>
    </View>
  );
}
