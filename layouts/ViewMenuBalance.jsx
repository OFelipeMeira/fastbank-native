import styled from "styled-components/native";

export const ViewBalance = (props) => {
    const MyContainter1 = styled.View`
        /* border: 1px solid red; */
        margin-top: 60px;
        height: 120px;
        width: 350px;
        justify-content: center;
        align-items:center;
        border:3px solid #00f;
        border-radius:10px;
        padding: 5px;
    `;

    const MyTextTitle = styled.Text`
        /* border:1px solid green; */
        font-size: 30px;
        font-weight:500;
        color: #00f;
        margin: 0;
    `;

    const MyTextBalance = styled.Text`
        font-size: 25px;
        font-weight:500;
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
