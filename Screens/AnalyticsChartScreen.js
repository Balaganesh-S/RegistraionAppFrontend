import React, { useState, useEffect, use } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { BarChart, LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { getAllUsersApi } from "../api/registerApi";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundColor: "#ffffff",
  backgroundGradientFrom: "#f3f4f6",
  backgroundGradientTo: "#e5e7eb",
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(31, 41, 55, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(31, 41, 55, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

const sampleData = {
  age: {
    labels: ["10-15", "16-25", "26-35", "36-45", "46-55", "56+"],
    data: [20, 40, 25, 15],
  },
  gender: {
    labels: ["Male", "Female", "Other"],
    data: [50, 45, 5],
  },
  plan: {
    labels: ["No Plan", "Basic", "Premium", "Gold"],
    data: [30, 50, 20],
  },
  joinedDate: {
    labels: ["2021", "2022", "2023", "2024"],
    data: [10, 30, 40, 20],
  },
};

export default function AnalyticsChartScreen() {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsersApi();
        setUsers(response);
        // console.log(
        //   "Fetched users:",
        //   users.map((user) => user["age"])
        // );
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);
  const [selectedOption, setSelectedOption] = useState("age");
  const [users, setUsers] = useState([]);

  const chartData = {
    labels: [], // dynamic labels
    datasets: [
      {
        data: [], // dynamic data
      },
    ],
  };

  if (selectedOption === "age") {
    const ageBuckets = {
      "18-25": 0,
      "26-35": 0,
      "36-45": 0,
      "46+": 0,
    };

    users.forEach((user) => {
      const age = user.age;
      if (age >= 18 && age <= 25) ageBuckets["18-25"]++;
      else if (age >= 26 && age <= 35) ageBuckets["26-35"]++;
      else if (age >= 36 && age <= 45) ageBuckets["36-45"]++;
      else if (age > 45) ageBuckets["46+"]++;
    });

    chartData.labels = Object.keys(ageBuckets);
    chartData.datasets[0].data = Object.values(ageBuckets);
  } else if (selectedOption === "gender") {
    const genderBuckets = { Male: 0, Female: 0, Other: 0 };

    users.forEach((user) => {
      const gender = user.gender.toLowerCase();
      if (gender === "male") genderBuckets.Male++;
      else if (gender === "female") genderBuckets.Female++;
      else genderBuckets.Other++;
    });

    chartData.labels = Object.keys(genderBuckets);
    chartData.datasets[0].data = Object.values(genderBuckets);
  } else if (selectedOption === "plan") {
    const planBuckets = { Basic: 0, Premium: 0, Gold: 0, NoPlan: 0 };

    users.forEach((user) => {
      const plan = user.plan?.toLowerCase();
      if (plan === "basic") planBuckets.Basic++;
      else if (plan === "premium") planBuckets.Premium++;
      else if (plan === "gold") planBuckets.Gold++;
      else planBuckets.NoPlan++;
    });

    chartData.labels = Object.keys(planBuckets);
    chartData.datasets[0].data = Object.values(planBuckets);
  } else if (selectedOption === "joinedDate") {
    const yearBuckets = {};

    users.forEach((user) => {
      const year = new Date(user.createdDate).getFullYear();
      yearBuckets[year] = (yearBuckets[year] || 0) + 1;
    });

    chartData.labels = Object.keys(yearBuckets);
    chartData.datasets[0].data = Object.values(yearBuckets);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>User Analytics</Text>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Select Filter:</Text>
        <Picker
          selectedValue={selectedOption}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Age" value="age" />
          <Picker.Item label="Gender" value="gender" />
          <Picker.Item label="Plan" value="plan" />
          <Picker.Item label="Joined Date" value="joinedDate" />
        </Picker>
      </View>

      <View style={styles.card}>
        <Text style={styles.chartTitle}>Bar Chart</Text>
        <BarChart
          data={chartData}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.chartTitle}>Line Chart</Text>
        <LineChart
          data={chartData}
          width={screenWidth - 40}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f9fafb",
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
    color: "#1f2937",
  },
  pickerContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 8,
  },
  picker: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  chart: {
    borderRadius: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#111827",
    textAlign: "center",
  },
});
