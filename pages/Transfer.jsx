import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styled from "styled-components/native";

import { MyInput } from "../components/MyInput";
import { MyButton } from "../components/MyButton";
import { MyHomeButton } from "../components/MyHomeButton";

export default function Transfer() {
    const MyContainter = styled.View`
        /* border: 1px solid red; */
        width: 300px;
        height: 300px;
        align-items: center;
        justify-content: space-between;
    `;

    const MyText = styled.Text`
        font-size: 30px;
        font-weight: 500;
        color:#00f;
    `

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
                <MyInput placeholder="Account number"/>
                
                <MyInput placeholder="How mutch?"/>

                <MyButton text={"Transfer"} />
            </MyContainter>
            <StatusBar style="auto" />
        </View>
    );
}
