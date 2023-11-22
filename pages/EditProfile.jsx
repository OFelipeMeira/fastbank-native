import styled from "styled-components/native";
import { Image } from "react-native";

import { MyInput } from "../components/MyInput";
import { MyButtonOutlined } from "../components/MyButtonOutlined";
import { MyButtonText } from "../components/MyButtonText";

export default function EditProfile({ navigation }) {
   const MyPageContainerView = styled.View`
      /* border: 1px solid green; */
      width: 100%;
      height: 100%;
      align-items: center;
      background-color: #fff;
   `;

   const MyContainter = styled.View`
      /* border: 1px solid red; */
      height: 600px;
      
      align-items: center;
      justify-content: space-around;
   `;

   const MyImageEdit = styled.TouchableOpacity`
      aspect-ratio: 1/1;
      object-fit:cover;
      justify-content:center;
      align-items:center;
      margin-bottom:30px;
   `

   return (
      <MyPageContainerView
         style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <MyContainter>

            <MyImageEdit>
               <Image
                  source={require("../assets/Images/Logo/LogoBlue.png")}
               />
            </MyImageEdit>

            <MyInput placeholder={"First Name"} style={{ marginBottom: 30 }} />
            <MyInput placeholder={"Last Name"} style={{ marginBottom: 30 }} />
            <MyInput placeholder={"CPF"} style={{ marginBottom: 30 }} />
            <MyInput placeholder={"Login"} style={{ marginBottom: 30 }} />
            <MyInput placeholder={"Password"} style={{ marginBottom: 30 }} />
            <MyInput placeholder={"Phone"} style={{ marginBottom: 30 }} />

            <MyButtonOutlined
               text={"Save"}
               onPress={() => {
                  navigation.navigate("Menu");
               }}
            />

            <MyButtonText
               text={"Edit Address"}
               onPress={() => {
                  navigation.navigate("EditAddress");
               }}
            />

         </MyContainter>

      </MyPageContainerView>
   );
}
