import { PropsWithChildren, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = PropsWithChildren<{
  title?: string;
}>;

export function ExampleAccordion({ children, title }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsOpen(!isOpen)}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {isOpen ? "▼" : "▶"} {title}
        </Text>
      </View>
      {isOpen && <View style={styles.content}>{children}</View>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "#f0f0f0",
    padding: 12,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    padding: 12,
  },
});
