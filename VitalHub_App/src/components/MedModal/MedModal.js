import { Modal } from "react-native";
import { LinkCancel } from "../Links/Style";
import { BtnModal, ModalContent, PatientModal } from "../CancelModal/Style";
import { ButtonTxt } from "../EntryButton/Style";
import { ContentTxt, PatientImg, PatientName, ProfileData } from "./Style";

const MedModal = ({
    visible, setShowMedModal, ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <PatientModal>
                <ModalContent>
                    <PatientImg source={require("../../assets/img/chewie.jpg")} />

                    <PatientName> Chewie </PatientName>

                    <ProfileData>
                        <ContentTxt>Clínico geral</ContentTxt>
                        <ContentTxt>CRM-15286</ContentTxt>
                    </ProfileData>

                    <BtnModal>
                        <ButtonTxt> Ver local da consulta </ButtonTxt>
                    </BtnModal>

                    <LinkCancel onPress={() => setShowMedModal(false)}>
                        Cancelar
                    </LinkCancel>
                </ModalContent>
            </PatientModal>

        </Modal>
    );
}

export default MedModal;