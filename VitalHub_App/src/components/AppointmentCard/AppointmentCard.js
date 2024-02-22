import { AntDesign } from "@expo/vector-icons";
import {
  ButtonCard,
  ButtonText,
  ClockCard,
  ContainerCardsList,
  ContentCard,
  DataProfileCard,
  ProfileData,
  ProfileImage,
  ProfileName,
  TextAge,
  TextBold,
  ViewRow,
} from "./Style";

export const AppointmentCard = ({
  situacao = "pendente",
  onPressCancel,
  onPressAppointment,
}) => {
  return (
    // container principal
    <ContainerCardsList>
      {/* imagem de perfil */}
      <ProfileImage source={{ uri: "https://media.licdn.com/dms/image/D4D03AQG0nv4NDnOLtw/profile-displayphoto-shrink_400_400/0/1698662360927?e=1714003200&v=beta&t=tg-8mLITd-8ir9g5P_-bbxiVFg1Gg2Ioxgj5ofJYbpU" }} />

      {/* conteúdo ao lado da imagem de perfil */}
      <ContentCard>
        <DataProfileCard>
          <ProfileName>Gabi</ProfileName>

          <ProfileData>
            <TextAge>18 anos</TextAge>
            <TextBold>Rotina</TextBold>
          </ProfileData>
        </DataProfileCard>

        <ViewRow>
          <ClockCard situacao={situacao}>
            <AntDesign
              name="clockcircle"
              size={14}
              color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"}
            />

            <TextBold situacao={situacao} color={"#49B3BA"}>
              14:00
            </TextBold>
          </ClockCard>

            {/* valida e mostra o tipo de botão conforme a situação */}

            {
                situacao == "cancelado" ? (
                    <>
                    </>
                ) : situacao == "pendente" ? (
                    <ButtonCard onPress={onPressCancel}>
                        <ButtonText situacao={situacao}>Cancelar</ButtonText>
                    </ButtonCard>
                ) : (
                    <ButtonCard onPress={onPressAppointment}>
                        <ButtonText situacao={situacao}>Ver Prontuário</ButtonText>
                    </ButtonCard>
                )
            }

          
        </ViewRow>
      </ContentCard>
    </ContainerCardsList>
  );
};