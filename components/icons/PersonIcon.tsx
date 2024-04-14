import React from "react";
import { Svg, Path } from "react-native-svg";

interface Props {
  color: string;
  size: number;
}

const PersonIcon: React.FC<Props> = ({ color, size }) => {
  return (
    <Svg height={size} viewBox="0 0 24 24" width={size}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        fill={color}
      />
    </Svg>
  );
};

export default PersonIcon;
