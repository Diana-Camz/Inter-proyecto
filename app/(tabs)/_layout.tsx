import { colors } from "@/themes";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.gray,
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 4,
          marginTop: 4,
        },
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0, // para Android, quita sombra
          shadowOpacity: 0, // para iOS, quita sombra
        },
      }}
    >
      <Tabs.Screen
        name="landing"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "Ordena",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cafe-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
