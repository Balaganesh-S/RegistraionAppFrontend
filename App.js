if (!__DEV__) {
  console.error = () => {};
  console.warn = () => {};
  console.log = () => {};
}

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import SubscriptionScreen from "./Screens/SubscriptionScreen";
import DashboardScreen from "./Screens/DashboardScreen";
import BottomSheet from "./Components/BottomSheet";
import MemeberLineChart from "./Components/MemberLineChart";
import CommonPieChart from "./Components/CommonPieChart";
import CommonBarChart from "./Components/CommonBarChart";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="barChart">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="bottom" component={BottomSheet} />
        <Stack.Screen name="chart" component={CommonPieChart} />
        <Stack.Screen name="barChart" component={CommonBarChart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
