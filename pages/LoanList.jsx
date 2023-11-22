import { View } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";

import { MyInput } from "../components/MyInput";
import { MyButton } from "../components/MyButton";
import { MyHomeButton } from "../components/MyHomeButton";
import { MyButtonText } from "../components/MyButtonText";

export default function LoanList() {
   const { navigate } = useNavigation()

   const MyContainter = styled.View`
      border: 1px solid red;
      width: 350px;
      height: 500px;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
      margin-bottom: 10px;
   `;

   const data = [
      { valor1: "a", valor2: "b", valor3: "c" },
      { valor1: "a", valor2: "b", valor3: "c" },
      { valor1: "a", valor2: "b", valor3: "c" },
      { valor1: "a", valor2: "b", valor3: "c" },
      { valor1: "a", valor2: "b", valor3: "c" },
      { valor1: "a", valor2: "b", valor3: "c" },
      { valor1: "a", valor2: "b", valor3: "c" },
      { valor1: "a", valor2: "b", valor3: "c" },
      { valor1: "a", valor2: "b", valor3: "c" },
      { valor1: "a", valor2: "b", valor3: "c" },
      { valor1: "a", valor2: "b", valor3: "c" },
      { valor1: "a", valor2: "b", valor3: "c" },
      { valor1: "a", valor2: "b", valor3: "c" },
      { valor1: "a", valor2: "b", valor3: "c" },
      { valor1: "a", valor2: "b", valor3: "c" },
   ]

   const ListItem = styled.View`
   /* border: 1px solid green; */
   flex-direction: row;
   justify-content: space-between;
   padding: 8px;
   /* background-color: #2020ff; */
   `;

   const ListTitle = styled.Text`
   font-size: 22px;
   font-weight: 500;
   color: #00f;
   `;

   const ListText = styled.Text`
   font-size: 18px;
   font-weight: 500;
   color: #00f;
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
            <ListTitle>Previous loans</ListTitle>
            <FlatList
               data={data}
               renderItem={({ item }) => (
                  <ListItem>
                     <ListText>{item.valor1}</ListText>
                     <ListText>{item.valor2}</ListText>
                     <ListText>{item.valor3}</ListText>
                  </ListItem>
               )}
               style={{
                  height: "100%",
                  width: "100%",
               }}
            />
         </MyContainter>
         <MyButton text={"New Loan"} onPress={() => navigate("Loan")} />
      </View>
   );
}
