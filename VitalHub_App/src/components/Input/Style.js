import styled from "styled-components";

export const Input = styled.TextInput.attrs({placeholderTextColor: '#34898f'})`
    width: 90%;
    height: 53px;
    padding: 16px;
    margin-top: 15px;
    border: 2px solid #49b3ba;
    border-radius: 5px;
    color: #34898f;
    font-size: 16px;
    font-family: "MontserratAlternates_600SemiBold";
`
export const InputVerify = styled(Input)`
    width: 18%;
    height: 70px;
    padding: 16px;
    font-family: "Quicksand_600SemiBold";
    font-size: 40px;
    text-align: center;
`
export const InputBoxVerify = styled.View`
    flex-direction: row;
    gap: 20px;
`

export const BoxInput = styled.View`
    width: 90%;
    height: 73px;
    margin: 24px 0px;
    gap: 10px;
`
export const DirectionRow = styled(BoxInput)`
    flex-direction: row;
    width: 90%;
`
export const BoxInputRow = styled(BoxInput)`
    margin: 0px 0px 30px 0px;
    width: 50%;
`
export const InputBody = styled.TextInput`
    height: 53px;
    padding: 16px;
    background-color: #FFFFFF;
    border-radius: 5px;
    color: #34898f;
    font-family: "MontserratAlternates_500Medium";
    font-size: 16px;
`
export const InputBodyRow = styled(InputBody)`
    width: 95%;
    background-color: #FFFFFF;
`

