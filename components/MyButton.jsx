import { TouchableOpacity, Text, View } from "react-native"

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

export function MyButtonIcon(props) {
    return (
        <TouchableOpacity
            style={{
                justifyContent: "center",
                alignItems: "center",
                marginHorizontal: 8
            }}
            onPress={() => props.navigation()}
        >
            <View
                style={{
                    width: 50,
                    aspectRatio: 1 / 1,
                    borderRadius: 5,
                    borderWidth: 2,
                    borderColor: "#00F",
                }}
            >

            </View>
            <Text
            style={{
                fontSize: 15,
                fontWeight: "600",
                color:"#00F",
                letterSpacing: 1.1,
            }}
            >{props.label}</Text>
        </TouchableOpacity>
    )
}