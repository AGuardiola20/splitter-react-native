import { TextInput, View, StyleSheet } from "react-native";
import useFont from "../hooks/useFont";
import { colors } from "../colors";
import DolarIcon from "./icons/DolarIcon";
import PersonIcon from "./icons/PersonIcon";

interface Props {
  value: number | string;
  placeholder: string;
  onChange: (text: string) => void;
}

const InputForm: React.FC<Props> = ({ value, placeholder, onChange }) => {
  const font = useFont();

  return (
    <View style={styles.container}>
      {placeholder === "Total bill" ? (
        <DolarIcon color={colors.darkCyan} size={24} />
      ) : (
        <PersonIcon color={colors.darkCyan} size={24} />
      )}

      <TextInput
        style={{
          fontSize: 24,
          color: colors.darkCyan,
          fontFamily: font,
          flex: 1,
          textAlign: "right",
        }}
        keyboardType="numeric"
        placeholder={placeholder}
        value={String(value)}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderColor: colors.grayishCyan,
    backgroundColor: colors.VeryLightGrayishCyan,
    borderRadius: 5,
  },
});

export default InputForm;
