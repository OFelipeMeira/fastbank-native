import styled from "styled-components/native";

export const MyButton = props => {
    const MyButton = styled.TouchableOpacity`
        border-width: 1px;
        width: 200px;
        height: 50px;
        background-color: #00f;
        border-radius: 10px;

        align-items: center;
        justify-content: center;
    `;

    const MyButtonText = styled.Text`
        font-size: 20px;
        font-weight: 800;
        color: #fff;
    `;
    return (
        <MyButton>
            <MyButtonText>{props.text}</MyButtonText>
        </MyButton>
    );
};
