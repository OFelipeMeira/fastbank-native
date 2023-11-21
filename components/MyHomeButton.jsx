import styled from "styled-components/native";

export function MyHomeButton() {
    const MyHomeButton = styled.TouchableOpacity`
        /* border:1px solid red; */
        height:50px;
        width:50px;

        position:absolute;
        top: 60px;
        left: 30px;
    `
    const MyImage = styled.Image`
        width: 100%;
        height: 100%;
    `

    return (
        <MyHomeButton>
            <MyImage source={require("../assets/Icons/iconHome.png")} />
        </MyHomeButton>
    );
}
