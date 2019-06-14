# Omnistack App
Esta é uma aplicação que será criada durante a Semana Omnistack, treinamento online da [Rocketseat](https://rocketseat.com.br).

O treinamento estará disponível do dia 10/06/2019 ao dia 15/06/2019 e visa a utilização de uma stack focada em React.

##  Dia 1 - Ambiente de Desenvolvimento

- Configuração de ambiente e indicação de ferramentas e configurações.

### Ferramentas e configurações requisitadas
- Para o ambiente:

| Recurso | Link |
| ------- | ---- |
| Chocolatey (opcional) | https://chocolatey.org/ |
| NodeJS | https://nodejs.org/en/ |
| React (abordado na explicação) | https://reactjs.org/|
| React Native (abordado na explicação) | https://facebook.github.io/react-native/ |
| Yarn | https://yarnpkg.com/ |
| Visual Studio Code | https://code.visualstudio.com/ |
| Rocketseat ReactJS | https://marketplace.visualstudio.com/items?itemName=rocketseat.RocketseatReactJS |
| Rocketseat React Native | https://marketplace.visualstudio.com/items?itemName=rocketseat.RocketseatReactNative |

- Algumas frescurinhas pra deixar o VSCode bonitinho:

[Dracula Official (tema)](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula).

[Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme).

[Fira Code Font](https://github.com/tonsky/FiraCode).

## Dia 2 - Criando a base da aplicação

- Criação de api rest que será utilziada no frontend com React.

### Recursos adicionais requisitados
| Recurso | Link |
| ------- | ---- |
| Nodemon | https://nodemon.io/ |
| MongoDB Atlas | https://www.mongodb.com/ |
| Mongoose | https://mongoosejs.com/ |
| Insomnia | https://insomnia.rest/ |
| Multer | https://github.com/expressjs/multer |
| Sharp | https://github.com/lovell/sharp |
| Cors | https://github.com/expressjs/cors |
| Socket.io | https://socket.io/ |

## Dia 3 - Construindo a interface web

- Criação de um frontend web para a aplicação utilizando React.

Comando para criar aplicação React com o Yarn:
```
yarn create react-app nome-da-pasta-da-aplicacao
```

### Recursos adicionais requisitados
| Recurso | Link |
| ------- | ---- |
| Create React App | https://facebook.github.io/create-react-app/ |
| React Router Dom | https://github.com/ReactTraining/react-router |
| Axios | https://github.com/axios/axios |
| Socket.io-Client Api | https://socket.io/docs/client-api/ |

## Dia 4 - Desenvolvendo o app mobile

- Criação de um app mobile utilizando o ReactNative.

[Guia da Rocketseat para configuração do ambiente.](https://docs.rocketseat.dev/)

### Recursos adicionais requisitados
| Recurso | Comando | Link |
| ------- | ------- | ---- |
| React Navigation | react-navigation | https://reactnavigation.org/ |
| React Native Gesture Handler | react-native-gesture-handler | https://github.com/kmagiera/react-native-gesture-handler |
| Axios | axios | https://github.com/axios/axios |
| Socket.io-Client Api | socket.io-client | https://socket.io/docs/client-api/ |
| React Native Image Picker | react-native-image-picker | https://github.com/react-native-community/react-native-image-picker |

Para buildar o projeto Android
```
react-native run-android
```

Para fazer o link nativo da biblioteca React NAtive Gesture Handler
```
react-native link react-native-gesture-handler
```

Para caso o React tiver problemas com as dependências:
- No terminal onde está rodando o metro bundler...
```
react-native start --reset-cache
```
