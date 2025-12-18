import { Stack } from 'expo-router';
import { View } from 'react-native';


export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName='(screens)/Onboarding'>
      <Stack.Screen name='Onboarding'/>
      <Stack.Screen name='Homescreen'/>
    </Stack>
  );
}
