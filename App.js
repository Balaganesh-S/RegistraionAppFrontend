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
import ProfileImageUpdater from "./Components/ProfileImageUpdater";
import UserListItem from "./Components/UserListItem";
import AnalyticsChartScreen from "./Screens/AnalyticsChartScreen";
import UserDetailsScreen from "./Screens/UserDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="bottom" component={BottomSheet} />
        <Stack.Screen name="UserListItem" component={UserListItem} />
        <Stack.Screen name="AnalyticsChart" component={AnalyticsChartScreen} />
        <Stack.Screen
          name="ProfileImageUpdater"
          component={ProfileImageUpdater}
        />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
