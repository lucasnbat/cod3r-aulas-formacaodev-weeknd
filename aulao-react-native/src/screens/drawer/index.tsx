import { Text, View, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Inicio from "./Inicio";
import Texto from "./Texto";
import Imagem from "./Imagem";
import Rolagem from "./Rolagem";
import Botao from "./Botao";

export default function App() {
  const Drawer = createDrawerNavigator();

  function tela(props: {
    nome: string;
    icone: string;
    titulo: string;
    componente: any;
  }) {
    return (
      <Drawer.Screen
        name={props.nome}
        component={props.componente}
        options={{
          drawerIcon: ({ focused }: any) => (
            <Ionicons
              name={props.icone as any}
              size={24}
              color={focused ? "#1C80FF" : "#000"}
            />
          ),
          drawerLabel: props.titulo,
          title: props.titulo,
        }}
      />
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {tela({
          nome: "Tela de Inicio",
          icone: "home-outline",
          titulo: "Título de início",
          componente: Inicio,
        })}
        {tela({
          nome: "Tela de Texto",
          icone: "text-outline",
          titulo: "Título de texto",
          componente: Texto,
        })}
        {tela({
          nome: "Tela de imagem",
          icone: "image-outline",
          titulo: "Imagem",
          componente: Imagem,
        })}
        {tela({
          nome: "Tela de scroll",
          icone: "list-outline",
          titulo: "Scroll",
          componente: Rolagem,
        })}
        {tela({
          nome: "Tela de botao",
          icone: "ellipse-outline",
          titulo: "Botao",
          componente: Botao,
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "red",
    fontWeight: "bold",
  },
});
