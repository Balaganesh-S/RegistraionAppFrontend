import { View, Text, FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import FilterButton from "../Components/FilterButton";
import BottomSheet from "../Components/BottomSheet";

export default function DashboardScreen() {
  const [filter, setFilter] = useState({
    gender: null,
    startDate: null,
    endDate: null,
    plan: null,
    startAge: null,
    endAge: null,
  });

  const setFilterValue = (filter, value) => {
    setFilter((prevFilter) => ({ ...prevFilter, filter: value }));
  };

  const data = [
    { id: "1", title: "Date" },
    { id: "2", title: "Gender" },
    { id: "3", title: "Plan" },
    { id: "4", title: "Age" },
  ];

  return (
    <View style={styles.screen}>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <FilterButton name={item.title} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
      <BottomSheet />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  listContent: {
    paddingHorizontal: 16,
  },
});
