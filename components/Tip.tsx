import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import useFont from "../hooks/useFont";

interface Props {
  tip: number | string;
  isActive: boolean;
  selectedTip: (tip) => void;
}

const Tip: React.FC<Props> = ({ tip, isActive, selectedTip }) => {
  const font = useFont();
  const isCustom = tip === "Custom";
  return (
    <TouchableOpacity
      style={{
        flex: 2,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isCustom
          ? colors.VeryLightGrayishCyan
          : isActive
          ? colors.primary
          : colors.darkCyan,
        borderRadius: 8,
      }}
      onPress={selectedTip}
    >
      <Text
        style={{
          fontSize: 24,
          fontFamily: font,
          color: isCustom
            ? colors.darkGrayishCyan
            : isActive
            ? colors.darkCyan
            : colors.white,
        }}
      >
        {tip}
        {!isCustom && "%"}
      </Text>
    </TouchableOpacity>
  );
};

export default Tip;
