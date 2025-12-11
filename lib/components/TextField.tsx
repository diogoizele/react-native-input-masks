import {
  ForwardedRef,
  forwardRef,
  RefObject,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

import Colors from "../constants/Colors";
import masks from "../masks";

export interface TextFieldProps extends TextInputProps {
  ref?: RefObject<TextInput>;
  label?: string;
  mask?: "phone" | "cpf" | "decimal";
  decimalPlaces?: number;
  decimalSeparator?: "," | ".";
}

const TextFieldComponent = (
  {
    label,
    value = "",
    defaultValue,
    mask,
    decimalPlaces,
    decimalSeparator,
    onChangeText,
    ...props
  }: TextFieldProps,
  ref: ForwardedRef<TextInput>
) => {
  const [text, setText] = useState(value ?? defaultValue);

  const textFieldRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => textFieldRef.current as TextInput, [
    textFieldRef.current,
  ]);

  const handleInterceptChange = (value: string) => {
    let _value = value;

    if (mask) {
      const { parse } = masks[mask];

      _value = String(parse(_value));
    }

    if (onChangeText) {
      onChangeText(_value);
    }

    setText(_value);
  };

  const handleFormatValueView = (value: string) => {
    if (mask) {
      const { format } = masks[mask];

      if (mask === "decimal") {
        return format(value, decimalPlaces, decimalSeparator);
      }

      return format(value);
    }

    return value;
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.textInput}
        {...props}
        ref={textFieldRef}
        value={handleFormatValueView(text)}
        onChangeText={handleInterceptChange}
      />
    </View>
  );
};

export const TextField = forwardRef(TextFieldComponent);

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  label: {
    color: Colors.gray[800],
    fontSize: 12,
    marginLeft: 4,
  },
  textInput: {
    borderColor: Colors.gray[400],
    borderWidth: 1,
    height: 48,
    padding: 12,
    borderRadius: 8,
    width: "100%",
  },
});
