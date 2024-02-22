import { Container } from "../components/Container/Style";import { Button, ButtonTxt } from "../components/EntryButton/Style";
import { LinkCancel } from "../components/Links/Style";
import { Title2 } from "../components/Title/Style";

export const SelectClinic = () => {
    return (
        <Container>
            <Title2> Selecionar clínica </Title2>



            <Button>
                <ButtonTxt> CONTINUAR </ButtonTxt>
            </Button>

            <LinkCancel>Cancelar</LinkCancel>

        </Container>
    );
}
export default SelectClinic;