import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../colors";
import TotalItem from "./TotalItem";
import useFont from "../hooks/useFont";

interface Props {
  amount: number;
}

const TotalCard: React.FC<Props> = ({ amount }) => {
  const font = useFont();
  return (
    <View style={styles.container}>
      <TotalItem title="Tip Amount" amount={amount} />
      <TotalItem title="Total" amount={amount} />
      <TouchableOpacity style={styles.button}>
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
