import { View, Text, StyleSheet, Button } from "react-native";
import Slider from "./Slider";
import { useState } from "react";

export default function AgeFilter() {
  const [ageRange, setAgeRange] = useState([16, 50]);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Select the age range{" "}
      </Text>
      <Slider multiSliderValue={ageRange} setMultiSliderValue={setAgeRange} />
      <Button
        title="Apply"
        onPress={() => console.log("Filter Applied", ageRange)}
      />
      <Button title="Cancel" onPress={() => console.log("Filter Canceled")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
