import styled from "styled-components";
import {LinearGradient} from "expo-linear-gradient";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FAFAFA;
`
export const ContainerUser = styled(Container)`
    gap: 20px;
    justify-content: baseline;
`

export const ContainerScroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        width: 320,
        height: 600,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})``