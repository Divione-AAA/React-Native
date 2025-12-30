import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="(screens)/Homescreen">
      <Stack.Screen name="(screens)/Homescreen" options={{ headerShown: false }} />
      <Stack.Screen name="(screens)/Login" options={{ headerShown: false }} />
      <Stack.Screen name="(screens)/Singup"  options={{ headerShown: false }}/>
      <Stack.Screen name="(screens)/Welcome" options={{ headerShown: false }} />
    </Stack>
  );
}
