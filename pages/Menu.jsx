import { StatusBar } from "expo-status-bar";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { BtnSettings } from "../layouts/BtnSettings";
import { ViewBalance } from "../layouts/ViewMenuBalance";
import { ViewMenuButtons } from "../layouts/ViewMenuButtons";
import { ViewTTransactionHistory } from "../layouts/ViewMenuTransactionHistory";

export default function Menu() {

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
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <BtnSettings />

            <ViewBalance name={"Felipe" +" " + "Meira"} balance={124563.123}/>

            <ViewMenuButtons />

            <ViewTTransactionHistory data={lista}/>

            <StatusBar style="auto" />
        </View>
    );
}
