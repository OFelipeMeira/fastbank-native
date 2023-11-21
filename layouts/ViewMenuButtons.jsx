import styled from "styled-components/native";

export const ViewMenuButtons = () => {
    
    const MyContainter2 = styled.View`
        height: 150px;
        width: 350px;
        justify-content: space-evenly;
        /* border: 1px solid red; */
        flex-direction: row;
        align-items: center;
    `;

    const MyButton = styled.TouchableOpacity`
        height: 100px;
        width: 100px;
        /* border: 1px solid blue; */
        align-items: center;
    `;

    const MyButtonIcon = styled.Image`
        width: 100%;
        height: 100%;
    `;
    const MyButtonText = styled.Text`
        font-size: 15px;
        font-weight: 500;
        color: #00f;
    `;

    return (
        <MyContainter2>
            <MyButton>
                <MyButtonIcon source={require("../assets/icon.png")} />
                <MyButtonText>Trasnfer</MyButtonText>
            </MyButton>

            <MyButton>
                <MyButtonIcon source={require("../assets/icon.png")} />
                <MyButtonText>Loan</MyButtonText>
            </MyButton>

            <MyButton>
                <MyButtonIcon source={require("../assets/icon.png")} />
                <MyButtonText>Credit Card</MyButtonText>
            </MyButton>
        </MyContainter2>
    );
};
