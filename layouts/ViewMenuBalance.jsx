import styled from "styled-components/native";

export const ViewBalance = (props) => {
    const MyContainter1 = styled.View`
        margin-top: 50px;
        /* margin-left: 20px; */
        height: 120px;
        width: 300px;
        justify-content: center;
        /* border: 1px solid red; */
    `;

    const MyTextTitle = styled.Text`
        font-size: 30px;
        color: #00f;
        margin: 0;
        /* border:1px solid green; */
    `;

    const MyTextBalance = styled.Text`
        font-size: 25px;
        color: #00f;
        margin: 0;
        /* border:1px solid green; */
    `;

    return (
        <MyContainter1>
            <MyTextTitle>Hello, {props.name}</MyTextTitle>
            <MyTextBalance>Your balance:  ${props.balance.toFixed(2)}</MyTextBalance>
        </MyContainter1>
    );
};
