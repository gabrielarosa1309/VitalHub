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
    gap: 20px
`

