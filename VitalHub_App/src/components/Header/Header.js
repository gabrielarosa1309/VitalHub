import { View } from "react-native";
import { BoxNotif, BoxUser, GradientBackground, HomeHeader, TextHome, TitleWhite, UserIcon } from "../Header/Style";
import { Octicons } from '@expo/vector-icons';

export const Header = ({
    img,
    name
}) => {
    return (

        <GradientBackground>
            <HomeHeader>
                <BoxUser>
                    <UserIcon source={img} />
                    <View>
                        <TextHome>Bem-vindo</TextHome>
                        <TitleWhite>{name}</TitleWhite>
                    </View>
                </BoxUser>

                <Octicons
                    name="bell-fill"
                    size={24}
                    color="white"
                />
            </HomeHeader>
        </GradientBackground>

    );
}
export default Header;