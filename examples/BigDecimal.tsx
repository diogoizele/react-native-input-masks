import { useState } from "react";
import Decimal from "decimal.js";
import { StyleSheet, Text, View } from "react-native";

import { TextField } from "../lib/components/TextField";

type Props = {
  decimalPlaces?: number;
};

export function BigDecimalExample({ decimalPlaces = 2 }: Props) {
  const [text, setText] = useState("");
  const [value, setValue] = useState<Decimal | null>(null);

  function convertToDomainValue(text: string): Decimal | null {
    if (!text) return null;
    if (text.endsWith(",")) return null;

    const normalized = text.replace(/\./g, "").replace(",", ".");

    return new Decimal(normalized);
  }

  function handleBlur() {
    const domainValue = convertToDomainValue(text);
    setValue(domainValue);
  }

  return (
    <View style={styles.container}>
      <TextField
        mask="big-decimal"
        placeholder={`0,${"0".repeat(decimalPlaces)}`}
        decimalPlaces={decimalPlaces}
        keyboardType="decimal-pad"
        value={text}
        onChangeText={setText}
        onBlur={handleBlur}
      />
      <Text>Typed text: {text}</Text>
      <Text>Domain value {value?.toString()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
  },
});
