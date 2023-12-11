import { View } from "react-native";
import { MyButtonIcon } from "./MyButton";


export function MyMenuButtons(props) {
    return (
        <View
            style={{
                flexDirection: "row",
                width: 300,
                justifyContent: "space-evenly",
                // borderWidth:1,
                paddingTop: 50,
                paddingBottom: 30
            }}
        >
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
            <MyButtonIcon
                label={"Deposit"}
                navigation={() => props.navigation.navigate("Deposit")}
            />
            <MyButtonIcon
                label={"Withdraw"}
                navigation={() => props.navigation.navigate("Withdraw")}
            />
        </View>
    )
}