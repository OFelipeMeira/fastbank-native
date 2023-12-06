import { useBearStore } from "../Utils/zustand/store";
import { api } from "../Utils/api/Settings";

import { BtnSettings } from "../layouts/BtnSettings";
// import { ViewBalance } from "../layouts/ViewMenuBalance";
// import { ViewMenuButtons } from "../layouts/ViewMenuButtons";
// import { ViewTransactionHistory } from "../layouts/ViewMenuTransactionHistory";
import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import { MyStyle } from "../assets/style/StyleSheet";
import { MyTitle } from "../components/MyText";

export default function Menu({ navigation }) {

    const account_id = useBearStore((state) => state.account_id);
    const setAccount_id = useBearStore((state) => state.setAccount_id);
    const token = useBearStore((state) => state.token);
    const name = useBearStore((state) => state.name);

    const [balance, setBalance] = useState("");
    const [transactions, setTransactions] = useState("");

    const getData = () => {
        api.get(
            `api/v1/accounts/${account_id}`,
            { headers: { Authorization: "Bearer " + token } }
        )
            .then((response) => {
                // console.log(response.data);
                setBalance(response.data.balance);
            })
            .catch((err) => {
                alert(err);
                console.log(err);
                console.log("=========== ERRROOOOO");
            });

        api.get(
            `api/v1/transfer/${account_id}/statement/`,
            { headers: { Authorization: "Bearer " + token } }
        )
            .then((response) => {
                console.log(response.data);
                setTransactions(response.data);
            })
            .catch((err) => {
                alert(err);
                console.log(err);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={[MyStyle.center, { flex: 1 }]}>
            {/* <BtnSettings navigation={navigation} /> */}

            <View>
                <MyTitle text={`Hello, ${name}`} />
                <MyTitle text={`$${balance}`} />
            </View>

            <View style={{ flexDirection: 'row', width: 300, justifyContent: "space-evenly" }}>
                <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                    onPress={() => { }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Transfer")}
                        style={{ width: 30, height: 30, backgroundColor: "#00f" }}
                    >

                    </TouchableOpacity>
                    <Text>Transfer</Text>
                </View>
                <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                    onPress={() => { }}
                >
                    <TouchableOpacity onPress={() => navigation.navigate("")} style={{ width: 30, height: 30, backgroundColor: "#00f" }}>

                    </TouchableOpacity>
                    <Text>Loan</Text>
                </View>
                <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                    onPress={() => { }}
                >
                    <TouchableOpacity onPress={navigation.navigate("")} style={{ width: 30, height: 30, backgroundColor: "#00f" }}>

                    </TouchableOpacity>
                    <Text>Credit Card</Text>
                </View>

            </View>


            <View style={{ height: 400 }}>
                <Text>Transactions</Text>
                <View style={{ borderWidth: 1 }}>
                    <FlatList
                        data={transactions}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setAccount_id(item.id);
                                    navigation.navigate("Menu");
                                }}
                                style={{ borderWidth: 1, marginBottom: 10, width: 250 }}
                            >
                                <Text style={{ marginLeft: 5, padding: 2 }}>${item.value}</Text>
                                <Text style={{ marginLeft: 5, padding: 2 }}>{item.receiver.agency} {item.receiver.number}</Text>
                                <Text style={{ marginLeft: 5, padding: 2 }}>{item.description}</Text>
                            </TouchableOpacity>
                        )}
                        style={{
                            height: "100%",
                            width: "100%",
                            padding: 10
                        }}
                    />

                </View>

            </View>

            {/* <ViewMenuButtons />

            <ViewTransactionHistory data={""} /> */}

        </View>
    );
}