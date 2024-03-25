import { Container, ContainerScroll } from "../components/Container/Style";
import { Button, ButtonTxt, ExitButton } from "../components/EntryButton/Style";
import { ImgProfile } from "../components/ImgProfile/Style";
import { BoxInput, BoxInputRow, DirectionRow, InputBlock, InputBodyRow } from "../components/Input/Style";
import { Subtitle, Title, TitleInput } from "../components/Title/Style";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const PatientProfile = ({ navigation }) => {
    
    async function logout() {
        await AsyncStorage.removeItem('token');
        navigation.navigate("Login")
    }

    return (
        <Container>
            <ImgProfile source={require("../assets/img/chewie.jpg")} />

            <Title> Chewie </Title>
            <Subtitle> chewie@email.com </Subtitle>

            <ContainerScroll>
                <BoxInput>
                    <TitleInput> Data de nascimento </TitleInput>
                    <InputBlock> 08/08/2018 </InputBlock>
                </BoxInput>

                <BoxInput>
                    <TitleInput> CPF </TitleInput>
                    <InputBlock> 859******** </InputBlock>
                </BoxInput>

                <BoxInput>
                    <TitleInput> Endereço </TitleInput>
                    <InputBlock> Rua Luis Ântico, 623 </InputBlock>
                </BoxInput>

                <DirectionRow>
                    <BoxInputRow>
                        <TitleInput> Cep </TitleInput>
                        <InputBodyRow>09360-610</InputBodyRow>
                    </BoxInputRow>

                    <BoxInputRow>
                        <TitleInput> Cidade </TitleInput>
                        <InputBodyRow>Mauá-SP</InputBodyRow>
                    </BoxInputRow>
                </DirectionRow>

                <Button onPress={() => navigation.navigate("EditPatientProfile")}>
                    <ButtonTxt> EDITAR </ButtonTxt>
                </Button>

                <ExitButton onPress={() => logout()}>
                    <ButtonTxt> Sair </ButtonTxt>
                </ExitButton>

            </ContainerScroll>

        </Container>
    );
}
export default PatientProfile;