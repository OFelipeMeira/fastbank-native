import { TouchableOpacity, Image, } from "react-native"

import { MyStyle } from "../assets/style/StyleSheet"

export function MyProfileButton(props) {
    return (

        <TouchableOpacity
            style={{
                position: "absolute",
                top: 15,
                left: 15,
                width: 65,
                aspectRatio: 1
            }}
            onPress={() => props.navigation.navigate("Profile")}
        >
            <Image
                source={props.image}
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 100,
                    borderWidth: 0,
                }}
            />
        </TouchableOpacity>
    )
}