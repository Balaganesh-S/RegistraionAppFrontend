import { useState } from "react";
import Checkbox from "./Checkbox";
import { View, StyleSheet, Text, Button } from "react-native";

const GenderFilter = () => {
  const [selectedGender, setSelectedGender] = useState([]);
  const addGenderInList = (value) => {
    setSelectedGender((prev) => [...prev, value]);
    console.log(selectedGender);
  };
  const removeGenderFromList = (value) => {
    setSelectedGender((prev) => prev.filter((item) => item !== value));
    console.log(selectedGender);
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Select the gender </Text>
      <Checkbox
        name="Male"
        addInList={addGenderInList}
        removeFromList={removeGenderFromList}
      />
      <Checkbox
        name="Female"
        addInList={addGenderInList}
        removeFromList={removeGenderFromList}
      />
      <Checkbox
        name="Other"
        addInList={addGenderInList}
        removeFromList={removeGenderFromList}
      />
      <Button title="Apply" onPress={() => console.log("Filter Applied")} />
      <Button title="Cancel" onPress={() => console.log("Filter Canceled")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GenderFilter;
