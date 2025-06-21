import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "../Components/Button";
import { useState } from "react";
import React from "react";

export default function Card({ title, price, month, setSubscription, plan }) {
  return (
    <TouchableWithoutFeedback onPress={() => setSubscription(title)}>
      <View style={plan === title ? styles.outerCointainer : ""}>
        <Icon
          name="check-circle"
          size={30}
          color="green"
          style={
            plan === title
              ? { position: "absolute", top: 30, right: 30, zIndex: 1 }
              : { position: "absolute", top: 30, right: 30 }
          }
        />
        ;
        <LinearGradient
          colors={["#89F7FE", "#66A6FF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.container}
        >
          <Text style={styles.tilte}>{title}</Text>
          <Text style={styles.priceText}>
            <Text style={styles.rupee}>₹</Text>
            {price}
          </Text>
          <Text style={styles.monthText}>/{month}Months</Text>
          <Button />
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: "16%",
    // width: "100%",
    // borderWidth: 2,
    // borderColor: "black",
    // padding: 12,
    // borderRadius: 16,
    borderRadius: 16,
    padding: 20,
    width: "100%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  outerCointainer: {
    borderColor: "#4CAF50", // green outline
    borderWidth: 2,
    shadowColor: "#4CAF50",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    backgroundColor: "#e8f5e9",
    borderWidth: 4,
    borderRadius: 24,
    width: "100%",
    padding: 4,
  },
  tilte: {
    fontSize: 32,
    marginBottom: 4,
    fontWeight: "700",
    color: "#ffffff",
  },

  monthText: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "700",
    color: "#ffffff",
  },
  priceText: {
    fontSize: 24,
    color: "black",
    marginBottom: 4,
    fontWeight: "700",
    color: "#ffffff",
  },
  rupee: {
    fontSize: 14, // smaller font to simulate subscript
    lineHeight: 24, // same as main font to align vertically
    marginRight: 2,
    position: "relative",
    top: 6, // push it downward like subscript
  },
});
