import { AppDatesIcon, AppDatesText, AppointmentDates, Card, CardColumn, CardColumn2, RateBox, RateIcon, RateText } from "../components/Card/Style";
import { Container } from "../components/Container/Style";
import { DefaultTextCard } from "../components/DefaultText/Style";
import { Button, ButtonTxt } from "../components/EntryButton/Style";
import { LinkCancel } from "../components/Links/Style";
import { CardTitle, Title2 } from "../components/Title/Style";

export const SelectClinic = () => {
    return (
        <Container>
            <Title2> Selecionar clínica </Title2>

            <Card>
                <CardColumn>
                    <CardTitle> Clínica Natureh </CardTitle>

                    <DefaultTextCard> São Paulo, SP </DefaultTextCard>
                </CardColumn>

                <CardColumn2>
                    <RateBox>
                        <RateIcon source={require("../assets/icons/rateicon.png")} />
                        <RateText> 4,5 </RateText>
                    </RateBox>

                    <AppointmentDates>
                        <AppDatesIcon source={require("../assets/icons/mdi_calendar.png")} />
                        <AppDatesText> Seg-Sex </AppDatesText>
                    </AppointmentDates>
                </CardColumn2>
            </Card>

            <Card>
                <CardColumn>
                    <CardTitle> Diamond Pró-Mulher </CardTitle>

                    <DefaultTextCard> São Paulo, SP </DefaultTextCard>
                </CardColumn>

                <CardColumn2>
                    <RateBox>
                        <RateIcon source={require("../assets/icons/rateicon.png")} />
                        <RateText> 4,5 </RateText>
                    </RateBox>

                    <AppointmentDates>
                        <AppDatesIcon source={require("../assets/icons/mdi_calendar.png")} />
                        <AppDatesText> Seg-Sex </AppDatesText>
                    </AppointmentDates>
                </CardColumn2>
            </Card>

            <Card>
                <CardColumn>
                    <CardTitle> Clinica Villa Lobos </CardTitle>

                    <DefaultTextCard> Taboão, SP </DefaultTextCard>
                </CardColumn>

                <CardColumn2>
                    <RateBox>
                        <RateIcon source={require("../assets/icons/rateicon.png")} />
                        <RateText> 4,5 </RateText>
                    </RateBox>

                    <AppointmentDates>
                        <AppDatesIcon source={require("../assets/icons/mdi_calendar.png")} />
                        <AppDatesText> Seg-Sex </AppDatesText>
                    </AppointmentDates>
                </CardColumn2>
            </Card>

            <Card>
                <CardColumn>
                    <CardTitle> SP Oncologia Clínica </CardTitle>

                    <DefaultTextCard> Taboão, SP </DefaultTextCard>
                </CardColumn>

                <CardColumn2>
                    <RateBox>
                        <RateIcon source={require("../assets/icons/rateicon.png")} />
                        <RateText> 4,5 </RateText>
                    </RateBox>

                    <AppointmentDates>
                        <AppDatesIcon source={require("../assets/icons/mdi_calendar.png")} />
                        <AppDatesText> Seg-Sex </AppDatesText>
                    </AppointmentDates>
                </CardColumn2>
            </Card>

            <Button>
                <ButtonTxt> CONTINUAR </ButtonTxt>
            </Button>

            <LinkCancel>Cancelar</LinkCancel>

        </Container>
    );
}
export default SelectClinic;