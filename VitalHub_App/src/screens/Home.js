import CalendarList from "../components/Calendar/Calendar";
import { Container } from "../components/Container/Style";
import Header from "../components/Header/Header";
import { useState } from "react";
import { HomeButton } from "../components/HomeButton/HomeButton";
import { ButtonRowHome } from "../components/HomeButton/Style";
import { ListComponent } from "../components/List/List";
import { AppointmentCard } from "../components/AppointmentCard/AppointmentCard";
import CancelModal from "../components/CancelModal/CancelModal";
import MedRecordModal from "../components/MedRecordModal/MedRecordModal";

const Consultas = [
    {id: 1, nome: "Carlos", situacao: "pendente"},
    {id: 2, nome: "Edu", situacao: "realizado"},
    {id: 3, nome: "Lucão", situacao: "cancelado"}
]

export const Home = () => {

    const[statusLista, setStatusLista] = useState("pendente");

    const[showModalAppointment, setShowModalAppointment] = useState(false);
    const[showModalCancel, setShowModalCancel] = useState(false);

    return (
        <Container>

            <Header/>

            <CalendarList />

            <ButtonRowHome>

                <HomeButton
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />

                <HomeButton
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")}
                />
                

                <HomeButton
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")}
                />
                

            </ButtonRowHome>

            <ListComponent
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={({item}) =>
                    statusLista == item.situacao && (
                        <AppointmentCard
                            situacao={item.situacao}
                            onPressAppointment={() => setShowModalAppointment(true)}
                            onPressCancel={() => setShowModalCancel(true)}
                        />
                    )
                }
            />

            <CancelModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />

            <MedRecordModal
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />

        </Container>
    );
}
export default Home;