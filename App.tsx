import { StatusBar } from "expo-status-bar";
import {
  Button,
  Keyboard,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

import { useState } from "react";
import { TextField } from "./lib/components/TextField";
import Colors from "./lib/constants/Colors";
import { rawToDecimal } from "./lib/masks/decimal";
import { ExampleAccordion } from "./examples/base/ExampleAccordion";
import { BigDecimalExample } from "./examples/BigDecimal";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  const [isDecimalFormat, setIsDecimalFormat] = useState(false);

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
          label="Brazilian Decimal Mask"
          placeholder="0,00"
          value={text}
          mask="decimal"
          keyboardType="numeric"
          decimalPlaces={2}
          decimalSeparator=","
          onChangeText={setText}
        />
        <View style={styles.switchContainer}>
          <Text>Use Decimal.js Formatter</Text>
          <Switch value={isDecimalFormat} onValueChange={setIsDecimalFormat} />
        </View>
        <Text>{handleStaticFormat(text)}</Text>
        <Button title="See all" onPress={() => setModalVisible(true)} />
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        statusBarTranslucent
        presentationStyle="overFullScreen"
      >
        <ScrollView>
          <Pressable style={styles.container} onPress={Keyboard.dismiss}>
            <Text style={styles.title}>All Examples Here</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
            <ExampleAccordion title="BigDecimal">
              <BigDecimalExample decimalPlaces={7} />
            </ExampleAccordion>
          </Pressable>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 24,
    marginTop: Platform.select({ android: 48, ios: 64 }),
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
