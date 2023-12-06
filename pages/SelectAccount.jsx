import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { api } from "../Utils/api/Settings";
import { MyStyle } from "../assets/style/StyleSheet";
import { useNavigation } from "@react-navigation/native";

import { MyTitle } from "../components/MyText";

import { useBearStore } from "../Utils/zustand/store";
import { MyButtonEmpty } from "../components/MyButton";

export default function SelectAccount({ navigation }) {

    const setAccount_id = useBearStore((state) => state.setAccount_id);
    const token = useBearStore((state) => state.token);
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAxODg5NDgwLCJpYXQiOjE3MDE4ODU4ODAsImp0aSI6ImRmN2VlMTZmOTNkMjRkOGZiZGEwYzcwM2U3YTQ5M2I1IiwidXNlcl9pZCI6MX0.LCcX-PIB0nV1ekYziWfiZCze7FC3pr3H5C8pSQUcq7A"

    const setName = useBearStore((state) => state.setName);
    const name = useBearStore((state) => state.name);

    const [data, setData] = useState('')

    const getData = () => {
        // console.log(token)
        // console.log("=========================================")

        api.get("api/v1/accounts", { headers: { Authorization: "Bearer " + token } })
            .then(response => {
                console.log(response.data)
                setData(response.data)
            })
            .catch(err => {
                alert(err)
                console.log(err)
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
                alert(err)
                console.log(err)
            })
    };

    useEffect(() => {
        getData()
        getPersonalInfo()
    }, [])

    return (
        <View style={[MyStyle.center, { flex: 1 }]}
        >
            {/* <MyHomeButton /> */}

            <View>
                <MyTitle text={`Hello, ${name}`} />
                <MyTitle text={`Select an account`} />

                <View style={{ width: 300, height: 600 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setAccount_id(item.id);
                                    navigation.navigate("Menu");
                                }}
                                style={{ borderWidth: 1, marginBottom: 10 }}
                            >
                                <Text style={{ paddingLeft: 5 }}>{item.nickname}</Text>
                                <Text style={{ paddingLeft: 5 }}>{item.agency} {item.number}</Text>
                            </TouchableOpacity>
                        )}
                        style={{
                            height: "100%",
                            width: "100%",
                            marginTop: 25,
                            borderWidth: 1
                        }}
                    />

                    <MyButtonEmpty
                        text={"Create Account"}
                        onPress={() => navigation.navigate("RegisterAccount")}
                    />
                </View>
            </View>
        </View>
    );
}