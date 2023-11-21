import styled from "styled-components/native";

export const MyButtonOutlined = props => {
    const MyBtnOutlined = styled.TouchableOpacity`
        width: 200px;
        height: 50px;
        border:2px solid #00f;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        color:#00f;
    `;

    const MyBtnText = styled.Text`
        font-size: 20px;
        font-weight: 500;
        color: #00f;
    `;
    return (
        <MyBtnOutlined onPress={props.onPress}>
            <MyBtnText>{props.text}</MyBtnText>
        </MyBtnOutlined>
    );
};
