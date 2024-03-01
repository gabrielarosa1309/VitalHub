import { useState } from "react";
import { Container } from "../components/Container/Style";
import FullCalender from "../components/FullCalendar/FullCalendar";
import { Title, Title2, TitleInput, TitleInputDate } from "../components/Title/Style";
import SelectInput from "../components/SelectInput/SelectInput";
import { Button, ButtonTxt } from "../components/EntryButton/Style";
import { LinkCancel } from "../components/Links/Style";
import { SelectBox } from "../components/AppointmentModal/Style";

export const SelectDate = () => {
    const [selectedDate, setSelectedDate] = useState();
    const [selectedTime, setSelectedTime] = useState();

    const [avaliableTimesData, setAvaliableTimesData] = useState(['12:30', '14:00', '15:30', '16:00', '17:00']);

    return (
        <Container>
            <Title2>Selecionar data</Title2>

            <FullCalender
                selectedDate={selectedDate}
                handleSelectedDateFn={setSelectedDate}
            />

           
                <TitleInputDate> Selecione um horário: </TitleInputDate>

                <SelectInput
                    defaultText='Selecionar horário'
                    handleSelectedFn={setSelectedTime}
                    data={avaliableTimesData}
                />
      

            <Button>
                <ButtonTxt> CONTINUAR </ButtonTxt>
            </Button>

            <LinkCancel>Cancelar</LinkCancel>
        </Container>
    )
}

export default SelectDate;