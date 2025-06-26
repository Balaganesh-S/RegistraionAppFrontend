import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function UserDetailsScreen() {
  const route = useRoute();
  const { user } = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: user.imageUri }} style={styles.profileImage} />
        <Text style={styles.name}>
          {user.firstName} {user.lastName}
        </Text>
        <Text style={styles.plan}>{user.plan} Plan</Text>
        <View style={styles.divider} />

        <DetailItem label="Email" value={user.email} />
        <DetailItem label="Phone" value={user.phoneNumber} />
        <DetailItem label="Gender" value={user.gender} />
        <DetailItem
          label="Date of Birth"
          value={new Date(user.dateOfBirth).toDateString()}
        />
        <DetailItem label="Age" value={`${user.age} years`} />
        <DetailItem
          label="Address"
          value={`${user.address}, ${user.city}, ${user.state}`}
        />
        <DetailItem label="Country" value={user.country} />
        <DetailItem label="Zip Code" value={user.zipCode} />
        <DetailItem
          label="Joined"
          value={new Date(user.createdDate).toDateString()}
        />
      </View>
    </ScrollView>
  );
}

function DetailItem({ label, value }) {
  return (
    <View style={styles.detailItem}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafb",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#111827",
  },
  plan: {
    fontSize: 16,
    textAlign: "center",
    color: "#6b7280",
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#e5e7eb",
    marginVertical: 16,
  },
  detailItem: {
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 16,
    color: "#111827",
  },
});
