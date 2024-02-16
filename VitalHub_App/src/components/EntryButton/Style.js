import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    border-radius: 10px;
    margin-top: 60px;
    background-color: #496BBA;
    align-items: center;
    justify-content: center;
`
export const ButtonReset = styled(Button)`
    margin-top: 30px;
`
export const ButtonTxt = styled.Text`
    color: white;
    font-size: 16px;
    font-family: "MontserratAlternates_700Bold";
`
export const ButtonRowHome = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 24px;
    width: 90%;
`
export const ButtonHome = styled.TouchableOpacity`
    flex-direction: row;
    background-color: #FBFBFB;
    border: 2px;
    border-color: #607EC5;
    border-radius: 5px;
    width: 30%;
    height: 40px;
    align-items: center;
    justify-content: center;
    /* ON PRESSED background-color: #496BBA; */
`
export const ButtonHomeTxt = styled.Text`
    color: #607EC5;
    font-family: "MontserratAlternates_600SemiBold";
    font-size: 16px;
`