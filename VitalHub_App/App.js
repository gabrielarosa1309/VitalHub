import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./src/screens/Navigation";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import CreateAccount from "./src/screens/CreateAccount";
import ResetPassword from "./src/screens/ResetPassword";
import SetPassword from "./src/screens/SetPassword";
import VerifyEmail from "./src/screens/VerifyEmail";

//instância do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {
  return(
    //Estrutura da navegação
    <NavigationContainer>

      {/* Componente para navegação */}
      <Stack.Navigator>

        <Stack.Screen
          name="Navigation" //nome da tela
          component={Navigation} //componente q será chamado
          options={{title: 'Navigation'}} //titulo da tela
        />

        <Stack.Screen
          name="Login" //nome da tela
          component={Login} //componente q será chamado
          options={{title: 'Login'}} //titulo da tela
        />

        <Stack.Screen
          name="Home" //nome da tela
          component={Home} //componente q será chamado
          options={{title: 'Home'}} //titulo da tela
        />

        <Stack.Screen
          name="CreateAccount" //nome da tela
          component={CreateAccount} //componente q será chamado
          options={{title: 'CreateAccount'}} //titulo da tela
        />

        <Stack.Screen
          name="ResetPassword" //nome da tela
          component={ResetPassword} //componente q será chamado
          options={{title: 'ResetPassword'}} //titulo da tela
        />

        <Stack.Screen
          name="SetPassword" //nome da tela
          component={SetPassword} //componente q será chamado
          options={{title: 'SetPassword'}} //titulo da tela
        />

        <Stack.Screen
          name="VerifyEmail" //nome da tela
          component={VerifyEmail} //componente q será chamado
          options={{title: 'VerifyEmail'}} //titulo da tela
        />

      </Stack.Navigator>

    </NavigationContainer>
  )
}