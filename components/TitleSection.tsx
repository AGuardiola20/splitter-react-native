import React from "react";
import { Text } from "react-native";
import { colors } from "../colors";
import useFont from "../hooks/useFont";

interface Props {
  title: string;
}

const TitleSection: React.FC<Props> = ({ title }) => {
  const font = useFont();
  return (
    <Text
      style={{
        fontFamily: font,
        fontSize: 18,
        color: colors.grayishCyan,
        marginBottom: 16,
      }}
    >
      {title}
    </Text>
  );
};

export default TitleSection;
