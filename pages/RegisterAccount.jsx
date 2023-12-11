import { useState } from "react";
import { View } from "react-native";
import { MyStyle } from "../assets/style/StyleSheet";
import { api } from "../Utils/api/Settings";

import { MyInput } from "../components/MyInput";
import { MyButtonFilled } from "../components/MyButton";
import { MyTitle } from "../components/MyText";

import { useBearStore } from "../Utils/zustand/store";


export default function RegisterAccount({ navigation }) {

    const token = useBearStore((state) => state.token);

    const [nickname, setNickname] = useState("");

    const registerAccount = async () => {
        await api.post(
            "api/v1/accounts/",
            {
                "nickname": nickname
            },
            { headers: { Authorization: "Bearer " + token } }
        )
            .then((response) => {
                console.log("========= Data")
                console.log("REGISTRADO")
                navigation.navigate("SelectAccount");
            })
            .catch((err) => {
                console.log("========= Error")
                console.log(err.response)
            });
    }

    return (
        <View style={[MyStyle.center, { flex: 1 }]}>
            <View style={[MyStyle.center, { width: 300, height: 500, justifyContent: "space-evenly" }]}>

                <MyTitle text="Give a nickname for your account" />

                <MyInput onChangeText={(text) => setNickname(text)} style={{ width: 300 }} placeholder="Nickname" />

                <MyButtonFilled
                    text={"Create Account"}
                    onPress={() => registerAccount()}
                    styleBtn={{ width: 170, height: 50 }}
                    styleText={{}}
                />
            </View>
        </View>
    );
}