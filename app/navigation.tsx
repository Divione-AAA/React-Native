import "./globals.css";
import HomeScreen from "./(screens)/HomeScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    );
}