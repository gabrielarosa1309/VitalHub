import { Modal } from "react-native";
import { BtnModal } from "../CancelModal/Style";
import { ButtonTxt } from "../EntryButton/Style";
import { LinkCancel } from "../Links/Style";
import { Title, TitleInput } from "../Title/Style";
import { AppModal, ContainerInfoBox, Content, InfoBox, ModalContent, ModalTxtResume } from "./Style";
import { useState } from "react";
import AppStatusModal from "../AppStatusModal/AppStatusModal";

const AppResumeModal = ({
    navigation, visible, setShowAppResume, ...rest
}) => {
    const [showAppStatus, setShowAppStatus] = useState(false);

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <AppModal>
                <ModalContent>
                    <Title> Agendar consulta </Title>

                    <ModalTxtResume> Consulte os dados selecionados para a sua consulta </ModalTxtResume>

                    <ContainerInfoBox>
                        <InfoBox>
                            <TitleInput> Data da consulta </TitleInput>
                            <Content> 1 de Novembro de 2024 </Content>
                        </InfoBox>

                        <InfoBox>
                            <TitleInput> Médico(a) da consulta </TitleInput>
                            <Content> Dra Alessandra </Content>
                            <Content> Demartóloga, Esteticista </Content>
                        </InfoBox>

                        <InfoBox>
                            <TitleInput> Local da consulta </TitleInput>
                            <Content> São Paulo, SP </Content>
                        </InfoBox>

                        <InfoBox>
                            <TitleInput> Tipo de consulta </TitleInput>
                            <Content> Rotina </Content>
                        </InfoBox>
                    </ContainerInfoBox>

                    <AppStatusModal
                        visible={showAppStatus}
                        setShowAppStatus={setShowAppStatus}
                        navigation={navigation}
                    />

                    <BtnModal onPress={() => setShowAppStatus(true)}>
                        <ButtonTxt> Confirmar </ButtonTxt>
                    </BtnModal>

                    <LinkCancel onPress={() => setShowAppResume(false)}>
                        Cancelar
                    </LinkCancel>
                </ModalContent>
            </AppModal>

        </Modal>
    );
}

export default AppResumeModal;