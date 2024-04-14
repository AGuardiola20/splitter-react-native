import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";

const useFont = () => {
  const [font, setFont] = useState("sans-serif");
  const [fontsLoaded] = useFonts({
    SpaceMonoBold: require("../assets/fonts/SpaceMono-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      setFont("SpaceMonoBold");
    }
  }, [fontsLoaded]);

  return font;
};

export default useFont;
