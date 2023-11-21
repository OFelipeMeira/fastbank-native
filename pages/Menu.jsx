import { StatusBar } from "expo-status-bar";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { BtnSettings } from "../layouts/BtnSettings";
import { ViewBalance } from "../layouts/ViewMenuBalance";
import { ViewMenuButtons } from "../layouts/ViewMenuButtons";
import { ViewTransactionHistory } from "../layouts/ViewMenuTransactionHistory";

export default function Menu() {
   const MyPageContainerView = styled.View`
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
   `;

   const lista = [
      { conta: "1234123412341234", valor: 123.5 },
      { conta: "1234123412345678", valor: 456.5 },
      { conta: "1234123412346910", valor: 789.5 },
      { conta: "1234123412341234", valor: 123.5 },
      { conta: "1234123412345678", valor: 456.5 },
      { conta: "1234123412346910", valor: 789.5 },
      { conta: "1234123412341234", valor: 123.5 },
      { conta: "1234123412345678", valor: 456.5 },
      { conta: "1234123412346910", valor: 789.5 },
      { conta: "1234123412341234", valor: 123.5 },
      { conta: "1234123412345678", valor: 456.5 },
      { conta: "1234123412346910", valor: 789.5 },
   ];

   return (
      <MyPageContainerView>
         <BtnSettings />

         <ViewBalance name={"Felipe" + " " + "Meira"} balance={124563.123} />

         <ViewMenuButtons />

         <ViewTransactionHistory data={lista} />

         <StatusBar style="auto" />
      </MyPageContainerView>
   );
}
