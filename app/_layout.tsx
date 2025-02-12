import { Tabs } from "expo-router";

export default function () {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "For You", headerShown: true }}
      ></Tabs.Screen>
    </Tabs>
  );
}
