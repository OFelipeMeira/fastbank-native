import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { useState } from "react";

import { MyInput } from "../components/MyInput";
import { MyButton } from "../components/MyButton";
import { MyButtonOutlined } from "../components/MyButtonOutlined";

import axios from "axios";

export default function Login({ navigation }) {

   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

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

   // const login = () => {
   //    axios.post('http://127.0.0.1:8000/api/token/', {
   //       "email": email,
   //       "password": password
   //    })
   //       .then((response) => {
   //          console.log(response.access)
   //          navigation.navigate("Menu");
   //       })
   //       .catch((err) => {
   //          console.log(err)
   //       })
   // }
   function teste() {
      console.log(email, password)
   }

   return (
      <MyPageContainerView>
         <MyContainterView>
            <MyImg source={require("../assets/Images/Logo/LogoBlue.png")} />

            <MyInput value={email} onChangeText={text => setEmail(text)} placeholder="Email" />
            <MyInput value={password} onChangeText={e => setPassword(e)} placeholder="Password" secureTextEntry={true} />

            <MyButton
               text={"Login"}
               onPress={() => teste()}
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
