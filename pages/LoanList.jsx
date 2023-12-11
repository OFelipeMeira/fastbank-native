import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { useBearStore } from "../Utils/zustand/store";

import { api } from "../Utils/api/Settings";
import { useEffect, useState } from "react";
import { MyStyle } from "../assets/style/StyleSheet";
import { MyTitle } from "../components/MyText";

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
         <View
            style={[
               MyStyle.center,
               {
                  height: 600,
                  width: 300,
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: "#00F",
               },
            ]}
         >
            <MyTitle
               text={"Loan List"}
               style={{
                  textAlign: "center",
                  color: "#00F",
                  fontSize: 30,
                  fontWeight: "500",
               }}
            />

            <FlatList
               data={data}
               renderItem={({ item }) => (
                  <TouchableOpacity
                     style={{
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: "#0000ff",
                        backgroundColor: "#0000ff",
                        marginBottom: 10,
                        padding: 5,
                     }}
                  >
                     <Text
                        style={{
                           paddingLeft: 15,
                           color: "#FFF",
                           fontSize: 16,
                           letterSpacing: 1.5,
                           height: 25,
                        }}
                     >
                        Value:
                     </Text>
                     <Text
                        style={{
                           paddingLeft: 15,
                           color: "#FFF",
                           fontSize: 16,
                           letterSpacing: 1.5,
                           height: 25,
                        }}
                     >
                        {item.value}
                     </Text>
                     <Text
                        style={{
                           paddingLeft: 15,
                           color: "#FFF",
                           fontSize: 16,
                           letterSpacing: 1.5,
                           height: 25,
                        }}
                     >
                        Installments:
                     </Text>
                     <Text
                        style={{
                           paddingLeft: 15,
                           color: "#FFF",
                           fontSize: 16,
                           letterSpacing: 1.5,
                           height: 25,
                        }}
                     >
                        {item.installments}
                     </Text>
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
