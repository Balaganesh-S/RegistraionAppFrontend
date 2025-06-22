import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";

export default function SearchBar({ text, setText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#888"
        value={text}
        onChangeText={setText}
      />
      <View style={styles.searchIcon}>
        <Icon name="search" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
    color: "#333",
    width: 170, // Adjust width as needed
    borderTopRightRadius: 0, // Remove top right border radius for the search icon
    borderBottomRightRadius: 0,
  },
  container: {
    flexDirection: "row",
    marginRight: 0,
    width: 220,
    height: 40,
  },
  searchIcon: {
    width: 50,
    height: 40,
    backgroundColor: "#ccc",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderStartEndRadius: 0,
    borderStartStartRadius: 0,
    marginRight: 0,
  },
});
