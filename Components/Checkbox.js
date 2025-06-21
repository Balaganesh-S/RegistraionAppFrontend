import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { act, useState } from "react";

export default function Checkbox({ name, addInList, removeFromList }) {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    if (checked) {
      removeFromList(name);
    } else {
      addInList(name);
    }
    setChecked(!checked);
  };
  return (
    <TouchableOpacity
      style={checked ? styles.activeCheckbox : styles.checkbox}
      onPress={handlePress}
    >
      <Text>{name}</Text>
      <View style={checked ? styles.activeCheckboxInner : styles.checkboxInner}>
        {checked && <Text style={styles.checkboxText}>✓</Text>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: "60%",
    height: 50,
    borderWidth: 2,
    borderColor: "rgb(153, 151, 181)",
    borderRadius: 4,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  activeCheckbox: {
    width: "60%",
    height: 50,
    borderWidth: 2,
    borderColor: "rgb(37, 99, 255)",
    borderRadius: 4,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  checkboxInner: {
    width: 16,
    height: 16,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  activeCheckboxInner: {
    width: 16,
    height: 16,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  checkboxText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
