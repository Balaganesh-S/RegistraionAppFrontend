import { View, Text, StyleSheet, Animated, Dimensions } from "react-native";
import Card from "../Components/Card.js";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useRef } from "react";
import Button from "../Components/Button.js";

export default function SubscriptionScreen() {
  const [plan, setPlan] = useState("");
  const [showButton, setShowButton] = useState(false);
  const slideAnim = useRef(
    new Animated.Value(Dimensions.get("window").height)
  ).current;

  const setSubscription = (title) => {
    if (!showButton) {
      Animated.timing(slideAnim, {
        toValue: 0, // Slide to original position (bottom of screen)
        duration: 500,
        useNativeDriver: true,
      }).start();
      setShowButton(true);
    }
    setPlan(title);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardGroup}>
        <Text style={styles.title}>Select a Plan</Text>
        <Card
          title="Platinum"
          price={9999}
          month={12}
          setSubscription={setSubscription}
          plan={plan}
        />
        <Card
          title="Gold"
          price={6999}
          month={6}
          setSubscription={setSubscription}
          plan={plan}
        />
        <Card
          title="Silver"
          price={1499}
          month={1}
          setSubscription={setSubscription}
          plan={plan}
        />
      </View>

      {showButton && (
        <Animated.View
          style={[
            styles.animatedButton,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Button
            buttonStyle={styles.button}
            buttonTextStyle={styles.buttonText}
            title={"Subscribe Now"}
          />
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
    justifyContent: "space-between", // This moves the button to the bottom
  },
  cardGroup: {
    gap: 16,
  },
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
    marginBottom: 20, // Add some space at the bottom
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    marginTop: 16,
  },
});
