import { Button, View } from "react-native";

export const Navigation = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "Center", gap: 25}}>
            <Button 
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />

            <Button 
                title="CreateAccount"
                onPress={() => navigation.navigate("CreateAccount")}
            />

            <Button 
                title="Home"
                onPress={() => navigation.navigate("Home")}
            />

            <Button 
                title="ResetPassword"
                onPress={() => navigation.navigate("ResetPassword")}
            />

            <Button 
                title="SetPassword"
                onPress={() => navigation.navigate("SetPassword")}
            />

            <Button 
                title="VerifyEmail"
                onPress={() => navigation.navigate("VerifyEmail")}
            />
        </View>
    );
}
export default Navigation;