import { TextInput, Text, View } from "react-native"

import { MyStyle } from "../assets/style/StyleSheet"

export function MyInput(props) {
    return (
        <View>
            <Text style={[MyStyle.inputLabel,]}>{props.label}</Text>
            <TextInput
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.value}
                style={[MyStyle.input, props.style]}
                secureTextEntry={props.secureTextEntry}
                keyboardType={props.keyboardType}
                editable={props.editable}
            />
        </View>
    )
}