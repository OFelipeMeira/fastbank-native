import { useBearStore } from "../Utils/zustand/store";
import { api } from "../Utils/api/Settings";
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { MyStyle } from "../assets/style/StyleSheet";

import { MyInput } from "../components/MyInput";
import { MyButtonFilled } from "../components/MyButton";
import { MyButtonEmpty } from "../components/MyButton";


export default function Login({ navigation }) {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const setToken = useBearStore((state) => state.setToken);

   useEffect(() => {
      setToken(undefined);
   }, []);

   const login = async () => {
      await api.post(
         "api/token/",
         {
            "email": email,
            "password": password,
            // "email": "a@b.com",
            // "password": "123456"
         }
      )
         .then((response) => {
            console.log("========= Data")
            console.log(email)
            console.log(password)
            setToken(response.data.access);
            navigation.navigate("SelectAccount");
         })
         .catch((err) => {
            console.log("========= Error")
            console.log("========= Data")
            // console.log(email)
            // console.log(password)
            // console.log("========= Error")
            console.log(err.toJSON())
            console.log("L==== Error")
            console.log(err.response.data)
            if (err.response.data.detail) {
               alert(err.response.data.detail)
            }else{
               alert("No Account Found")
            }
         });
   };

   return (
      <View style={[MyStyle.center, { flex: 1 }]}>
         <View style={[MyStyle.center, { width: 300, height: 600, justifyContent: "space-evenly" }]}>

            <Image
               source={require("../assets/Images/Logo/LogoBlue.png")}
            />

            <MyInput
               placeholder="Email"
               onChangeText={(text) => setEmail(text)}
               value={email}
               style={{ width: 300 }}
            />

            <MyInput
               value={password}
               onChangeText={setPassword}
               placeholder="Password"
               secureTextEntry={true}
               style={{ width: 300 }}
            />

            <MyButtonFilled
               text={"Login"}
               onPress={() => login()}
               styleBtn={{ width: 150, height: 50 }}
            />

            <MyButtonEmpty
               text={"Register"}
               onPress={() => navigation.navigate("Register")}
            />
         </View>

      </View>
   );
}
