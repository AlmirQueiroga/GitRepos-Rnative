# WeFit ReactNative Test

## Projeto

O projeto consiste no desenvolvimento de um plataforma mobile que acessa a api do github e retorna os respositórios 
selecionados e navegação com funcionalidade de favoritar repositórios, com design realizado no figma para adaptação.

https://user-images.githubusercontent.com/28552417/194902580-b720d1b0-0871-4fdb-b910-f494d906a268.mp4

## Considerações

Foi optado pela utilização da arquitetura ContextApi para lidar com os estados compartilhados paara toda aplicação
e AsyncStorage para salvar tais dados que forem favoritados, assim a aplicação não perde estes dados. Além disso foi
optado pela criação utilizando expo que ja disponibiliza templates de navegação por bottom tabs e apresenta uma melhor
eficiência e desempenho

## SplashScreen

Inicialmente foi considerado utilizar a prropriedade padrão do expo de gerenciar splash screens, mas esta funcionalidade
requer uma imagem disponibilizada que é expandida ao iniciar a aplicação. Tal funcionalidade apresenta problemas em alguns
dispositivos android e por decorrência disso e por já estar utilizando a logo como um componente separado e não como imagem
para ainda ser modelada em um png,foi optado em desenvolver minha própria splash screen, que apresenta duração de dois segundos
ao abrir o aplicativo que é chamado diretamente antes do navigation. Mas foi mantida a base de splash do expo caso ache a mudança
mais favorável

![image](https://user-images.githubusercontent.com/28552417/194907860-75adc2ae-c5d9-4634-9972-904d153f2cb4.png)
![image](https://user-images.githubusercontent.com/28552417/194907980-6afae446-55af-42ef-aedd-6c75d4934e8c.png)

 ## Aplicação

A aplicação em si é bem simples, consiste na splashscreen, um header e abaixo das duas telas navegaveis por bottom tab,  como falei 
antes é utilizado Context e a partir daí são retornados os repositórios exibidos pela aplicação, sendo os favortiros storados. Foram 
utilizadas bastante variáveis de alteração de CSS para alterar design de repositórios.

## Modal e Dialog Error

O modal desemvolvido é instanciado junto com o DialogError e o RootNavigator, desta forma os dois podem ser acessados em toda  intância 
do aplicativo, sendo o Modal relacionado ao serachBar que lida com a troca de usuários e o erro ao o searchBar não encontrar nenhum user
relacionado

### Bibliotecas utilizadas

"@expo/vector-icons": "^13.0.0",
"@react-native-async-storage/async-storage": "^1.17.10",
"@react-navigation/bottom-tabs": "^6.0.5",
"@react-navigation/native": "^6.0.2",
"@react-navigation/native-stack": "^6.1.0",
"@react-navigation/stack": "^6.3.2",
"@types/react-native-vector-icons": "^6.4.12",
"axios": "^1.1.0",
"expo": "~46.0.13",
"expo-asset": "~8.6.1",
"expo-constants": "~13.2.4",
"expo-font": "~10.2.1",
"expo-linking": "~3.2.2",
"expo-splash-screen": "~0.16.2",
"expo-system-ui": "~1.3.0",
"expo-web-browser": "~11.0.0",
"react": "18.0.0",
"react-dom": "18.0.0",
"react-native": "0.69.6",
"react-native-paper": "^4.12.5",
"react-native-safe-area-context": "4.3.1",
"react-native-screens": "~3.15.0",
"react-native-vector-icons": "^9.2.0",
"react-native-web": "~0.18.7",
"@babel/core": "^7.12.9",
"@types/react": "~18.0.14",
"@types/react-native": "~0.69.1",
"jest": "^26.6.3",
"jest-expo": "~44.0.1",
"react-test-renderer": "18.0.0",
"typescript": "~4.3.5"

### TODO

PIXEL PERFECT --> substituir margins e %; 
Arquivo type para armazenar todas as interfaces utilizadas; 
Desing da barra de pesquisa parece meio off; 
Colocar nome do último usuário selecionado em storage; 
Animação para splash screen; 
global.d.ts para fonts e svgs; 
Trocar icons por Svgs; 
Importar Inter font; 
Utlizar expo splash screen? 
Utilizar SSR? 
