import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

export const ViewMenuButtons = () => {
   const { navigate } = useNavigation()
   const MyContainterView = styled.View`
      /* border: 1px solid red; */
      height: 150px;
      width: 350px;
      justify-content: space-evenly;
      flex-direction: row;
      align-items: center;
   `;

   const MyButtonContainer = styled.View`
      /* border: 1px solid red; */
      align-items: center;
      padding: 5px;
      border: 3px solid #00f;
      border-radius: 10px;
   `;

   const MyButtonText = styled.Text`
      font-size: 17px;
      font-weight: 500;
      color: #00f;
   `;

   const MyButton = styled.TouchableOpacity`
      /* border: 1px solid blue; */
      height: 100px;
      width: 100px;
      align-items: center;
      justify-content: center;
   `;

   const MyButtonIcon2 = styled.Image`
      width: 80%;
      height: 100%;
      object-fit: contain;
   `;

   return (
      <MyContainterView>
         <MyButtonContainer>
            <MyButton onPress={() => navigate("Transfer")}>
               <MyButtonIcon2
                  source={require("../assets/Icons/iconTransfer.png")}
               />
            </MyButton>
            <MyButtonText>Trasnfer</MyButtonText>
         </MyButtonContainer>

         <MyButtonContainer>
            <MyButton onPress={() => navigate("Loan")}>
               <MyButtonIcon2 source={require("../assets/Icons/iconLoan.png")} />
            </MyButton>
            <MyButtonText>Loan</MyButtonText>
         </MyButtonContainer>

         <MyButtonContainer>
            <MyButton onPress={() => navigate("CreditCard")}>
               <MyButtonIcon2
                  source={require("../assets/Icons/iconCreditCard.png")}
               />
            </MyButton>
            <MyButtonText>Credit Card</MyButtonText>
         </MyButtonContainer>
      </MyContainterView>
   );
};
