import { Modal } from "react-native";
import { LinkCancel } from "../Links/Style";
import { BtnModal, ModalContent, PatientModal } from "../CancelModal/Style";
import { ButtonTxt } from "../EntryButton/Style";
import { ContentTxt, PatientImg, PatientName, ProfileData } from "./Style";

const MedRecordModal = ({
    visible, setShowModalAppointment, ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <PatientModal>
                <ModalContent>
                    <PatientImg source={{ uri: "https://media.licdn.com/dms/image/D4D03AQG0nv4NDnOLtw/profile-displayphoto-shrink_400_400/0/1698662360927?e=1714003200&v=beta&t=tg-8mLITd-8ir9g5P_-bbxiVFg1Gg2Ioxgj5ofJYbpU" }} />

                    <PatientName> Gabi </PatientName>

                    <ProfileData>
                        <ContentTxt>18 anos</ContentTxt>
                        <ContentTxt>gabi@email.com</ContentTxt>
                    </ProfileData>

                    <BtnModal>
                        <ButtonTxt> Inserir prontuário </ButtonTxt>
                    </BtnModal>

                    <LinkCancel onPress={() => setShowModalAppointment(false)}>
                        Cancelar
                    </LinkCancel>
                </ModalContent>
            </PatientModal>

        </Modal>
    );
}

export default MedRecordModal;