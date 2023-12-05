import styled from "styled-components/native";
import { useEffect, useState } from "react";

import { MyInput } from "../components/MyInput";
import { MyButton } from "../components/MyButton";
import { MyButtonOutlined } from "../components/MyButtonOutlined";

import { useBearStore } from "../Utils/zustand/store";
import { api } from "../Utils/api/settings";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const setToken = useBearStore((state) => state.setToken);

    useEffect(() => {
        setToken(undefined);
    }, []);

    const login = async () => {
        await api.post(
                        "api/token/",
                        {
                            "email": email,
                            "password": password,
                            // email: "admin@admin.com",
                            // password: "123456",
                        }
                    )
                    .then((response) => {
                        console.log("========= Data")
                        console.log(email)
                        console.log(password)
                        setToken(response.data.access);
                        navigation.navigate("SelectAccount");
                    })
                    .catch((err) => {
                        console.log("========= Data")
                        console.log(email)
                        console.log(password)
                        console.log("========= Error")
                    });
    };

    const MyPageContainerView = styled.View`
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        background-color: #fff;
    `;

    const MyContainterView = styled.View`
        height: 500px;
        align-items: center;
        justify-content: space-evenly;
        /* border: 1px solid red; */
    `;

    const MyImg = styled.Image`
        object-fit: contain;
        /* border: 1px solid red; */
    `;

    return (
        <MyPageContainerView>
            <MyContainterView>
                
                <MyImg source={require("../assets/Images/Logo/LogoBlue.png")} />
                
                <MyInput
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                
                <MyInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    secureTextEntry={true}
                />

                <MyButton text={"Login"} onPress={() => login()} />
                <MyButtonOutlined
                    text={"Register"}
                    onPress={() => navigation.navigate("Register")}
                />
            </MyContainterView>
        </MyPageContainerView>
    );
}
