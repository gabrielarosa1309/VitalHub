import { CardDoc, CardColumn, CardColumn2, RateBox, RateIcon, RateText, DocImgCard } from "../components/Card/Style";
import { Container } from "../components/Container/Style";
import { DefaultTextCard } from "../components/DefaultText/Style";
import { Button, ButtonTxt } from "../components/EntryButton/Style";
import { LinkCancel } from "../components/Links/Style";
import { CardTitle, Title2 } from "../components/Title/Style";

export const SelectDoctor = () => {
    return (
        <Container>
            <Title2> Selecionar médico </Title2>

            <CardDoc>
                <CardColumn>
                    <DocImgCard source={require("../assets/img/medico1.png")} />
                    {/* < source={require("../assets/img/medico1.png")} /> */}
                </CardColumn>

                <CardColumn>
                    <CardTitle> Dra Alessandra </CardTitle>

                    <DefaultTextCard> Demartologa, Esteticista </DefaultTextCard>
                </CardColumn>
            </CardDoc>

            <CardDoc>
                <CardColumn>
                    <DocImgCard source={require("../assets/img/medico2.png")} />
                    {/* < source={require("../assets/img/medico1.png")} /> */}
                </CardColumn>

                <CardColumn>
                    <CardTitle> Dr Kumushiro </CardTitle>

                    <DefaultTextCard> Cirurgião, Cardiologista </DefaultTextCard>
                </CardColumn>
            </CardDoc>

            <CardDoc>
                <CardColumn>
                    <DocImgCard source={require("../assets/img/medico3.png")} />
                    {/* < source={require("../assets/img/medico1.png")} /> */}
                </CardColumn>

                <CardColumn>
                    <CardTitle> Dr Rodrigo Santos </CardTitle>

                    <DefaultTextCard> Clínico, Pediatra </DefaultTextCard>
                </CardColumn>
            </CardDoc>

            <Button>
                <ButtonTxt> CONTINUAR </ButtonTxt>
            </Button>

            <LinkCancel>Cancelar</LinkCancel>

        </Container>
    );
}
export default SelectDoctor;