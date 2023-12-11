import { View, Text } from "react-native";
import { useBearStore } from "../Utils/zustand/store";

import { MyInput } from "../components/MyInput";
import { MyButtonFilled } from "../components/MyButton";
import { api } from "../Utils/api/Settings";
import { useState } from "react";
import { MyStyle } from "../assets/style/StyleSheet";
import { MyTitle } from "../components/MyText";

export default function Transfer({ navigation }) {
   const token = useBearStore((state) => state.token);
   const account_id = useBearStore((state) => state.account_id);

   const [value, setValue] = useState("");
   const [receiver, setReceiver] = useState("");
   const [description, setDescription] = useState("");

   const transfer = () => {
      api.post(
         `api/v1/transfer/`,
         {
            value: value,
            sender: account_id,
            receiver: receiver,
            description: description,
         },
         { headers: { Authorization: "Bearer " + token } }
      )
         .then((response) => {
            // navigation.navigate("TransferDone")
            navigation.navigate("Menu");
            alert(response.data.message);
         })
         .catch((err) => {
            console.log("========= ERRO na transferencia");
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

         <MyTitle
            text={"New Transaction"}
         />

         <View style={[MyStyle.center, {height: 400, justifyContent: "space-evenly"}]}>
            <MyInput style={{width: 300}}
               placeholder="How mutch?"
               keyboardType="numeric"
               onChangeText={setValue}
            />

            <MyInput style={{width: 300}} placeholder="Account number" onChangeText={setReceiver} />

            <MyInput style={{width: 300}} placeholder="Description" onChangeText={setDescription} />

            <MyButtonFilled styleBtn={{width: 120, height: 40}} onPress={() => transfer()} text={"Transfer"} />
         </View>
      </View>
   );
}
