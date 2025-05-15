import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
export default function RadioButton({ label, value, formData, setFormData }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setFormData({ ...formData, gender: value });
      }}
    >
      <View style={styles.RadioButton}>
        <View
          style={formData.gender == value ? styles.SelectedButton : null}
        ></View>
      </View>
      <Text style={styles.SelectedText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  RadioButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  SelectedButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  SelectedText: {
    color: "#000",
    marginLeft: 10,
    fontSize: 16,
  },
});
