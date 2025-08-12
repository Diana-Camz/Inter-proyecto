import { colors } from "@/themes";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

type IconName = "home-outline" | "cafe-outline";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        let iconName: IconName;

        if (route.name === "inicio") iconName = "home-outline";
        else if (route.name === "ordena") iconName = "cafe-outline";
        else iconName = "home-outline";

        return {
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={iconName} size={size} color={color} />
          ),
          tabBarLabel:
            route.name === "inicio"
              ? "Inicio"
              : route.name === "ordena"
              ? "Ordena"
              : route.name,
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.gray,
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 4,
          },
          headerShown: false,
        };
      }}
    />
  );
}
