import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Pressable, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileImageUpdater({ formData, setFormData }) {
  useEffect(() => {
    // Load saved image path from storage on mount
    const loadImage = async () => {
      const uri = await AsyncStorage.getItem("profileImage");
      if (uri) {
        setFormData((prev) => ({
          ...prev,
          imageUri: uri,
        }));
      }
    };
    loadImage();
  }, []);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission denied", "Please allow access to your gallery.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const pickedUri = result.assets[0].uri;
      const fileName = pickedUri.split("/").pop();
      const newPath = FileSystem.documentDirectory + fileName;

      try {
        // Copy the selected image to local filesystem
        await FileSystem.copyAsync({
          from: pickedUri,
          to: newPath,
        });

        setFormData((prev) => ({
          ...prev,
          imageUri: newPath,
        }));
        await AsyncStorage.setItem("profileImage", newPath);
      } catch (error) {
        Alert.alert("Error", "Could not save image.");
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          formData.imageUri
            ? { uri: formData.imageUri }
            : require("../assets/profile.png") // fallback image
        }
        style={styles.profileImage}
      />
      <Pressable style={styles.iconContainer} onPress={pickImage}>
        <Ionicons name="camera" size={20} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    marginTop: 40,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  iconContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#007AFF",
    borderRadius: 20,
    padding: 6,
    borderWidth: 2,
    borderColor: "white",
  },
});
