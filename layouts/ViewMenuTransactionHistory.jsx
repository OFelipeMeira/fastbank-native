import styled from "styled-components/native";
import { FlatList } from "react-native";

export const ViewTTransactionHistory = (props) => {
    const MyButtonIcon = styled.Image`
        width: 100%;
        height: 100%;
    `;

    const MyContainter3 = styled.View`
        height: 75px;
        width: 350px;
        justify-content: space-between;
        /* border: 1px solid red; */
        flex-direction: row;
        align-items: center;
        padding: 10px;
        padding-top: 20px;
    `;

    const MyListTitle = styled.Text`
        font-size: 18px;
        font-weight: 500;
        margin-top: 15px;
        color: #00f;
    `;
    const MyListButtonDetails = styled.TouchableOpacity`
        /* border: 1px solid yellow; */
        height: 50px;
        width: 50px;
        margin-right: 15px;
    `;

    const MyContainter4 = styled.View`
        height: 305px;
        width: 350px;
        justify-content: space-evenly;
        /* border: 1px solid red; */
        flex-direction: row;
        align-items: center;
    `;

   

    const ListItem = styled.View`
        flex-direction: row;
        justify-content: space-between;
        /* border: 1px solid green; */
        padding: 10px;
    `;

    const ListText = styled.Text`
        font-size: 15px;
        font-weight: 400;
        color: #00f;
    `;

    return (
        <>
            <MyContainter3>
                <MyListTitle>Transaction History</MyListTitle>
                <MyListButtonDetails>
                    <MyButtonIcon source={require("../assets/icon.png")} />
                </MyListButtonDetails>
            </MyContainter3>

            <MyContainter4>
                <FlatList
                    data={props.data}
                    renderItem={({ item }) => (
                        <ListItem>
                            <ListText>{item.conta}</ListText>
                            <ListText>${item.valor}</ListText>
                        </ListItem>
                    )}
                    style={{
                        height: "100%",
                        width: "100%",
                    }}
                />
            </MyContainter4>
        </>
    );
};
