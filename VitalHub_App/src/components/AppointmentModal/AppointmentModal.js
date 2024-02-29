import { Modal } from "react-native";
import { BtnModal } from "../CancelModal/Style";
import { LinkCancel } from "../Links/Style";
import { Title, TitleInput } from "../Title/Style";
import { AppModal, ModalContent, RowButtons, Select, SelectBox, SelectTitle } from "./Style";
import { ButtonTxt } from "../EntryButton/Style";
import { useState } from "react";
import { ButtonRowAppointment } from "../AppButton/Style";
import { AppButton } from "../AppButton/AppButton";
import AppResumeModal from "../AppResumeModal/AppResumeModal";

const AppointmentModal = ({
    visible, setShowModalApp, ...rest
}) => {
    const [statusLista, setStatusLista] = useState("pendente");
    const [showAppResume, setShowAppResume] = useState(false);

    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <AppModal>
                <ModalContent>
                    <Title> Agendar consulta </Title>

                    <SelectBox>
                        <TitleInput> Qual é o nível da consulta? </TitleInput>
                        <ButtonRowAppointment>
                            <AppButton
                                textButton={"Agendadas"}
                                clickButton={statusLista === "pendente"}
                                onPress={() => setStatusLista("pendente")}
                            />

                            <AppButton
                                textButton={"Realizadas"}
                                clickButton={statusLista === "realizado"}
                                onPress={() => setStatusLista("realizado")}
                            />


                            <AppButton
                                textButton={"Canceladas"}
                                clickButton={statusLista === "cancelado"}
                                onPress={() => setStatusLista("cancelado")}
                            />
                        </ButtonRowAppointment>
                    </SelectBox>

                    <SelectBox>
                        <TitleInput> Informe a localização </TitleInput>
                        <Select>
                            <SelectTitle> Selecionar clínica </SelectTitle>
                        </Select>
                    </SelectBox>

                    <SelectBox>
                        <TitleInput> Informe o médico </TitleInput>
                        <Select>
                            <SelectTitle> Selecionar médico </SelectTitle>
                        </Select>
                    </SelectBox>

                    <SelectBox>
                        <TitleInput> Informe a data e o horário </TitleInput>
                        <Select>
                            <SelectTitle> Selecionar data e horário </SelectTitle>
                        </Select>
                    </SelectBox>

                    <AppResumeModal
                        visible={showAppResume}
                        setShowAppResume={setShowAppResume}
                    />

                    <BtnModal onPress={() => setShowAppResume(true)}>
                        <ButtonTxt> Confirmar </ButtonTxt>
                    </BtnModal>

                    <LinkCancel onPress={() => setShowModalApp(false)}>
                        Cancelar
                    </LinkCancel>
                </ModalContent>
            </AppModal>

        </Modal>
    );
}

export default AppointmentModal;