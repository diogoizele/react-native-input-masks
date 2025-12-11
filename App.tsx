import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";

import { useState } from "react";
import { TextField } from "./lib/components/TextField";
import Colors from "./lib/constants/Colors";
import { rawToDecimal } from "./lib/masks/decimal";

export default function App() {
  const [text, setText] = useState("");
  const [isDecimalFormat, setIsDecimalFormat] = useState(true);

  const handleStaticFormat = (value: string) => {
    if (isDecimalFormat) {
      return rawToDecimal(value, 8);
    }

    return value;
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>Input Masks</Text>
        <StatusBar style="auto" />
        <TextField
          label="No Mask"
          placeholder="Digite algo..."
          value={text}
          onChangeText={setText}
        />
        <TextField
          label="Phone Mask"
          placeholder="(xx) xxxx-xxxx"
          value={text}
          mask="phone"
          keyboardType="numeric"
          maxLength={16}
          onChangeText={setText}
        />
        <TextField
          label="CPF Mask"
          placeholder="xxx.xxx.xxx-xx"
          value={text}
          mask="cpf"
          maxLength={14}
          onChangeText={setText}
        />
        <TextField
          label="Decimal Mask"
          placeholder="0,00"
          value={text}
          mask="decimal"
          keyboardType="numeric"
          decimalPlaces={8}
          decimalSeparator=","
          onChangeText={setText}
        />
        <View style={styles.switchContainer}>
          <Text>Use Decimal.js Formatter</Text>
          <Switch value={isDecimalFormat} onValueChange={setIsDecimalFormat} />
        </View>
        <Text>{handleStaticFormat(text)}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.gray[100],
  },
  container: {
    flex: 1,
    margin: 24,
    marginTop: 48,
    gap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.gray[800],
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
