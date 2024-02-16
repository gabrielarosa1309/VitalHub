import { View, Image } from "react-native";
import { BoxUser, GradientBackground, HomeHeader, TextHome, TitleWhite, UserIcon } from "../Header/Style";
import { ContainerUser } from "../Container/Style";

export const Header = () => {
    return (

        <GradientBackground>
            <HomeHeader>
                <BoxUser>
                    <UserIcon source={require('../../assets/img/medico4.png')} />
                    <View>
                        <TextHome>Bem-vindo</TextHome>
                        <TitleWhite>Dr. Claudio</TitleWhite>
                    </View>
                </BoxUser>

                <Image style={{ marginLeft: 90 }} source={require('../../assets/icons/bell.png')} />
            </HomeHeader>
        </GradientBackground>

    );
}
export default Header;