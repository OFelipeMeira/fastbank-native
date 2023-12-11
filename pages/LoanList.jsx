import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useBearStore } from "../Utils/zustand/store";

import { MyInput } from "../components/MyInput";
import { MyButtonEmpty, MyButtonFilled } from "../components/MyButton";
import { api } from "../Utils/api/Settings";
import { useEffect, useState } from "react";
import { MyStyle } from "../assets/style/StyleSheet";

export default function LoanList() {
   const token = useBearStore((state) => state.token);

   const [data, setData] = useState();

   const loanList = () => {
      api.get(`api/v1/loan/`, { headers: { Authorization: "Bearer " + token } })
         .then((response) => {
            setData(response.data);
         })
         .catch((err) => {
            console.log("========= ERRO on Loan");
            console.log(err);
         });
   };

   useEffect(() => {
      loanList();
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
               text={"Loan List"}
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
