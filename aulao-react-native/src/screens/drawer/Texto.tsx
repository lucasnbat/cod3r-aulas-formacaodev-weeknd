import { Text, View, StyleSheet } from "react-native";

export default function Texto() {
  return (
    <View style={styles.container}>
      <Text style={styles.primeiro}>Texto 1</Text>
      <Text style={styles.secundario}>Texto 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  primeiro: {
    textAlign: "center",
    fontSize: 20,
    padding: 10,
    color: "blue",
    fontWeight: "bold",
  },
  secundario: {
    textAlign: "center",
    fontSize: 20,
    padding: 10,
    color: "green",
    fontStyle: "italic",
  },
});
