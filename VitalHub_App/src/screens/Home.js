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
import AppointmentModal from "../components/AppointmentModal/AppointmentModal";
import AppointmentButton from "../components/AppointmentButton/AppointmentButton";

const Consultas = [
    {id: 1, situacao: "pendente"},
    {id: 2, situacao: "pendente"},
    {id: 3, situacao: "pendente"},
    {id: 4, situacao: "realizado"},
    {id: 5, situacao: "pendente"},
    {id: 6, situacao: "realizado"},
    {id: 7, situacao: "realizado"},
    {id: 8, situacao: "cancelado"}
]

export const Home = () => {

    const[statusLista, setStatusLista] = useState("pendente");

    const[showModalAppointment, setShowModalAppointment] = useState(false);
    const[showModalCancel, setShowModalCancel] = useState(false);
    const[showModalApp, setShowModalApp] = useState(false);

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

            <AppointmentButton onPress={() => setShowModalApp(true)} />
            
            <CancelModal
                visible={showModalCancel}
                setShowModalCancel={setShowModalCancel}
            />

            <MedRecordModal
                visible={showModalAppointment}
                setShowModalAppointment={setShowModalAppointment}
            />

            <AppointmentModal
                visible={showModalApp}
                setShowModalApp={setShowModalApp}
            />

        </Container>
    );
}
export default Home;