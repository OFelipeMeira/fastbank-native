import { View } from "react-native";
import { MyButtonIcon } from "./MyButton";

export function MyMenuButtons(props) {
   return (
      <View
         style={{
            width: 300,
            paddingTop: 50,
            paddingBottom: 30,
         }}
      >
         <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <MyButtonIcon
               label={"Transfer"}
               navigation={() => props.navigation.navigate("Transfer")}
            />
            <MyButtonIcon
               label={"Loan"}
               navigation={() => props.navigation.navigate("Loan")}
            />
            <MyButtonIcon
               label={"Credit"}
               navigation={() => props.navigation.navigate("Credit")}
            />
         </View>
         <View style={{ flexDirection: "row", justifyContent: "center", marginTop:10 }}>
            <MyButtonIcon
               label={"Deposit"}
               navigation={() => props.navigation.navigate("Deposit")}
            />
            <MyButtonIcon
               label={"Withdraw"}
               navigation={() => props.navigation.navigate("Withdraw")}
            />
         </View>
      </View>
   );
}
