import { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { api } from "../Utils/api/Settings";
import { MyStyle } from "../assets/style/StyleSheet";
import { useFocusEffect } from "@react-navigation/native";

import { MyTitle } from "../components/MyText";

import { useBearStore } from "../Utils/zustand/store";
import { MyButtonEmpty } from "../components/MyButton";

export default function SelectAccount({ navigation }) {

    const setAccount_id = useBearStore((state) => state.setAccount_id);
    const token = useBearStore((state) => state.token);

    const setName = useBearStore((state) => state.setName);
    const name = useBearStore((state) => state.name);

    const [data, setData] = useState('')

    const getData = () => {
        // console.log(token)
        // console.log("=========================================")

        api.get("api/v1/accounts", { headers: { Authorization: "Bearer " + token } })
            .then(response => {
                // console.log(response.data)
                setData(response.data)
            })
            .catch(err => {
                // console.log(err)
                alert(err)
            })
    };

    const getPersonalInfo = () => {
        //   console.log(token)
        //   console.log("=========================================")

        api.get("api/v1/user/me/", { headers: { Authorization: "Bearer " + token } })
            .then(response => {
                // console.log(response.data)
                setName(response.data.first_name + " " + response.data.last_name)
            })
            .catch(err => {
                // console.log(err)
                alert(err)
            })
    };

    useEffect(() => {
        getData()
        getPersonalInfo()
    }, [])

    useFocusEffect(
        useCallback(() => {
            getData();
            getPersonalInfo();
        }, [])
    );

    return (
        <View style={[MyStyle.center, { flex: 1 }]}>
            {/* <MyHomeButton /> */}

            <View>
                
                <MyTitle
                    text={`Hello, ${name}`}
                    style={{
                        textAlign: 'center',
                        color: "#00F",
                        fontSize: 30,
                        fontWeight: "500"
                    }} />
                
                <MyTitle
                    text={`Select an account`}
                    style={{
                        textAlign: 'center',
                        color: "#00F",
                        fontSize: 25,
                        fontWeight: "500"
                    }} />

                <View style={{ width: 300, height: 600 }}>
                    
                    <FlatList
                        style={{
                            height: "100%",
                            width: "100%",
                            marginTop: 25,
                            borderWidth: 2,
                            borderRadius: 10,
                            borderColor: "#00F",
                            padding: 5
                        }}

                        data={data}
                        renderItem={({ item }) => (

                            <TouchableOpacity
                                onPress={() => {
                                    setAccount_id(item.id);
                                    navigation.navigate("Menu");
                                }}
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    borderColor: "#0000ff",
                                    backgroundColor: "#0000ff",
                                    marginBottom: 10,
                                    padding: 5,
                                }}
                            >
                                <Text style={{ paddingLeft: 15, color: "#FFF", fontSize: 16, letterSpacing: 1.5, height: 25 }}>{item.nickname}</Text>
                                <Text style={{ paddingLeft: 5, color: "#FFF", fontSize: 16, letterSpacing: 1.5 }}>{item.agency} {item.number}</Text>
                            </TouchableOpacity>
                        )}

                    />

                    <MyButtonEmpty
                        text={"Create Account"}
                        onPress={() => navigation.navigate("RegisterAccount")}
                        styleText={{ fontWeight: "500", paddingTop: 25, fontSize: 22 }}
                    />

                </View>
            </View>
        </View>
    );
}