import { Container } from "../components/Container/Style";
import { Button, ButtonTxt } from "../components/EntryButton/Style";
import { ImgProfile } from "../components/ImgProfile/Style";
import { BoxInput, BoxInputRow, DirectionRow, InputBody, InputBodyRow } from "../components/Input/Style";
import { Subtitle, Title, TitleInput } from "../components/Title/Style";

export const PatientProfile = () => {
    return (
        <Container>
            <ImgProfile source={require("../assets/img/paciente1.png")}/>

            <Title> Richard Kosta </Title>
            <Subtitle> richard.kosta@gmail.com </Subtitle>

            <BoxInput>
                <TitleInput> Data de nascimento </TitleInput>
                <InputBody placeholder="04/05/1999" />
            </BoxInput>

            <BoxInput>
                <TitleInput> CPF </TitleInput>
                <InputBody placeholder="859******** " />
            </BoxInput>

            <BoxInput>
                <TitleInput> Endereço </TitleInput>
                <InputBody placeholder="Rua Vicenso Silva, 987" />
            </BoxInput>

            <DirectionRow>
                <BoxInputRow>
                    <TitleInput> Cep </TitleInput>
                    <InputBodyRow placeholder="06548-909" />
                </BoxInputRow>

                <BoxInputRow>
                    <TitleInput> Cidade </TitleInput>
                    <InputBodyRow placeholder="Moema-SP" />
                </BoxInputRow>
            </DirectionRow>

            <Button>
                <ButtonTxt> SALVAR </ButtonTxt>
            </Button>

            <Button>
                <ButtonTxt> EDITAR </ButtonTxt>
            </Button>
        
        </Container>
    );
}
export default PatientProfile;