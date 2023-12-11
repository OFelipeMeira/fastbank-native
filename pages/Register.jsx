import { useState } from "react";
import { View } from "react-native";
import { MyStyle } from "../assets/style/StyleSheet";
import { api } from "../Utils/api/Settings";

import { MyInput } from "../components/MyInput";
import { MyButtonFilled } from "../components/MyButton";


export default function Register({ navigation }) {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");


    const register = async () => {
        await api.post(
            "api/v1/user/create",
            {
                "email": email,
                "password": password,
                "first_name": firstName,
                "last_name": lastName,
                "cpf": cpf
            }
        )
            .then((response) => {
                console.log("REGISTRADO")
                // console.log(response)
                navigation.navigate("Login");
            })
            .catch((err) => {
                console.log("========= Error")
                console.log(email)
                console.log(password)
                console.log(firstName)
                console.log(lastName)
                console.log(cpf)
                console.log("========= Error")
                console.log(err)
                console.log("========= Error")
            });
    }

    return (
        <View style={[MyStyle.center, { flex: 1 }]}>
            <View style={[MyStyle.center, { width: 300, height: 500, justifyContent: "space-evenly" }]}>
                <MyInput
                    onChangeText={(text) => setEmail(text)}
                    style={{ width: 300 }}
                    placeholder="Email"
                />
                <MyInput
                    onChangeText={(text) => setPassword(text)}
                    style={{ width: 300 }}
                    placeholder="Password" secureTextEntry={true}
                />
                <MyInput
                    onChangeText={(text) => setFirstName(text)}
                    style={{ width: 300 }}
                    placeholder="First Name"
                />
                <MyInput
                    onChangeText={(text) => setLastName(text)}
                    style={{ width: 300 }}
                    placeholder="Last Name"
                />
                <MyInput
                    onChangeText={(text) => setCpf(text)}
                    style={{ width: 300 }}
                    placeholder="CPF"
                />

                <MyButtonFilled
                    text={"Register"}
                    onPress={() => register()}
                    styleBtn={{ width: 150, height: 50 }}
                    styleText={{}}
                />
            </View>
        </View>
    );
}