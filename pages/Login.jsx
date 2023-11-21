import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";
import styled from "styled-components/native";

import { MyInput } from "../components/MyInput";
import { MyButton } from "../components/MyButton";

export const Login = () =>{

    const MyContainter = styled.View`
        height: 500px;
        align-items: center;
        justify-content: space-evenly;
        /* border: 1px solid red; */
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
            <MyContainter>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require("../assets/icon.png")}
                />

                <MyInput placeholder="Email" />
                <MyInput placeholder="Password" secureTextEntry={true} />

                <MyButton text={"Login"} onPress={navigator.navigate("Register")}/>
            </MyContainter>
            <StatusBar style="auto" />
        </View>
    );
}
