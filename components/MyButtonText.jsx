import styled from "styled-components/native";

export const MyButtonText = props => {
    const MyBtnContainer = styled.TouchableOpacity`
        width: 200px;
        height: 50px;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        color:#00f;
    `;

    const MyText = styled.Text`
        font-size: 20px;
        font-weight: 400;
        color: #00f;
    `;
    return (
        <MyBtnContainer onPress={props.onPress}>
            <MyText>{props.text}</MyText>
        </MyBtnContainer>
    );
};
