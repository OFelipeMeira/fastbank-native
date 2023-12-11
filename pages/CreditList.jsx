import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useBearStore } from "../Utils/zustand/store";

import { MyInput } from "../components/MyInput";
import { MyButtonEmpty, MyButtonFilled } from "../components/MyButton";
import { api } from "../Utils/api/Settings";
import { useEffect, useState } from "react";
import { MyStyle } from "../assets/style/StyleSheet";

export default function CreditList({ navigation }) {
   const token = useBearStore((state) => state.token);
   const account_id = useBearStore((state) => state.account_id);

   const [data, setData] = useState();

   const creditList = () => {
      api.get(`api/v1/credit/${account_id}`, { headers: { Authorization: "Bearer " + token } })
         .then((response) => {
            console.log(response.data);
            setData(response.data);
         })
         .catch((err) => {
            console.log("========= ERRO on Loan");
            console.log(err);
         });
   };

   useEffect(() => {
      creditList();
   }, []);

   return (
      <View
         style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <View style={[MyStyle.center, { height: 600, width: 300 }]}>
            
            <MyTitle
               text={"Credit List"}
            />
            
            <FlatList
               data={data}
               renderItem={({ item }) => (
                  <TouchableOpacity
                     style={{
                        borderWidth: 1,
                        marginBottom: 10,
                        width: 250,
                        padding: 5,
                     }}
                  >
                     <Text>Value:</Text>
                     <Text>{item.value}</Text>

                     <Text>Installments:</Text>
                     <Text>{item.installments}</Text>
                  </TouchableOpacity>
               )}
               style={{
                  height: "100%",
                  width: "100%",
                  padding: 10,
               }}
            />
            
         </View>
      </View>
   );
}
