import { Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({
  buttonStyle,
  buttonTextStyle,
  title,
  onPress,
}) {
  return (
    <TouchableOpacity style={{ width: "100%" }} onPress={onPress}>
      <View style={buttonStyle}>
        <Text style={buttonTextStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
