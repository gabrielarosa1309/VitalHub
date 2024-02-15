import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./src/screens/Navigation";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import CreateAccount from "./src/screens/CreateAccount";
import ResetPassword from "./src/screens/ResetPassword";
import SetPassword from "./src/screens/SetPassword";
import VerifyEmail from "./src/screens/VerifyEmail";
import SelectClinic from "./src/screens/SelectClinic";
import SelectDoctor from "./src/screens/SelectDoctor";

//instância do StackNavigator
const Stack = createNativeStackNavigator();

//import das fonts
import { useFonts, MontserratAlternates_700Bold, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium } from "@expo-google-fonts/montserrat-alternates";
import { Quicksand_500Medium, Quicksand_600SemiBold } from "@expo-google-fonts/quicksand";

export default function App() {

  const[fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_700Bold,
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    Quicksand_500Medium,
    Quicksand_600SemiBold
  })

  if(!fontsLoaded && !fontsError){
    return null;
  }

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

        <Stack.Screen
          name="SelectClinic" //nome da tela
          component={SelectClinic} //componente q será chamado
          options={{title: 'SelectClinic'}} //titulo da tela
        />

        <Stack.Screen
          name="SelectDoctor" //nome da tela
          component={SelectDoctor} //componente q será chamado
          options={{title: 'SelectDoctor'}} //titulo da tela
        />

      </Stack.Navigator>

    </NavigationContainer>
  )
}