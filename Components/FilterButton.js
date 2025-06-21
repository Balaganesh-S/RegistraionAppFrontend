import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";

export default function FilterButton({ name }) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.selectedContainer}>
        <Text>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 24,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 24,
    paddingRight: 24,
    marginRight: 8,
  },
  selectedContainer: {
    height: 40,
    borderRadius: 24,
    backgroundColor: "rgb(241, 245, 255)",
    borderColor: "rgb(37, 99, 255)",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 24,
    paddingRight: 24,
    marginRight: 8,
  },
});
