//Importar o recurso do bottom tabs
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
const BottomTab = createBottomTabNavigator();

//Importar as telas
import Home from "../Home";
import PatientProfile from "../PatientProfile";

export const Main = () => {
    return (
        <BottomTab.Navigator 
            //Definindo rota inicial
            initialRouteName="Home"
            screenOptions={ ({ route }) => ({
                tabBarStyle:{ backgroundColor: "#FFFFFF", height: 80, paddingTop: 10 },
                tabBarActiveBackgroundColor: "transparent",
                tabBarShowLabel: false,
                headerShown: false,

                tabBarIcon: ({ focused }) => {
                    if( route.name === "Home" ) {
                        return (
                            <>
                            </>
                        )
                    }else {

                    }
                }
            }) }
        >

            <BottomTab.Screen
                name="Home"
                component={Home}
            />
            
            <BottomTab.Screen
                name="Perfil"
                component={PatientProfile}
            />

        </BottomTab.Navigator>
    )
}