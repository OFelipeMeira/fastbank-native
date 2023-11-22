import styled from "styled-components/native";

import { MyButton } from "../components/MyButton";


export default function TransferDone({ navigation }) {
   const MyPageContainerView = styled.View`
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      background-color: #fff;
   `;

   const MyContainterView = styled.View`
      height: 500px;
      align-items: center;
      justify-content: space-evenly;
      /* border: 1px solid red; */
   `;

   const MyImg = styled.Image`
      object-fit: contain;
      /* border: 1px solid red; */
   `;

   return (
      <MyPageContainerView>
         <MyContainterView>
            <MyImg source={require("../assets/Images/Logo/LogoBlue.png")} />

            <MyButton
               text={"Back to Menu"}
               onPress={() => {
                  navigation.navigate("Menu");
               }}
            />
         </MyContainterView>
      </MyPageContainerView>
   );
}
