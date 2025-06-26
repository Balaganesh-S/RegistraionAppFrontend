import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

const screenWidth = Dimensions.get("window").width;

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section */}
      <LinearGradient colors={["#0f172a", "#1e293b"]} style={styles.hero}>
        <Text style={styles.heroTitle}>Unleash Your Potential</Text>
        <Text style={styles.heroSubtitle}>Join the best fitness community</Text>
        <TouchableOpacity style={styles.heroButton}>
          <Text style={styles.heroButtonText}>Get Started</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* Features Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Join Us?</Text>
        <View style={styles.features}>
          <Feature icon="barbell" title="Modern Equipment" />
          <Feature icon="nutrition" title="Diet Plans" />
          <Feature icon="people" title="Personal Trainers" />
        </View>
      </View>

      {/* Membership Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Membership Plans</Text>
        <View style={styles.cards}>
          <PlanCard title="Basic" price="₹999/mo" features={["Gym Access"]} />
          <PlanCard
            title="Premium"
            price="₹1499/mo"
            features={["Gym + Diet + Trainer"]}
          />
          <PlanCard
            title="Gold"
            price="₹1999/mo"
            features={["All Access + Events"]}
          />
        </View>
      </View>

      {/* Call to Action */}
      <LinearGradient colors={["#1e293b", "#0f172a"]} style={styles.cta}>
        <Text style={styles.ctaTitle}>Start Your Transformation Today</Text>
        <TouchableOpacity style={styles.heroButton}>
          <Text style={styles.heroButtonText}>Join Now</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
}

function Feature({ icon, title }) {
  return (
    <View style={styles.feature}>
      <Icon name={icon} size={28} color="#10b981" />
      <Text style={styles.featureText}>{title}</Text>
    </View>
  );
}

function PlanCard({ title, price, features }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardPrice}>{price}</Text>
      {features.map((item, index) => (
        <Text key={index} style={styles.cardFeature}>
          • {item}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  hero: {
    padding: 30,
    alignItems: "center",
  },
  heroTitle: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#e5e7eb",
    marginBottom: 20,
    textAlign: "center",
  },
  heroButton: {
    backgroundColor: "#10b981",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  heroButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#1f2937",
    textAlign: "center",
  },
  features: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  feature: {
    alignItems: "center",
    width: screenWidth / 3 - 20,
  },
  featureText: {
    marginTop: 8,
    fontSize: 14,
    color: "#4b5563",
    textAlign: "center",
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    margin: 5,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 6,
    textAlign: "center",
  },
  cardPrice: {
    fontSize: 16,
    color: "#10b981",
    fontWeight: "bold",
    textAlign: "center",
  },
  cardFeature: {
    fontSize: 14,
    color: "#374151",
    marginTop: 4,
    textAlign: "center",
  },
  cta: {
    padding: 30,
    alignItems: "center",
    marginTop: 20,
  },
  ctaTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    marginBottom: 15,
    textAlign: "center",
  },
});
