import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import FilterButton from "../Components/FilterButton";
import BottomSheet from "../Components/BottomSheet";
import SearchBar from "../Components/SearchBar";
import AgeFilter from "../Components/AgeFilter";
import DateFilter from "../Components/DateFilter";
import GenderFilter from "../Components/GenderFilter";
import PlanFilter from "../Components/PlanFilter";
import Icon from "react-native-vector-icons/FontAwesome";
import UserListScreen from "./UserListScreen";
import { getUsersByQueryApi } from "../api/registerApi";

export default function DashboardScreen({ navigation }) {
  const [currFilter, setCurrFilter] = useState(0);
  const [text, setText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState({
    Gender: null,
    Date: null,
    Plan: null,
    Age: null,
  });
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsersByQueryApi(filter);
        setUser(response);
        // console.log("Fetched users:", response);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, [filter]);

  // const setFilterValue = (filter, value) => {
  //   setFilter((prevFilter) => ({ ...prevFilter, filter: value }));
  // };

  const data = [
    { id: "1", title: "Date" },
    { id: "2", title: "Gender" },
    { id: "3", title: "Plan" },
    { id: "4", title: "Age" },
  ];

  return (
    <View style={styles.screen}>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Icon
            name="home"
            size={30}
            color="black"
            style={{ marginLeft: 16 }}
          />
        </TouchableOpacity>
        <SearchBar setUser={setUser} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AnalyticsChart");
          }}
        >
          <Icon name="area-chart" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => (
            <FilterButton
              name={item.title}
              filter={filter}
              setCurrFilter={setCurrFilter}
              setFilter={setFilter}
              id={item.id}
            />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>

      {currFilter == 4 && (
        <AgeFilter setFilter={setFilter} setCurrFilter={setCurrFilter} />
      )}
      {currFilter == 1 && (
        <DateFilter setFilter={setFilter} setCurrFilter={setCurrFilter} />
      )}
      {currFilter == 2 && (
        <GenderFilter setFilter={setFilter} setCurrFilter={setCurrFilter} />
      )}
      {currFilter == 3 && (
        <PlanFilter setFilter={setFilter} setCurrFilter={setCurrFilter} />
      )}
      <View style={styles.userList}>
        <UserListScreen users={user} navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  navbar: {
    width: "100%",
    height: 56,
    backgroundColor: "red",
    padding: 4,
    gap: 16,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8,
  },
  userList: {
    height: "100%",
    backgroundColor: "#f6f6f6",
    marginTop: 16,
  },
});
