import styled from "styled-components/native";

export function BtnSettings() {
    const BtnSettings = styled.TouchableOpacity`
        height: 50px;
        width: 50px;
        position: absolute;
        top: 50px;
        left: 20px;
    `;
    const MyButtonIcon = styled.Image`
        width: 100%;
        height: 100%;
    `;

    return (
        <BtnSettings>
            <MyButtonIcon source={require("../assets/Icons/iconSettings.png")} />
        </BtnSettings>
    );
}
