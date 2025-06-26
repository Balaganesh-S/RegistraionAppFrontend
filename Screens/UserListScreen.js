import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import UserListItem from "../Components/UserListItem";

export default function UserListScreen({ users, navigation }) {
  return (
    <View style={styles.screen}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.email}
        renderItem={({ item }) => (
          <UserListItem user={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    marginTop: 16,
  },
});
