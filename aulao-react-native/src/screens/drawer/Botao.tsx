import { Button, StyleSheet, View } from "react-native";

export default function Botao() {
  const quandoClicar = () => {
    alert("Clicou!!");
  };

  return (
    <View style={styles.container}>
      <Button title="Clique" onPress={quandoClicar} color="#ff0000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
