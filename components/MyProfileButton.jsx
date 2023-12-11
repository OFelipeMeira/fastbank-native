import { TouchableOpacity, Image } from "react-native";
import BlankImg from "../assets/Images/blank-profile.png";
import { MyStyle } from "../assets/style/StyleSheet";

export function MyProfileButton(props) {
   return (
      <TouchableOpacity
         style={{
            position: "absolute",
            top: 50,
            left: 20,
            width: 65,
            aspectRatio: 1,
            borderWidth: 1,
            borderRadius: 100,
         }}
         onPress={() => props.navigation.navigate("Profile")}
      >
         <Image
            source={BlankImg}
            style={{
               width: "100%",
               height: "100%",
               borderRadius: 100,
               borderWidth: 0,
            }}
         />
      </TouchableOpacity>
   );
}
