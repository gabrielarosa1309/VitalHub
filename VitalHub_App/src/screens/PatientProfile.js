import { Container, ContainerScroll } from "../components/Container/Style";
import { Button, ButtonTxt } from "../components/EntryButton/Style";
import { ImgProfile } from "../components/ImgProfile/Style";
import { BoxInput, BoxInputRow, DirectionRow, InputBlock, InputBodyRow } from "../components/Input/Style";
import { Subtitle, Title, TitleInput } from "../components/Title/Style";

export const PatientProfile = () => {
    return (
        <Container>
            <ImgProfile source={require("../assets/img/paciente1.png")} />

            <Title> Richard Kosta </Title>
            <Subtitle> richard.kosta@gmail.com </Subtitle>

            <ContainerScroll>
                <BoxInput>
                    <TitleInput> Data de nascimento </TitleInput>
                    <InputBlock> 04/05/1999 </InputBlock>
                </BoxInput>

                <BoxInput>
                    <TitleInput> CPF </TitleInput>
                    <InputBlock> 859******** </InputBlock>
                </BoxInput>

                <BoxInput>
                    <TitleInput> Endereço </TitleInput>
                    <InputBlock> Rua Vicenso Silva, 987 </InputBlock>
                </BoxInput>

                <DirectionRow>
                    <BoxInputRow>
                        <TitleInput> Cep </TitleInput>
                        <InputBodyRow>06548-909</InputBodyRow>
                    </BoxInputRow>

                    <BoxInputRow>
                        <TitleInput> Cidade </TitleInput>
                        <InputBodyRow>Moema-SP</InputBodyRow>
                    </BoxInputRow>
                </DirectionRow>

                <Button>
                    <ButtonTxt> SALVAR </ButtonTxt>
                </Button>

                <Button>
                    <ButtonTxt> EDITAR </ButtonTxt>
                </Button>

            </ContainerScroll>

        </Container>
    );
}
export default PatientProfile;