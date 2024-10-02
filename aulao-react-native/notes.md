# Anotações

* React Native: para começar projeto use:
  ```powershell
  npx create-expo-app@latest aulao-react-native
  ```
* use `npm run web` para rodar o projeto no browser;
* navigation-drawer:
  ```powershell
  npm i @react-navigation/drawer
  npm i @react-navigation/stack

  ```
* Segue com a eliminação das pastas `app`, `components`, `constants`;
* Altera script no `package.json` para :
  ```vim
     "name": "aulao-react-native",
     "main": "src/index.js",
     "version": "1.0.0",
  ```
* Só coloca texto dentro da tag `<Text></Text>`

# Como faço para rodar um dispositivo mobile no computador?

* Instale o android studio;
* Vá em Virtual Device Manager;
* Crie um dispositivo virtual novo;
* Deixe rodando;
* Vai no projeto e:
  ```bash
  npm install -g expo-cli

  npx expo start
  ```
