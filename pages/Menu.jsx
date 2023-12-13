import { useBearStore } from "../Utils/zustand/store";
import { api } from "../Utils/api/Settings";

// import { BtnSettings } from "../layouts/BtnSettings";

import { useEffect, useState, useCallback } from "react";
import { View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { MyStyle } from "../assets/style/StyleSheet";
import { MyMenuHeader } from "../components/MyMenuHeader";
import { MyMenuButtons } from "../components/MyMenuButtons";
import { MyMenuTransactions } from "../components/MyMenuTransactions";
import { BlankProfile } from "../assets/Images/blank-profile.png";
import { MyProfileButton } from "../components/MyProfileButton";

export default function Menu({ navigation }) {
   const account_id = useBearStore((state) => state.account_id);
   const token = useBearStore((state) => state.token);
   const name = useBearStore((state) => state.name);

   const [balance, setBalance] = useState("");
   const [transactions, setTransactions] = useState("");
   const [userImg, setUserImg] = useState("");

   const getData = () => {
      // Getting data from the account
      api.get(`api/v1/accounts/${account_id}`, {
         headers: { Authorization: "Bearer " + token },
      })
         .then((response) => {
            // console.log(response.data);
            setBalance(response.data.balance);
         })
         .catch((err) => {
            console.log("=========== ERRROOOOO");
            console.log(err);
         });

      // Getting list of transactions
      api.get(`api/v1/transfer/${account_id}/statement/`, {
         headers: { Authorization: "Bearer " + token },
      })
         .then((response) => {
            console.log("Transactions =============================");
            console.log(response.data);
            setTransactions(response.data);
         })
         .catch((err) => {
            alert(err);
            console.log(err);
         });

      // User pic
      api.get(`api/v1/user/me/`, {
         headers: { Authorization: "Bearer " + token },
      })
         .then((response) => {
            // console.log("USER =============================");
            // console.log(response);
            setUserImg(response.data.url_image);
         })
         .catch((err) => {
            console.log("=========== ERRROOOOO");
            console.log(err);
         });
   };

   useEffect(() => {
      getData();
   }, []);

   // Method to update on load
   useFocusEffect(
      useCallback(() => {
         getData();
      }, [])
   );

   return (
      <View
         style={[
            MyStyle.center,
            {
               flex: 1,
               // borderWidth: 5,
            },
         ]}
      >
         {/* show User Pic */}
         {userImg !== null ? (
            <MyProfileButton
               image={{ uri: userImg }}
               navigation={navigation}
            />
         ) : (
            <MyProfileButton
               image={BlankProfile}
               navigation={navigation}
            />
         )}

         {/* show Name and Balance */}
         <MyMenuHeader name={name} balance={balance} />

         {/* show nav buttons */}
         <MyMenuButtons navigation={navigation} />

         {/* show transactions list */}
         <MyMenuTransactions label={"Transactions"} data={transactions} accountId={account_id} />
      </View>
   );
}
