import styled from "styled-components";
import { Title } from "../Title/Style";

export const ContainerCardsList = styled.View`
    width: 90%;
    margin-bottom:12px;
    padding: 10px 10px;
    border-radius: 5px;
    flex-direction: row;
    background-color:#fff;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.08);
    gap: 10px;
    margin: 0 auto;
`
export const ContentCard = styled.View`
    width: 100%;
    flex-direction: row;
`
export const DataClinicCard = styled.View`
    width: 50%;
    gap: 2px;
`
export const ClinicName = styled(Title)`   
    font-size: 22px;
`
export const ClinicAddress = styled.Text`
    font-size: 18px;
    font-family: "Quicksand_600SemiBold";
`
export const IconsColumn = styled.View`
    width: 50%;
    align-items: center;
    justify-content: space-between;
    margin-top: 11px;
`
export const ClockCard = styled.View`
    flex-direction: row;
    padding: 4px 23px;
    gap: 6px;
    border-radius: 5px;
    background-color: #E8FCFD;
`
export const Rate = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: transparent;
`
export const TextBold = styled.Text`
    font-size: 15px;
    color: #49B3BA;
    font-family: "Quicksand_600SemiBold";
`
export const TextBoldRate = styled.Text`
    font-size: 15px;
    color: #F9A620;
    font-family: "Quicksand_600SemiBold";
`