import styled, { css } from "styled-components";

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
    text-transform: uppercase;
`
