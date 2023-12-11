import { View } from "react-native";
import { useBearStore } from "../Utils/zustand/store";

import { MyInput } from "../components/MyInput";
import { MyButtonFilled } from "../components/MyButton";
import { api } from "../Utils/api/Settings";
import { useState } from "react";
import { MyStyle } from "../assets/style/StyleSheet";
import { MyTitle } from "../components/MyText";

export default function Withdraw({ navigation }) {
    const token = useBearStore((state) => state.token);
    const account_id = useBearStore((state) => state.account_id);

    const [value, setValue] = useState("");

    const withdraw = () => {
        api.post(
            `api/v1/accounts/${account_id}/withdraw/`,
            { value: `${value}` },
            { headers: { Authorization: "Bearer " + token } }
        )
            .then((response) => {
                // console.log(response)
                navigation.navigate("Menu");
                alert("Withdrew with success");
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
                    text={"Withdraw"}
                />

                <MyInput
                    style={{ width: 300 }}
                    placeholder="How mutch?"
                    keyboardType="numeric"
                    onChangeText={setValue}
                />

                <MyButtonFilled
                    styleBtn={{ width: 150, height: 40 }}
                    onPress={() => withdraw()}
                    text={"Withdraw"}
                />
            </View>
        </View>
    );
}
