import { View, Text } from "react-native";
import { useBearStore } from "../Utils/zustand/store";

import { MyInput } from "../components/MyInput";
import { MyButtonEmpty, MyButtonFilled } from "../components/MyButton";
import { api } from "../Utils/api/Settings";
import { useState } from "react";
import { MyStyle } from "../assets/style/StyleSheet";
import { MyTitle } from "../components/MyText";

export default function Credit({ navigation }) {
   const token = useBearStore((state) => state.token);
   const account_id = useBearStore((state) => state.account_id);

   const [value, setValue] = useState("");
   const [installments, setInstallments] = useState("");

   const credit = () => {
      api.post(
         `api/v1/credit/`,
         {
            account: account_id,
            installments: installments,
            value: `${value}`,
         },
         { headers: { Authorization: "Bearer " + token } }
      )
         .then((response) => {
            // console.log(response)
            // navigation.navigate("Menu");
            alert(response.data.message);
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
               text={"Credit"}
            />


            <MyInput
               style={{ width: 300 }}
               placeholder="How mutch?"
               keyboardType="numeric"
               onChangeText={setValue}
            />

            <MyInput
               style={{ width: 300 }}
               placeholder="How many installments?"
               keyboardType="numeric"
               onChangeText={setInstallments}
            />

            <MyButtonFilled
               styleBtn={{ width: 160, height: 40 }}
               onPress={() => credit()}
               text={"Pay with Credit"}
            />

            <MyButtonEmpty
               styleBtn={{ width: 150, height: 40 }}
               onPress={() => navigation.navigate("CreditList")}
               text={"My buys"}
            />
         </View>
      </View>
   );
}
