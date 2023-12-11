import { View, Text } from "react-native";
import { useBearStore } from "../Utils/zustand/store";

import { MyInput } from "../components/MyInput";
import { MyButtonEmpty, MyButtonFilled } from "../components/MyButton";
import { api } from "../Utils/api/Settings";
import { useState } from "react";
import { MyStyle } from "../assets/style/StyleSheet";

export default function Deposit({ navigation }) {
    const token = useBearStore((state) => state.token);
    const account_id = useBearStore((state) => state.account_id);

    const [value, setValue] = useState("");

    const deposit = () => {
        api.post(
            `api/v1/accounts/${account_id}/deposit/`,
            { value: `${value}` },
            { headers: { Authorization: "Bearer " + token } }
        )
            .then((response) => {
                // console.log(response)
                navigation.navigate("Menu");
                alert("Deposited with success");
            })
            .catch((err) => {
                console.log("========= ERRO on Loan");
                console.log(err);
            });
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <View
                style={[
                    MyStyle.center,
                    { height: 400, justifyContent: "space-evenly" },
                ]}
            >
                <MyTitle
                    text={"Deposit"}
                />

                <MyInput
                    style={{ width: 300 }}
                    placeholder="How mutch?"
                    keyboardType="numeric"
                    onChangeText={setValue}
                />

                <MyButtonFilled
                    styleBtn={{ width: 150, height: 40 }}
                    onPress={() => deposit()}
                    text={"Deposit"}
                />
            </View>
        </View>
    );
}
