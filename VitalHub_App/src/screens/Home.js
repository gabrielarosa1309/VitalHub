import CalendarList from "../components/Calendar/Calendar";
import { CardColumn, CardDoc, CardPatient, CardPatientColumn, CardPatientColumn1, CardPatientColumnImg, DocImgCard, ImgCardPacient } from "../components/Card/Style";
import { Container } from "../components/Container/Style";
import { DefaultTextCard } from "../components/DefaultText/Style";
import { ButtonHome, ButtonHomeTxt, ButtonRowHome } from "../components/EntryButton/Style";
import Header from "../components/Header/Header";
import { CardTitle } from "../components/Title/Style";

export const Home = () => {
    return (
        <Container>

            <Header/>

            <CalendarList />

            <ButtonRowHome>

                <ButtonHome>
                    <ButtonHomeTxt> Agendadas </ButtonHomeTxt>
                </ButtonHome>

                <ButtonHome>
                    <ButtonHomeTxt> Realizadas </ButtonHomeTxt>
                </ButtonHome>

                <ButtonHome>
                    <ButtonHomeTxt> Canceladas </ButtonHomeTxt>
                </ButtonHome>

            </ButtonRowHome>

            <CardPatient>
                <CardPatientColumnImg> 
                    <ImgCardPacient source={require('../assets/img/paciente2.png')}/>
                </CardPatientColumnImg>

                
            </CardPatient>

            <CardPatient>

            </CardPatient>

        </Container>
    );
}
export default Home;