import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import { getUserByNameApi } from "../api/registerApi";

export default function SearchBar({ setUser }) {
  const [text, setText] = useState("");
  const handlePress = () => {
    if (text.trim() === "") {
      return; // Do nothing if the input is empty
    }
    getUserByNameApi(text)
      .then((response) => {
        setUser(response);
        console.log("Fetched users:", response);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
    setText(""); // Clear the input after search
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#888"
        value={text}
        onChangeText={setText}
      />
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.searchIcon}>
          <Icon name="search" size={24} color="black" />
        </View>
      </TouchableWithoutFeedback>
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
