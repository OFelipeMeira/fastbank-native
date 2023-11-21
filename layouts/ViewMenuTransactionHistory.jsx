import styled from "styled-components/native";
import { FlatList } from "react-native";

export const ViewTransactionHistory = (props) => {
   const MyMainContainer = styled.View`
      /* margin-top: 10px; */
      padding: 10px;
      border: 3px solid #00f;
      border-radius: 20px;
      width: 350px;
   `;

   const MyButtonIcon = styled.Image`
      height: 80%;
      aspect-ratio: 1/1;
      object-fit: contain;
      margin-top: 10%;
   `;

   const MyTitleContainter = styled.View`
      height: 50px;
      width: 350px;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      padding: 2px;
      border-radius: 10px;
   `;

   const MyListTitle = styled.Text`
      font-size: 18px;
      font-weight: 600;
      color: #00f;
      margin-left: 15px;
   `;
   const MyListButtonDetails = styled.TouchableOpacity`
      /* border: 1px solid yellow; */
      height: 50px;
      width: 50px;
      margin-right: 15px;
   `;

   const MyContainter4 = styled.View`
      /* border: 1px solid red; */
      height: 305px;
      width: 320px;
      justify-content: space-evenly;
      flex-direction: row;
      align-items: center;
      background-color: #fff;
      margin: 0 auto;
   `;

   const ListItem = styled.View`
      /* border: 1px solid green; */
      flex-direction: row;
      justify-content: space-between;
      padding: 8px;
      /* background-color: #2020ff; */
   `;

   const ListText = styled.Text`
      font-size: 18px;
      font-weight: 500;
      color: #00f;
   `;

   return (
      <>
         <MyMainContainer>
            <MyTitleContainter>
               <MyListTitle>Transaction History</MyListTitle>
               <MyListButtonDetails>
                  <MyButtonIcon
                     source={require("../assets/Images/Logo/LogoBlue.png")}
                  />
               </MyListButtonDetails>
            </MyTitleContainter>

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
         </MyMainContainer>
      </>
   );
};
