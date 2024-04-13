import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import { colors } from './colors';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    'SpaceMonoBold': require('./assets/fonts/SpaceMono-Bold.ttf'),
  });
  const [font, setFont] = useState('sans-serif');
  useEffect(() => {
    setFont('SpaceMonoBold');
  }, [fontsLoaded]);
  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.lightGrayishCyan,}}>
      <Text style={ { fontFamily: font,fontSize: 24}}>Tip Calculator</Text>
      <StatusBar style="auto" />

    </SafeAreaView>
  );
}

