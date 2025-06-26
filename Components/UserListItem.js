import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function UserListItem({ user, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("UserDetails", { user, navigation })}
    >
      <View style={styles.container}>
        <Image
          source={
            1 == 2 ? { uri: user.imageUri } : require("../assets/profile.png") // fallback image
          }
          style={styles.avatar}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{user.firstName}</Text>
          <Text style={[styles.plan, getPlanStyle(user.plan)]}>
            {user.plan ? user.plan : "No Plan"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function getPlanStyle(plan) {
  switch (plan?.toLowerCase()) {
    case "premium":
      return { color: "#ff8c00" };
    case "gold":
      return { color: "#d4af37" };
    default:
      return { color: "#888" };
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  plan: {
    fontSize: 14,
    marginTop: 2,
  },
});
