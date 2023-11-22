import styled from "styled-components/native";

import { MyInput } from "../components/MyInput";
import { MyButtonOutlined } from "../components/MyButtonOutlined";
import { MyButtonText } from "../components/MyButtonText";

export default function EditAddress({ navigation }) {
   const MyPageContainerView = styled.View`
      /* border: 1px solid green; */
      width: 100%;
      height: 100%;
      align-items: center;
   `;

   const MyContainter = styled.View`
      /* border: 1px solid red; */
      height: 600px;

      align-items: center;
      justify-content: space-around;
   `;

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

            <MyInput placeholder={"CEP"} style={{ marginBottom: 30 }} />
            <MyInput placeholder={"Street"} style={{ marginBottom: 30 }} editable={false} disabled />
            <MyInput placeholder={"State"} style={{ marginBottom: 30 }} editable={false} disabled />
            <MyInput placeholder={"Complement"} style={{ marginBottom: 30 }} />
            <MyInput placeholder={"Number"} style={{ marginBottom: 30 }}/>

            <MyButtonOutlined
               text={"Save"}
               onPress={() => {
                  navigation.navigate("Login");
               }}
            />

         </MyContainter>

      </MyPageContainerView>
   );
}
