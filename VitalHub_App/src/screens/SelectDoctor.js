import { Container } from "../components/Container/Style";
import { DoctorCard } from "../components/DoctorCard/DoctorCard"
import { Button, ButtonTxt } from "../components/EntryButton/Style";
import { LinkCancel } from "../components/Links/Style";
import { Title2 } from "../components/Title/Style";

export const SelectDoctor = () => {
    return (
        <Container>
            <Title2> Selecionar médico </Title2>

            <DoctorCard
                doctorImg={require("../assets/img/medico1.png")}
                doctorName="Dra Alessandra"
                doctorSpecialty="Demartologa, Esteticista"
            />

            <DoctorCard
                doctorImg={require("../assets/img/medico2.png")}
                doctorName="Dr Kumushiro"
                doctorSpecialty="Cirurgião, Cardiologista"
            />

            <DoctorCard
                doctorImg={require("../assets/img/medico3.png")}
                doctorName="Dr Rodrigo Santos"
                doctorSpecialty="Clínico, Pediatra"
            />

            <Button>
                <ButtonTxt> CONTINUAR </ButtonTxt>
            </Button>

            <LinkCancel>Cancelar</LinkCancel>

        </Container>
    );
}
export default SelectDoctor;