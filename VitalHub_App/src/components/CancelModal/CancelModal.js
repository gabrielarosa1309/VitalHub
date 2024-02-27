import { Modal } from "react-native"
import { ButtonTxt } from "../EntryButton/Style";
import { Title } from "../Title/Style";
import { LinkCancel } from "../Links/Style";
import { BtnModal, ModalContent, ModalTxt, PatientModal } from "./Style";

const CancelModal = ({
    visible, setShowModalCancel, ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <PatientModal>
                <ModalContent>
                    <Title> Cancelar consulta </Title>

                    <ModalTxt> Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário. Deseja mesmo cancelar essa consulta? </ModalTxt>

                    <BtnModal>
                        <ButtonTxt> Confirmar </ButtonTxt>
                    </BtnModal>

                    <LinkCancel onPress={() => setShowModalCancel(false)}>
                        Cancelar
                    </LinkCancel>
                </ModalContent>
            </PatientModal>

        </Modal>
    );
}

export default CancelModal;