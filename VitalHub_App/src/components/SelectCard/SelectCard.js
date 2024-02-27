import { AntDesign, Entypo } from '@expo/vector-icons';
import { ClinicAddress, ClinicName, ClockCard, ContainerCardsList, ContentCard, DataClinicCard, IconsColumn, Rate, TextBold, TextBoldRate } from './Style';

export const SelectCard = () => {
    return (
        // container principal
        <ContainerCardsList>

            <ContentCard>
                {/* conteúdo da direita */}
                <DataClinicCard>
                    <ClinicName> Clínica Natureh </ClinicName>
                    <ClinicAddress> São Paulo, SP </ClinicAddress>
                </DataClinicCard>

                {/* conteúdo da esquerda */}
                <IconsColumn>
                    <Rate>
                        <Entypo
                            name="star"
                            size={24}
                            color={"#F9A620"}
                        />

                        <TextBoldRate> 4,5 </TextBoldRate>
                    </Rate>

                    <ClockCard>
                        <AntDesign
                            name="calendar"
                            size={14}
                            color={"#49B3BA"}
                        />

                        <TextBold> Seg-Sex </TextBold>
                    </ClockCard>
                </IconsColumn>
            </ContentCard>

        </ContainerCardsList>
    );
};