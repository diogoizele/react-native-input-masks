import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { useState } from "react";
import { TextField } from "./lib/components/TextField";
import Colors from "./lib/constants/Colors";

export default function App() {
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>Input Masks</Text>
        <StatusBar style="auto" />
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
          placeholder="Digite algo..."
          value={text}
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
        <Text>{text}</Text>
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
});
