import { Tabs } from "expo-router";
import { Text, StyleSheet, View } from "react-native";

export default function () {
  return (
    <>
      <View style={styles.view}>
        <Text>Gaurav</Text>
      </View>
      <Tabs
        screenOptions={{
          tabBarPosition: "top",
          tabBarStyle: {
            backgroundColor: "#262626",
            height: 35,
            justifyContent: "space-between",
            alignItems: "center",
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { fontSize: 15 },
          tabBarIconStyle: { display: "none" },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Suggested",
            headerShown: false,
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="liked"
          options={{
            // : {
            //   borderBottomColor: "red",
            //   borderBottomWidth: 2,
            // },
            title: "Liked",
            headerShown: false,
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="library"
          options={{
            title: "Library",
            headerShown: false,
          }}
        ></Tabs.Screen>
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#262626",
    color: "white",
  },
});
