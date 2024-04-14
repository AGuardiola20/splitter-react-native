import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../colors";
import useFont from "../hooks/useFont";

interface Props {
  title: string;
  amount: number;
}

const TotalItem: React.FC<Props> = ({ title, amount }) => {
  const font = useFont();
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.title, { fontFamily: font }]}>{title}</Text>
        <Text style={[styles.subtitle, { fontFamily: font }]}>/ person</Text>
      </View>
      <View>
        <Text style={[styles.amount, { fontFamily: font }]}>${amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    color: colors.white,
    fontSize: 16,
  },
  subtitle: {
    color: colors.darkGrayishCyan,
  },
  amount: {
    color: colors.primary,
    fontSize: 30,
  },
});

export default TotalItem;
