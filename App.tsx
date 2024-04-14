import { Text, View, StyleSheet } from "react-native";
import { colors } from "./colors";
import InputForm from "./components/InputForm";
import { useEffect, useState } from "react";
import useFont from "./hooks/useFont";
import { SafeAreaView } from "react-native-safe-area-context";
import Tip from "./components/Tip";
import TitleSection from "./components/TitleSection";
import TotalCard from "./components/TotalCard";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function App() {
  const [billValue, setBillValue] = useState("");
  const [numberPeople, setNumberPeople] = useState("");
  const [tipChanged, setTipChanged] = useState(0);
  const [tipTotal, setTipTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const font = useFont();

  const [tips, setTips] = useState([
    { tip: 5, active: false, percentage: 0.05 },
    { tip: 10, active: false, percentage: 0.1 },
    { tip: 15, active: false, percentage: 0.15 },
    { tip: 20, active: false, percentage: 0.2 },
    { tip: 50, active: false, percentage: 0.5 },
    { tip: "Custom", active: false, percentage: 0.5 },
  ]);

  const handlerBillValueChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setBillValue(numericValue);
    setTotal(parseInt(numericValue) + tipTotal);
  };
  const handleTipPress = (index: number) => {
    const updatedTips = tips.map((tip, i) => {
      if (i === index) {
        return { ...tip, active: !tip.active };
      } else {
        return { ...tip, active: false };
      }
    });
    setTips(updatedTips);
    setTipChanged((prevTipChanged) => prevTipChanged + 1);
  };
  const handleNumberPeople = (people: string) => {
    const numericValue = people.replace(/[^0-9]/g, "");
    setNumberPeople(numericValue);
  };
  const handlerReset = () => {
    setBillValue("");
    setNumberPeople("");
    setTotal(0);
    setTipTotal(0);
    const updatedTips = tips.map((tip, i) => {
      return { ...tip, active: false };
    });
    setTips(updatedTips);
  };

  useEffect(() => {
    const tipPercentage = getTipPercentage();
    if (parseInt(billValue) >= 0 && tipPercentage !== undefined) {
      setTipTotal(parseInt(billValue) * tipPercentage.percentage);
    }
  }, [billValue, tipChanged]);
  useEffect(() => {
    setTotal(parseInt(billValue) + tipTotal);
  }, [tipTotal]);

  function getTipPercentage() {
    const tipPercentage = tips.filter((tip) => tip.active === true)[0];
    return tipPercentage;
  }

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
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flex: 1, gap: 15, marginRight: 15 }}>
                {tips.slice(0, Math.ceil(tips.length / 2)).map((tip, index) => (
                  <Tip
                    key={index}
                    tip={tip.tip}
                    isActive={tip.active}
                    selectedTip={() => handleTipPress(index)}
                  />
                ))}
              </View>
              <View style={{ flex: 1, gap: 15 }}>
                {tips.slice(Math.ceil(tips.length / 2)).map((tip, index) => (
                  <Tip
                    key={index}
                    tip={tip.tip}
                    isActive={tip.active}
                    selectedTip={() =>
                      handleTipPress(index + Math.ceil(tips.length / 2))
                    }
                  />
                ))}
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
            <TotalCard
              tipTotal={tipTotal}
              total={
                numberPeople === ""
                  ? total
                  : parseInt(billValue) >= 0
                  ? parseInt(billValue) / parseInt(numberPeople) + tipTotal
                  : 0
              }
              reset={handlerReset}
            />
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
