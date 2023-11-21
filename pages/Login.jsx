import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { MyInput } from "../components/MyInput";
import { MyButton } from "../components/MyButton";
import { MyButtonOutlined } from "../components/MyButtonOutlined";


export default function Login({ navigation }) {
   const MyPageContainerView = styled.View`
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
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

            <MyInput placeholder="Email" />
            <MyInput placeholder="Password" secureTextEntry={true} />

            <MyButton
               text={"Login"}
               onPress={() => {
                  navigation.navigate("Menu");
               }}
            />
            <MyButtonOutlined
               text={"Register"}
               onPress={() => {
                  navigation.navigate("Register");
               }}
            />
         </MyContainterView>
         <StatusBar style="auto" />
      </MyPageContainerView>
   );
}
