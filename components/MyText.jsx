import { Text } from "react-native"

import { MyStyle } from "../assets/style/StyleSheet"

export function MyTitle(props) {
    return(
        <Text style={[MyStyle.textTitle, props.style]}>
            {props.text}
        </Text>
    )
}