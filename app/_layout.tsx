import { Stack } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function () {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}

const styles = StyleSheet.create({});
