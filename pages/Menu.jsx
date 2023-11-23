import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { BtnSettings } from "../layouts/BtnSettings";
import { ViewBalance } from "../layouts/ViewMenuBalance";
import { ViewMenuButtons } from "../layouts/ViewMenuButtons";
import { ViewTransactionHistory } from "../layouts/ViewMenuTransactionHistory";
import { useEffect, useState } from "react";

import { useBearStore } from "../Utils/zustand/store";
import axios from "axios";

export default function Menu({ navigation }) {
    const account_id = useBearStore((state) => state.account_id);

    useEffect(() => {
        getData();
    });

    const token = useBearStore((state) => state.token);
    const name = useBearStore((state) => state.name);
    const [saldo, setSaldo] = useState("");


    const getData = () => {
        axios
            .get(
                `https://1e64-2804-14c-4e7-9ede-38f1-6a6c-4895-7548.ngrok-free.app/api/v1/accounts/${account_id}`,
                { headers: { Authorization: "Bearer " + token } }
            )
            .then((response) => {
                console.log(response.data);
                setSaldo(response.data.saldo);
            })
            .catch((err) => {
                alert(err);
                console.log(err);
            });
    };

    const MyPageContainerView = styled.View`
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        background-color: #fff;
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
            <BtnSettings navigation={navigation} />

            <ViewBalance name={name} balance={saldo} />

            <ViewMenuButtons />

            <ViewTransactionHistory data={""} />

            <StatusBar style="auto" />
        </MyPageContainerView>
    );
}
