import { TouchableOpacity, Text } from "react-native"

import { MyStyle } from "../assets/style/StyleSheet"

export function MyButtonFilled(props) {
    return (
        <TouchableOpacity
            style={[MyStyle.buttonFilled, props.styleBtn]}
            onPress={props.onPress}
        >
            <Text style={[MyStyle.buttonTextFilled, props.styleText]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export function MyButtonEmpty(props) {
    return (
        <TouchableOpacity
            style={[MyStyle.buttonEmpty, props.styleBtn]}
            onPress={props.onPress}
        >
            <Text style={[MyStyle.buttonTextEmpty, props.styleText]}>{props.text}</Text>
        </TouchableOpacity>
    )
}