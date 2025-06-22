import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  Button,
} from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

function formatDate(date) {
  if (!date) return "";
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function DateFilter({ setFilter, setCurrFilter }) {
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
  });
  const handleApply = () => {
    setFilter((prev) => ({
      ...prev,
      Date: date,
    }));
    setCurrFilter(0);
  };
  const handleCancel = () => {
    setFilter((prev) => ({ ...prev, Date: null }));
    setCurrFilter(0);
  };
  const onStartDateChange = (event, selectedDate) => {
    setShowStartDate(Platform.OS === "ios");
    // iOS: keep picker open after selection, Android:

    if (selectedDate) {
      setDate((prev) => ({ ...prev, startDate: selectedDate }));
    }
  };
  const onEndDateChange = (event, selectedDate) => {
    setShowEndDate(Platform.OS === "ios");
    // iOS: keep picker open after selection, Android:

    if (selectedDate) {
      setDate((prev) => ({ ...prev, endDate: selectedDate }));
    }
  };
  return (
    <View style={styles.backdrop}>
      <View style={styles.BottomSheet}>
        <View style={styles.screen}>
          <Pressable
            onPress={() => setShowStartDate(true)}
            style={styles.datePickerButton}
          >
            <Text
              style={
                date.startDate
                  ? styles.datePickerText
                  : [styles.datePickerText, { color: "gray" }]
              }
            >
              {date.startDate
                ? formatDate(date.startDate)
                : "Select Start Date"}
            </Text>
          </Pressable>
          {showStartDate && (
            <DateTimePicker
              value={date.startDate || new Date()}
              mode="date"
              display="default"
              onChange={onStartDateChange}
              maximumDate={date.endDate || new Date()}
            />
          )}
          <Pressable
            onPress={() => setShowEndDate(true)}
            style={styles.datePickerButton}
          >
            <Text
              style={
                date.endDate
                  ? styles.datePickerText
                  : [styles.datePickerText, { color: "gray" }]
              }
            >
              {date.endDate ? formatDate(date.endDate) : "Select End Date"}
            </Text>
          </Pressable>
          {showEndDate && (
            <DateTimePicker
              value={date.endDate || new Date()}
              mode="date"
              display="default"
              onChange={onEndDateChange}
              maximumDate={new Date()}
              minimumDate={date.startDate || new Date(2000, 0, 1)} // Ensure end date is after start date
            />
          )}
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
  },
  screen: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    borderRadius: 24,
    marginTop: 16,
    height: 56,
    justifyContent: "center",
    alignItems: "center", // vertically center the text
    width: "40%", // make the button full width
  },

  datePickerText: {
    fontSize: 16,
    color: "black", // default color
  },
  btnGroup: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "50%",
    marginTop: 16,
    gap: 12,
  },
});
