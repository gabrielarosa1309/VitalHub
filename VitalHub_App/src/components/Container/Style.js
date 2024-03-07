import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FAFAFA;
`
export const ContainerLogin = styled(Container)`
    gap: 20px;
`
export const ContainerUser = styled(Container)`
    justify-content: baseline;
`
export const ContainerScroll = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        // width: 400,
        // height: 200,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})``