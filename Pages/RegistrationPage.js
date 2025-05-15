import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
// import { RadioButton } from "react-native-paper";
import { useState } from "react";
import RadioButton from "../Components/RadioButton";

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
  });
}
function validateForm(formData, setError) {
  clearError(setError);
  if (!formData.firstName) {
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
    setError((prev) => ({
      ...prev,
      zipCode: zipCodeError,
    }));
  }
  let dateOfBirthError = "";
  if (!formData.dateOfBirth) {
    dateOfBirthError = "Date of birth is required";
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.dateOfBirth)) {
    dateOfBirthError = "Date of birth must be in YYYY-MM-DD format";
  }
  if (dateOfBirthError) {
    setError((prev) => ({
      ...prev,
      dateOfBirth: dateOfBirthError,
    }));
  }
}
export default function RegistrationPage() {
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
    dateOfBirth: "",
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Registration Page</Text>
        <Text></Text>
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
            <Text style={{ color: "red" }}>{error.firstName}</Text>
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
            <Text style={{ color: "red" }}>{error.lastName}</Text>
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
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Gender</Text>
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
          <Text style={{ color: "red" }}>{error.gender}</Text>
        ) : null}
        <View>
          <View>
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
              <Text style={{ color: "red" }}>{error.email}</Text>
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
              <Text style={{ color: "red" }}>{error.password}</Text>
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
              <Text style={{ color: "red" }}>{error.confirmPassword}</Text>
            ) : null}
          </View>
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
            <Text style={{ color: "red" }}>{error.phoneNumber}</Text>
          ) : null}
          <TextInput
            style={error.address === "" ? styles.input : styles.inputError}
            value={formData.address}
            onChange={(e) => {
              setFormData({ ...formData, address: e.nativeEvent.text });
            }}
            placeholder="Enter your address"
          />
          {error.address ? (
            <Text style={{ color: "red" }}>{error.address}</Text>
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
            <Text style={{ color: "red" }}>{error.city}</Text>
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
            <Text style={{ color: "red" }}>{error.state}</Text>
          ) : null}
          <TextInput
            style={error.country === "" ? styles.input : styles.inputError}
            value={formData.country}
            onChange={(e) => {
              setFormData({ ...formData, country: e.nativeEvent.text });
            }}
            placeholder="Enter your country"
          />
          {error.country ? (
            <Text style={{ color: "red" }}>{error.country}</Text>
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
            <Text style={{ color: "red" }}>{error.zipCode}</Text>
          ) : null}
          <TextInput
            style={error.dateOfBirth === "" ? styles.input : styles.inputError}
            onChange={(e) => {
              setFormData({ ...formData, dateOfBirth: e.nativeEvent.text });
            }}
            placeholder="Enter your date of birth"
          />
          {error.dateOfBirth ? (
            <Text style={{ color: "red" }}>{error.dateOfBirth}</Text>
          ) : null}
        </View>
        <View>
          <Button
            title="Register"
            onPress={() => validateForm(formData, setError)}
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
    paddingTop: 50,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    backgroundColor: "orange",
    margin: 0,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
  },
  inputError: {
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    marginBottom: 10,
  },
  genderContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10,
  },
});
