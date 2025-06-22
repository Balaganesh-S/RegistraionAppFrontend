import { useState } from "react";
import Checkbox from "./Checkbox";
import { View, StyleSheet, Text, Button } from "react-native";

const PlanFilter = ({ setFilter, setCurrFilter }) => {
  const [selectedPlan, setSelectedPlan] = useState([]);
  const addPlanInList = (value) => {
    setSelectedPlan((prev) => [...prev, value]);
  };
  const removePlanFromList = (value) => {
    setSelectedPlan((prev) => prev.filter((item) => item !== value));
  };
  const handleApply = () => {
    setFilter((prev) => ({
      ...prev,
      Plan: selectedPlan,
    }));
    setCurrFilter(0);
  };
  const handleCancel = () => {
    setFilter((prev) => ({ ...prev, Plan: null }));
    setCurrFilter(0);
  };
  return (
    <View style={styles.backdrop}>
      <View style={styles.BottomSheet}>
        <View style={styles.container}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>
            Select the plan
          </Text>
          <Checkbox
            name="Platinum"
            addInList={addPlanInList}
            removeFromList={removePlanFromList}
          />
          <Checkbox
            name="Gold"
            addInList={addPlanInList}
            removeFromList={removePlanFromList}
          />
          <Checkbox
            name="Silver"
            addInList={addPlanInList}
            removeFromList={removePlanFromList}
          />
          <View style={styles.btnGroup}>
            <Button title="Apply" onPress={handleApply} color="#4CAF50" />
            <Button title="Cancel" onPress={handleCancel} color="#9E9E9E" />
          </View>
        </View>
      </View>
    </View>
  );
};

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

export default PlanFilter;
