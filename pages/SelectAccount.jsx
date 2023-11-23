import { View } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";

import { MyInput } from "../components/MyInput";
import { MyButton } from "../components/MyButton";
import { MyHomeButton } from "../components/MyHomeButton";
import { MyButtonText } from "../components/MyButtonText";

import { useBearStore } from "../Utils/zustand/store";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SelectAccount() {
    const { navigate } = useNavigation();

    const setAccount_id = useBearStore((state) => state.setAccount_id);
    const token = useBearStore((state) => state.token);
    
    const setName = useBearStore((state) => state.setName);

    const [data, setData] = useState('')
    const [name, setNameLocal] = useState('')

    const getData = () => {
      // console.log(token)
      // console.log("=========================================")

      axios.get("https://1e64-2804-14c-4e7-9ede-38f1-6a6c-4895-7548.ngrok-free.app/api/v1/accounts", {headers:{Authorization:"Bearer " + token}})
      .then( response =>{
         // console.log(response.data)
         setData(response.data)
      })
      .catch(err =>{
         alert(err)
         console.log(err)
      })
    };

    const getPersonalInfo = () => {
      // console.log(token)
      // console.log("=========================================")

      axios.get("https://1e64-2804-14c-4e7-9ede-38f1-6a6c-4895-7548.ngrok-free.app/api/v1/user/me/", {headers:{Authorization:"Bearer " + token}})
      .then( response =>{
         console.log(response.data)
         setName(response.data.first_name + " " +response.data.last_name)
         setNameLocal(response.data.first_name + " " +response.data.last_name)
      })
      .catch(err =>{
         alert(err)
         console.log(err)
      })
    };

    useEffect(()=>{
      getData()
      getPersonalInfo()
    },[])

    const MyContainter = styled.View`
        /* border: 1px solid red; */
        width: 350px;
        height: 650px;
        align-items: center;
        justify-content: space-between;
        padding: 2px;
        margin-bottom: 10px;
    `;

    const ListItem = styled.TouchableOpacity`
        /* border: 1px solid green; */
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 15px;
        padding: 4px;
        /* background-color: #2020ff; */
    `;

    const ListText = styled.Text`
        font-size: 18px;
        font-weight: 500;
        color: #00f;
    `;

    const MyTitle = styled.Text`
        font-size: 30px;
        font-weight: 500;
        color: #00f;
        margin-bottom: 10px;
    `;

    const MySubTitle = styled.Text`
        width: 100%;
        font-size: 25px;
        font-weight: 500;
        color: #00f;
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
            <MyHomeButton />

            <MyContainter>
                <MyTitle>Hello, {name}</MyTitle>
                <MySubTitle>Select an account</MySubTitle>

                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <ListItem
                            onPress={() => {
                                setAccount_id(item.id);
                                navigate("Menu");
                            }}
                        >
                            <ListText>{item.id}</ListText>
                            <ListText>{item.agencia}</ListText>
                            <ListText>{item.numero}</ListText>
                        </ListItem>
                    )}
                    style={{
                        height: "100%",
                        width: "100%",
                        marginTop: 25,
                    }}
                />
            </MyContainter>
        </View>
    );
}
