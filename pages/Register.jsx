import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styled from "styled-components/native";

import { MyInput } from "../components/MyInput";
import { MyButton } from "../components/MyButton";
import { MyButtonOutlined } from "../components/MyButtonOutlined";

import { useState } from "react";

export default function Register({ navigation }) {
   const MyPageContainerView = styled.View`
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      background-color: #fff;
   `;

   const MyContainter = styled.View`
      /* border: 1px solid red; */
      height: 500px;
      align-items: center;
      justify-content: space-between;
   `;

   return (
      <MyPageContainerView>
         <MyContainter>
            <MyInput placeholder="Email" />
            <MyInput placeholder="Password" secureTextEntry={true} />
            <MyInput placeholder="First Name" />
            <MyInput placeholder="Last Name" />
            <MyInput placeholder="CPF" />

            <MyButton
               text={"Register"}
               onPress={() => {
                  navigation.navigate("Menu");
               }}
            />
            <MyButtonOutlined
               text={"Login"}
               onPress={() => {
                  navigation.navigate("Login");
               }}
            />
         </MyContainter>

         <StatusBar style="auto" />
      </MyPageContainerView>
   );
}
