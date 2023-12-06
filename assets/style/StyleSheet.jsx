import { StyleSheet } from "react-native"

export const MyStyle = StyleSheet.create({
    center:{
        alignItems:"center",
        justifyContent:"center"
    },
    input:{
        color: "#00f",
        paddingLeft: 5,
        fontSize:20,
        fontWeight:"400",
        borderWidth: 0,
        borderBottomWidth: 1.5,
        borderColor: "#00f"
    },
    buttonFilled:{
        backgroundColor: "#00F",
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10
    },
    buttonTextFilled:{
        color: "#FFF",
        fontSize: 20,
        fontWeight:"500"
    },
    buttonEmpty:{
        // backgroundColor: "#ffffff",
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10
    },
    buttonTextEmpty:{
        color: "#00F",
        fontSize: 20,
        fontWeight:"400"
    },

})