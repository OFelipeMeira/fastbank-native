// import styled from "styled-components/native";
import { TextInput } from "react-native"

import { MyStyle } from "../assets/style/StyleSheet"

export function MyInput(props) {
    // const Input = styled.TextInput`
    // /* border-width: 1px; */
    // width: 300px;
    // height: 40px;
    // padding-left: 15px;
    // border-color: #00f;
    // font-size: 20px;
    // color: ${(props) => (props.disabled ? "#5858b8" : "#00f")};
    // border-bottom-width:1px;
    // background-color: ${(props) => (props.disabled ? "#eeeeee" : "#fff")};
    // `;

    return(
        <TextInput
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            value={props.value}
            style={[MyStyle.input, props.style]}
        />
    )
}