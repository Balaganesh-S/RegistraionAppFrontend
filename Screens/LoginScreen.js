import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import Button from "../Components/Button";
import { Image } from "expo-image";
import { useState } from "react";
import { loginApi } from "../api/registerApi";

import logo from "../assets/logo.png";
import React from "react";

const handleLogin = async (credentials, setError, navigation) => {
  try {
    const response = await loginApi(credentials);
    setError(""); // Clear previous error
    navigation.navigate("Home");
  } catch (error) {
    setError(error.message); // Only the string message
  }
};

const LoginScreen = ({ navigation }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/logo.png")}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <View style={{ width: "90%", marginBottom: 20, gap: 10 }}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          onChange={(e) => {
            setCredentials({ ...credentials, email: e.nativeEvent.text });
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          onChange={(e) => {
            setCredentials({ ...credentials, password: e.nativeEvent.text });
          }}
        />
      </View>
      {error !== "" && (
        <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
      )}

      <Button
        title="Log in"
        onPress={() => handleLogin(credentials, setError, navigation)}
        buttonStyle={styles.button}
        buttonTextStyle={styles.buttonText}
      />
      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>

        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signupText}>sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  input: {
    height: 56,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    fontSize: 16,
  },
  // button: {
  //   backgroundColor: "#007BFF",
  //   padding: 10,
  //   borderRadius: 5,
  //   width: 200,
  //   alignItems: "center",
  // },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 50,
    marginTop: 200,
  },
  signupContainer: {
    marginTop: 20,
    flexDirection: "row",
    gap: 5,
  },
  signupText: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});
