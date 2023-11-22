import { View } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { MyInput } from "../components/MyInput";
import { MyButton } from "../components/MyButton";
import { MyHomeButton } from "../components/MyHomeButton";
import { MyButtonText } from "../components/MyButtonText";

export default function Loan() {
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
            
            <MyInput placeholder="How many installments" keyboardType="numeric"/>

            <MyButton onPress={()=> navigate("Menu")} text={"Apply for loan"}/>
            <MyButtonText text={"Previous Loans"} onPress={()=> navigate("LoanList")}/>

         </MyContainter>
      </View>
   );
}
