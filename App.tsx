import { Text, View, StyleSheet } from "react-native";
import { colors } from "./colors";
import InputForm from "./components/InputForm";
import { useState } from "react";
import useFont from "./hooks/useFont";
import { SafeAreaView } from "react-native-safe-area-context";
import Tip from "./components/Tip";
import TitleSection from "./components/TitleSection";
import TotalCard from "./components/TotalCard";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const TIPS = [5, 10, 15, 25, 50];

export default function App() {
  const [billValue, setBillValue] = useState("");
  const [numberPeople, setNumberPeople] = useState("");
  const [selectedTip, setSelectedTip] = useState();
  const [isActive, setIsActive] = useState();
  const font = useFont();
  const isTipActive = false;
  const handlerBillValueChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setBillValue(numericValue);
  };
  const handleTipPress = (tip) => {
    setSelectedTip(tip);
  };
  const handleNumberPeople = (people) => {
    setSelectedTip(people);
  };

  return (
    <KeyboardAwareScrollView scrollEnabled={true}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colors.lightGrayishCyan,
        }}
      >
        <View style={{ alignItems: "center", paddingVertical: 34 }}>
          <Text style={[styles.title, { fontFamily: font }]}>Split</Text>
          <Text style={[styles.title, { fontFamily: font }]}>Calculator</Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.white,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: 24,
            gap: 30,
          }}
        >
          <View>
            <TitleSection title="Bill" />
            <InputForm
              value={billValue}
              placeholder="Total bill"
              onChange={handlerBillValueChange}
            />
          </View>

          <View>
            <TitleSection title="Select Tip %" />
            <View style={{ gap: 20 }}>
              <View style={styles.tipRow}>
                <Tip
                  tip={5}
                  isActive={isTipActive}
                  selectedTip={handleTipPress}
                />
                <Tip
                  tip={10}
                  isActive={isTipActive}
                  selectedTip={handleTipPress}
                />
              </View>
              <View style={styles.tipRow}>
                <Tip tip={15} isActive={true} selectedTip={handleTipPress} />
                <Tip
                  tip={25}
                  isActive={isTipActive}
                  selectedTip={handleTipPress}
                />
              </View>
              <View style={styles.tipRow}>
                <Tip
                  tip={50}
                  isActive={isTipActive}
                  selectedTip={handleTipPress}
                />
                <Tip
                  tip={"Custom"}
                  isActive={isTipActive}
                  selectedTip={handleTipPress}
                />
              </View>
            </View>
          </View>

          <View>
            <TitleSection title="Number of People" />
            <InputForm
              value={numberPeople}
              placeholder="People"
              onChange={handleNumberPeople}
            />
          </View>

          <View>
            <TotalCard amount={30} />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: colors.darkCyan,
    textTransform: "uppercase",
    textAlign: "center",
  },
  tipRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
});
