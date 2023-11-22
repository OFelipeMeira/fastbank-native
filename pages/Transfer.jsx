import { View } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { MyInput } from "../components/MyInput";
import { MyButton } from "../components/MyButton";
import { MyHomeButton } from "../components/MyHomeButton";

export default function Transfer() {
   const { navigate } = useNavigation()

   const MyContainter = styled.View`
      /* border: 1px solid red; */
      width: 300px;
      height: 300px;
      align-items: center;
      justify-content: space-between;
   `;

   return (
      <View
         style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <MyHomeButton />

         <MyContainter>
            <MyInput placeholder="How mutch?" keyboardType="numeric" />
            
            <MyInput placeholder="Account number" />

            <MyButton onPress={()=> navigate("TransferDone")} text={"Transfer"} />
         </MyContainter>
      </View>
   );
}
