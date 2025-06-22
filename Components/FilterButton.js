import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";

export default function FilterButton({
  name,
  id,
  filter,
  setCurrFilter,
  setFilter,
}) {
  const handlePress = () => {
    if (filter[name]) {
      const currFilter = filter[name];
      setFilter((prev) => ({ ...prev, [name]: null }));
      setCurrFilter(0);
    } else setCurrFilter(id);
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={filter[name] ? styles.selectedContainer : styles.container}>
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
