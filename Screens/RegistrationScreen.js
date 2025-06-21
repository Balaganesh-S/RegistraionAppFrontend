import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Pressable,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import RadioButton from "../Components/RadioButton";
import { registerApi } from "../api/registerApi";
import Button from "../Components/Button";

function formatDate(date) {
  if (!date) return "";
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function clearError(setError) {
  setError({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    dateOfBirth: "",
    commonError: "",
  });
}
function validateForm(formData, setError) {
  clearError(setError);
  var isValid = true;
  if (!formData.firstName) {
    isValid = false;
    setError((prev) => ({
      ...prev,
      firstName: "First name is required",
    }));
  }
  if (!formData.lastName) {
    setError((prev) => ({
      ...prev,
      lastName: "Last name is required",
    }));
  }
  if (!formData.gender) {
    isValid = false;
    setError((prev) => ({
      ...prev,
      gender: "Gender is required",
    }));
  }
  let emailError = "";
  if (!formData.email) {
    emailError = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    emailError = "Email address is invalid";
  }
  if (emailError) {
    isValid = false;
    setError((prev) => ({
      ...prev,
      email: emailError,
    }));
  }
  let passwordError = "";
  if (!formData.password) {
    passwordError = "Password is required";
  } else if (formData.password.length < 6) {
    passwordError = "Password must be at least 6 characters";
  }
  if (passwordError) {
    isValid = false;
    setError((prev) => ({
      ...prev,
      password: passwordError,
    }));
  }
  let confirmPasswordError = "";
  if (!formData.password) {
    confirmPasswordError = "Confirm password is required";
  } else if (formData.password !== formData.confirmPassword) {
    confirmPasswordError = "Passwords do not match";
  }
  if (confirmPasswordError) {
    isValid = false;
    setError((prev) => ({
      ...prev,
      confirmPassword: confirmPasswordError,
    }));
  }
  let phoneNumberError = "";
  if (!formData.phoneNumber) {
    phoneNumberError = "Phone number is required";
  } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
    phoneNumberError = "Phone number must be 10 digits";
  }
  if (phoneNumberError) {
    isValid = false;
    setError((prev) => ({
      ...prev,
      phoneNumber: phoneNumberError,
    }));
  }
  let addressError = "";
  if (!formData.address) {
    addressError = "Address is required";
  }
  if (addressError) {
    isValid = false;
    setError((prev) => ({
      ...prev,
      address: addressError,
    }));
  }
  let cityError = "";
  if (!formData.city) {
    cityError = "City is required";
  }
  if (cityError) {
    isValid = false;
    setError((prev) => ({
      ...prev,
      city: cityError,
    }));
  }
  let stateError = "";
  if (!formData.state) {
    stateError = "State is required";
  }
  if (stateError) {
    isValid = false;
    setError((prev) => ({
      ...prev,
      state: stateError,
    }));
  }
  let countryError = "";
  if (!formData.country) {
    countryError = "Country is required";
  }
  if (countryError) {
    isValid = false;
    setError((prev) => ({
      ...prev,
      country: countryError,
    }));
  }
  let zipCodeError = "";
  if (!formData.zipCode) {
    zipCodeError = "Zip code is required";
  }
  //   else if (!/^\d{6}$/.test(formData.zipCode)) {
  //     zipCodeError = "Zip code must be 5 digits";
  //   }
  if (zipCodeError) {
    isValid = false;
    setError((prev) => ({
      ...prev,
      zipCode: zipCodeError,
    }));
  }
  let dateOfBirthError = "";
  if (
    !formData.dateOfBirth ||
    !(formData.dateOfBirth instanceof Date) ||
    isNaN(formData.dateOfBirth)
  ) {
    dateOfBirthError = "Date of birth is required";
  }

  if (dateOfBirthError) {
    isValid = false; // Uncomment this line if you want to make dateOfBirth a required field
    setError((prev) => ({
      ...prev,
      dateOfBirth: dateOfBirthError,
    }));
  }
  return isValid;
}

async function submitForm(formData, setError, setModalVisible, navigation) {
  if (validateForm(formData, setError)) {
    console.log("Form is valid");
    console.log("Form data:", formData);
    try {
      const response = await registerApi(formData);
      setModalVisible(true);
      setTimeout(() => {
        navigation.navigate("Login");
      }, 1000);
    } catch (error) {
      setError((prev) => ({
        ...prev,
        commonError: "Email already exists",
      }));
    }
  }
}

export default function RegistrationPage({ navigation }) {
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    dateOfBirth: "",
    commonError: "",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    dateOfBirth: null,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const show = () => setModalVisible(true);
  const hide = () => setModalVisible(false);
  const [showDate, setShowDate] = useState(false);

  const onDateChange = (event, selectedDate) => {
    setShowDate(Platform.OS === "ios"); // iOS: keep picker open after selection, Android: close
    if (selectedDate) {
      setFormData({
        ...formData,
        dateOfBirth: selectedDate,
      });
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Modal animationType="slide" visible={modalVisible} onRequestClose={hide}>
        <View style={styles.modal}>
          <Text style={styles.successText}>Successfully Registered!</Text>
        </View>
      </Modal>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Registration Page</Text>
        {error.commonError ? (
          <Text
            style={{
              color: "red",
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {error.commonError}
          </Text>
        ) : null}
        <View>
          <TextInput
            style={error.firstName === "" ? styles.input : styles.inputError}
            value={formData.firstName}
            onChange={(e) => {
              setFormData({ ...formData, firstName: e.nativeEvent.text });
            }}
            placeholder="Enter your first name"
          />
          {error.firstName ? (
            <Text style={{ color: "red", marginLeft: 8 }}>
              {error.firstName}
            </Text>
          ) : null}
          <TextInput
            style={error.lastName === "" ? styles.input : styles.inputError}
            value={formData.lastName}
            onChange={(e) => {
              setFormData({ ...formData, lastName: e.nativeEvent.text });
            }}
            placeholder="Enter your last name"
          />
          {error.lastName ? (
            <Text style={{ color: "red", marginLeft: 8 }}>
              {error.lastName}
            </Text>
          ) : null}
        </View>
        <View style={styles.genderContainer}>
          {/* <RadioButton.Group
            onValueChange={(value) =>
              setFormData({ ...formData, gender: value })
            }
            value={formData.gender}
          >
            <RadioButton.Item label="Male" value="MALE" />
            <RadioButton.Item label="Female" value="FEMALE" />
            <RadioButton.Item label="Other" value="OTHER" />
          </RadioButton.Group>
          {error.gender ? (
            <Text style={{ color: "red" }}>{error.gender}</Text>
          ) : null} */}
          <Text style={{ fontSize: 16 }}>Gender</Text>
          <RadioButton
            label="Male"
            value="MALE"
            formData={formData}
            setFormData={setFormData}
          />
          <RadioButton
            label="Female"
            value="FEMALE"
            formData={formData}
            setFormData={setFormData}
          />
          <RadioButton
            label="Other"
            value="OTHER"
            formData={formData}
            setFormData={setFormData}
          />
        </View>
        {error.gender ? (
          <Text style={{ color: "red", marginLeft: 8 }}>{error.gender}</Text>
        ) : null}
        <View>
          <Pressable
            onPress={() => setShowDate(true)}
            style={styles.datePickerButton}
          >
            <Text
              style={
                formData.dateOfBirth
                  ? styles.datePickerText
                  : [styles.datePickerText, { color: "gray" }]
              }
            >
              {formData.dateOfBirth
                ? formatDate(formData.dateOfBirth)
                : "Select Date of Birth"}
            </Text>
          </Pressable>
          {showDate && (
            <DateTimePicker
              value={formData.dateOfBirth || new Date()}
              mode="date"
              display="spinner"
              onChange={onDateChange}
              maximumDate={new Date()}
            />
          )}
          {error.dateOfBirth ? (
            <Text style={{ color: "red", marginLeft: 8 }}>
              {error.dateOfBirth}
            </Text>
          ) : null}

          <TextInput
            style={error.email === "" ? styles.input : styles.inputError}
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.nativeEvent.text });
            }}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {error.email ? (
            <Text style={{ color: "red", marginLeft: 8 }}>{error.email}</Text>
          ) : null}
          <TextInput
            style={error.password === "" ? styles.input : styles.inputError}
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.nativeEvent.text });
            }}
            placeholder="Enter your password"
            secureTextEntry={true}
          />
          {error.password ? (
            <Text style={{ color: "red", marginLeft: 8 }}>
              {error.password}
            </Text>
          ) : null}
          <TextInput
            style={
              error.confirmPassword === "" ? styles.input : styles.inputError
            }
            value={formData.confirmPassword}
            onChange={(e) => {
              setFormData({
                ...formData,
                confirmPassword: e.nativeEvent.text,
              });
            }}
            placeholder="Confirm your password"
            secureTextEntry={true}
          />
          {error.confirmPassword ? (
            <Text style={{ color: "red", marginLeft: 8 }}>
              {error.confirmPassword}
            </Text>
          ) : null}
        </View>
        <View>
          <TextInput
            style={error.phoneNumber === "" ? styles.input : styles.inputError}
            value={formData.phoneNumber}
            onChange={(e) => {
              setFormData({ ...formData, phoneNumber: e.nativeEvent.text });
            }}
            placeholder="Enter your phone number"
          />
          {error.phoneNumber ? (
            <Text style={{ color: "red", marginLeft: 8 }}>
              {error.phoneNumber}
            </Text>
          ) : null}
          <TextInput
            // style={error.address === "" ? styles.input : styles.inputError}
            style={styles.textArea}
            multiline={true}
            numberOfLines={5}
            value={formData.address}
            onChange={(e) => {
              setFormData({ ...formData, address: e.nativeEvent.text });
            }}
            placeholder="Enter your address"
          />
          {error.address ? (
            <Text style={{ color: "red", marginLeft: 8 }}>{error.address}</Text>
          ) : null}
          <TextInput
            style={error.city === "" ? styles.input : styles.inputError}
            value={formData.city}
            onChange={(e) => {
              setFormData({ ...formData, city: e.nativeEvent.text });
            }}
            placeholder="Enter your city"
          />
          {error.city ? (
            <Text style={{ color: "red", marginLeft: 8 }}>{error.city}</Text>
          ) : null}
          <TextInput
            style={error.state === "" ? styles.input : styles.inputError}
            value={formData.state}
            onChange={(e) => {
              setFormData({ ...formData, state: e.nativeEvent.text });
            }}
            placeholder="Enter your state"
          />
          {error.state ? (
            <Text style={{ color: "red", marginLeft: 8 }}>{error.state}</Text>
          ) : null}

          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={formData.country}
              onValueChange={(itemValue, itemIndex) =>
                setFormData({ ...formData, country: itemValue })
              }
              style={styles.picker}
              dropdownIconColor="#000"
            >
              <Picker.Item label="select a country" value="" />
              <Picker.Item label="India" value="India" />
              <Picker.Item label="USA" value="USA" />
              <Picker.Item label="Germany" value="Germany" />
            </Picker>
          </View>

          {error.country ? (
            <Text style={{ color: "red", marginLeft: 8 }}>{error.country}</Text>
          ) : null}
          <TextInput
            style={error.zipCode === "" ? styles.input : styles.inputError}
            value={formData.zipCode}
            onChange={(e) => {
              setFormData({ ...formData, zipCode: e.nativeEvent.text });
            }}
            placeholder="Enter your zip code"
          />
          {error.zipCode ? (
            <Text style={{ color: "red", marginLeft: 8 }}>{error.zipCode}</Text>
          ) : null}
        </View>
        <View style={styles.registorButton}>
          <Button
            title="Register"
            onPress={() =>
              submitForm(formData, setError, setModalVisible, navigation)
            }
            buttonStyle={styles.button}
            buttonTextStyle={styles.buttonText}
          />
        </View>
        <View style={{ padding: 30 }}></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: "white",
  },
  modal: {
    flex: 1,
  },
  successText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    color: "green",
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 100, // Add padding to the bottom to avoid content being hidden by the keyboard
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    // backgroundColor: "orange",
    alignItems: "center",
    textAlign: "center",
    margin: 0,
    padding: 10,
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    marginTop: 16,
    borderRadius: 8,
    fontSize: 16,
  },
  inputError: {
    height: 56,
    borderWidth: 1,
    borderColor: "red",
    marginTop: 16,
    padding: 8,
    borderRadius: 8,
  },
  genderContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginTop: 16,
    marginLeft: 4,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    width: "100%",
    // overflow: "hidden",
    marginTop: 16,
  },
  picker: {
    height: 56,
    width: "100%",
    color: "black",
    borderRadius: 8,
    backgroundColor: "transparent",
    fontSize: 16,
  },
  textArea: {
    height: 120,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    textAlignVertical: "top",
    marginTop: 16,
    fontSize: 16,
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
    height: 56,
    justifyContent: "center", // vertically center the text
  },

  datePickerText: {
    fontSize: 16,
    color: "black", // default color
  },
  registorButton: {
    marginTop: 16,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
