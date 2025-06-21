import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import DateFilter from "./DateFilter";
import GenderFilter from "./GenderFilter";
import AgeFilter from "./AgeFilter";
import SearchBar from "./SearchBar";

const Stack = createNativeStackNavigator();

export default function BottomSheet() {
  return (
    <View style={styles.backdrop}>
      <View style={styles.BottomSheet}>
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen
            name="Date"
            component={DateFilter}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Gender"
            component={GenderFilter}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Age"
            component={AgeFilter}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={SearchBar}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    flex: 1,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  BottomSheet: {
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: "40%",
  },
});
