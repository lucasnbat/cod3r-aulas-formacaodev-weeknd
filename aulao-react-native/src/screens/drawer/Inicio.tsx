// tela padrão que vai aparecer

import { StyleSheet, Text, View } from "react-native";

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>React Native</Text>
      <Text style={styles.ajuda}>Use Drawer navigation para navegar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "300",
  },
  ajuda: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    paddingHorizontal: 30,
  },
});
