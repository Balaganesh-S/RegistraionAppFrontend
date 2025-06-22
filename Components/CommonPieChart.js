import { View, Text } from "react-native";
import { PieChart } from "react-native-chart-kit";

export default function CommonPieChart() {
  return (
    <>
      <Text>Pie Chart</Text>
      <PieChart
        data={[
          {
            name: "Seoul",
            population: 21500000,
            color: "#600080",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "Toronto",
            population: 2800000,
            color: "#f00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
          {
            name: "New York",
            population: 8538000,
            color: "#00f",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
          },
        ]}
        width={400}
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
      />
    </>
  );
}
