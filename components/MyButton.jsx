import styled from "styled-components/native";

export const MyButton = props => {
    const MyBtn = styled.TouchableOpacity`
        border-width: 1px;
        width: 200px;
        height: 50px;
        background-color: #00f;
        border-radius: 10px;

        align-items: center;
        justify-content: center;
    `;

    const MyBtnText = styled.Text`
        font-size: 20px;
        font-weight: 800;
        color: #fff;
    `;
    return (
        <MyBtn onPress={props.onPress}>
            <MyBtnText>{props.text}</MyBtnText>
        </MyBtn>
    );
};
