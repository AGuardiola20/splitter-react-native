import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import TotalItem from "./TotalItem";
import useFont from "../hooks/useFont";

interface Props {
  tipTotal: number;
  total: number;
  reset: () => void;
}

const TotalCard: React.FC<Props> = ({ tipTotal, total, reset }) => {
  const font = useFont();
  return (
    <View style={styles.container}>
      <TotalItem title="Tip Amount" amount={parseFloat(tipTotal.toFixed(2))} />
      <TotalItem title="Total" amount={parseFloat(total.toFixed(2))} />
      <TouchableOpacity style={styles.button} onPress={reset}>
        <Text style={[styles.buttonText, { fontFamily: font }]}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.darkCyan,
    gap: 16,
    borderRadius: 10,
  },
  button: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 25,
    textTransform: "uppercase",
    color: colors.darkCyan,
  },
});

export default TotalCard;
