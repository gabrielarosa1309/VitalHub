import { Container } from "../components/Container/Style";
import { ImgLocal } from "../components/ImgProfile/Style";
import { BoxInput, BoxInputRow, DirectionRow, InputBlock, InputBodyRow } from "../components/Input/Style";
import { Subtitle, Title, TitleInput } from "../components/Title/Style";

export const Localization = () => {
    return (
        <Container>
            <ImgLocal source={require("../assets/img/local.png")} />

            <Title> Clínica Natureh </Title>
            <Subtitle> São Paulo, SP </Subtitle>

            <BoxInput>
                <TitleInput> Endereço </TitleInput>
                <InputBlock>Rua Vicenso Silva, 987</InputBlock>
            </BoxInput>

            <DirectionRow>
                <BoxInputRow>
                    <TitleInput> Número </TitleInput>
                    <InputBodyRow>578</InputBodyRow>
                </BoxInputRow>

                <BoxInputRow>
                    <TitleInput> Bairro </TitleInput>
                    <InputBodyRow>Moema-SP</InputBodyRow>
                </BoxInputRow>
            </DirectionRow>
        </Container>
    );
}

export default Localization;