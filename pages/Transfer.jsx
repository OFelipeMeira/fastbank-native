import { View } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { useBearStore } from "../Utils/zustand/store";

import { MyInput } from "../components/MyInput";
import { MyButton } from "../components/MyButton";
// import { MyHomeButton } from "../components/MyHomeButton";
import { api } from "../Utils/api/Settings";
import { MyStyle } from "../assets/style/StyleSheet";
import { useState } from "react";

export default function Transfer({ navigation }) {

    const token = useBearStore((state) => state.token);
    const account_id = useBearStore((state) => state.account_id);

    const [value, setValue] = useState('')
    const [receiver, setReceiver] = useState('')
    const [description, setDescription] = useState('')

    const transfer = () => {
        api.post(
            `api/v1/transfer/`,
            {
                "value": value,
                "sender": account_id,
                "receiver": receiver,
                "description": description
            },
            { headers: { Authorization: "Bearer " + token } }
        )
            .then(response => {
                console.log("FOI")
                // navigation.navigate("TransferDone")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* <MyHomeButton /> */}

            <View>

                <MyInput
                    placeholder="How mutch?"
                    keyboardType="numeric"
                />

                <MyInput
                    placeholder="Account number"
                />

                <MyButton
                    onPress={() => transfer() }
                    text={"Transfer"}
                />

            </View>
        </View>
    );
}