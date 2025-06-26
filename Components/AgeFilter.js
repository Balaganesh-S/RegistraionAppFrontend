import { View, Text, StyleSheet, Button } from "react-native";
import Slider from "./Slider";
import { useState } from "react";

export default function AgeFilter({ setFilter, setCurrFilter }) {
  const [ageRange, setAgeRange] = useState([16, 50]);
  const handleApply = () => {
    setFilter((prev) => ({
      ...prev,
      Age: { startAge: ageRange[0], endAge: ageRange[1] },
    }));
    setCurrFilter(0);
  };
  const handleCancel = () => {
    setFilter((prev) => ({ ...prev, Age: null }));
    setCurrFilter(0);
  };
  return (
    <View style={styles.backdrop}>
      <View style={styles.BottomSheet}>
        <View style={styles.container}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            Select the age range{" "}
          </Text>
          <Slider
            multiSliderValue={ageRange}
            setMultiSliderValue={setAgeRange}
          />
          <View style={styles.btnGroup}>
            <Button title="Apply" onPress={handleApply} color="#4CAF50" />
            <Button title="Cancel" onPress={handleCancel} color="#9E9E9E" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    flex: 1,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  BottomSheet: {
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: "40%",
    zIndex: 1000,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnGroup: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "50%",
    marginTop: 16,
    gap: 12,
  },
});
