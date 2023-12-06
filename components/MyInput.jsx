import { TextInput } from "react-native"

import { MyStyle } from "../assets/style/StyleSheet"

export function MyInput(props) {
    return(
        <TextInput
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            value={props.value}
            style={[MyStyle.input, props.style]}
            secureTextEntry={props.secureTextEntry}
            keyboardType={props.keyboardType}
        />
    )
}