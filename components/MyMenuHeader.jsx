import { View } from "react-native";
import { MyTitle } from "../components/MyText";

export function MyMenuHeader(props) {
    return (
        <View
            style={{
                width: "100%",
            }}>
            <MyTitle
                text={`Hello, ${props.name}`}
                style={{
                    fontSize: 30,
                    fontWeight: '500',
                    color: "#00F",
                    textAlign: 'center',
                    marginTop:70
                }}
            />
            <MyTitle
                text={`Balance: $${props.balance}`}
                style={{
                    fontSize: 30,
                    fontWeight: '500',
                    color: "#00F",
                    textAlign: 'center',
                }}
            />
        </View>
    )
}