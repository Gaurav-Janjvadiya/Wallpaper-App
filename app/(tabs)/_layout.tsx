import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function () {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#262626",
          height: 55,
          paddingHorizontal: 30,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        headerTitleAlign: "center",
        tabBarItemStyle: {
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        },
        tabBarLabelStyle: { fontSize: 11 },
      }}
    >
      <Tabs.Screen
        name="(for you)"
        options={{
          title: "For You",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"home"} color={color} size={size} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"menu"} color={color} size={size} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="account"
        options={{
          headerShown: true,
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"body"} color={color} size={size} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
