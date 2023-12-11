import { useBearStore } from "../Utils/zustand/store";
import { api } from "../Utils/api/Settings";
import { useEffect, useState, useCallback } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import BlankProfile from "../assets/Images/blank-profile.png";

import { MyStyle } from "../assets/style/StyleSheet";
import { MyInput } from "../components/MyInput";

export default function Profile() {
   const account_id = useBearStore((state) => state.account_id);
   const token = useBearStore((state) => state.token);

   const [userData, setUserData] = useState("");
   const [accountData, setAccountData] = useState("");

   const [selectedImage, setSelectedImage] = useState(null);

   useEffect(() => {
      getData();
   }, []);

   useFocusEffect(
      useCallback(() => {
         getData();
      }, [])
   );

   useEffect(() => {
      console.log(userData);
   }, [userData]);

   useEffect(() => {
      console.log(selectedImage);
      if (selectedImage) {
         uploadImage();
      }
   }, [selectedImage]);

   useFocusEffect(
      useCallback(() => {
         getData();
      }, [])
   );

   const getData = () => {
      api.get(`api/v1/accounts/${account_id}`, {
         headers: { Authorization: "Bearer " + token },
      })
         .then((response) => {
            console.log(response.data);
            setAccountData(response.data);
         })
         .catch((err) => {
            console.log("=========== ERRROOOOO");
            console.log(err);
         });

      api.get(`api/v1/user/me`, {
         headers: { Authorization: "Bearer " + token },
      })
         .then((response) => {
            console.log(response.data);
            setUserData(response.data);
         })
         .catch((err) => {
            console.log("=========== ERRROOOOO");
            console.log(err);
         });
   };

   const pickImage = async () => {
      let result = await ImagePicker.launchCameraAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         allowsEditing: true,
         aspect: [1, 1],
         quality: 1,
      });

      setSelectedImage(result.assets[0].uri);
   };

   const uploadImage = () => {
      console.log("testeasr");
      const formData = new FormData();
      formData.append("url_image", {
         uri: selectedImage,
         name: "photo.jpg",
         type: "image/jpg",
      });

      api.patch("/api/v1/user/me/", formData, {
         headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
         },
      })
         .then((response) => {
            console.log("Image uploaded successfully:", response.data);
            getData();
         })
         .catch((error) => {
            console.error("Error uploading image:", error.toJSON());
         });
   };

   return (
      <View style={[MyStyle.center, { flex: 1 }]}>
         <View style={{ height: 600, justifyContent: "space-evenly" }}>
            <TouchableOpacity
               style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  marginLeft: 100,
                  borderWidth: 0,
               }}
               onPress={() => pickImage()}
            >
               {userData.url_image ? (
                  <Image
                     source={{ uri: userData.url_image }}
                     style={{
                        width: 100,
                        height: 100,
                        borderRadius: 100,
                        borderWidth: 0,
                     }}
                  />
               ) : (
                  <Image
                     source={BlankProfile}
                     style={{
                        width: 100,
                        height: 100,
                        borderRadius: 100,
                     }}
                  />
               )}
            </TouchableOpacity>
            <MyInput
               onChangeText={(text) => setNickname(text)}
               label={"First Name"}
               editable={false}
               value={userData.first_name}
               style={{
                  width: 300,
                  backgroundColor: "#efefef",
                  borderRadius: 5,
               }}
            />
            <MyInput
               onChangeText={(text) => setNickname(text)}
               label={"Last Name"}
               editable={false}
               value={userData.last_name}
               style={{
                  width: 300,
                  backgroundColor: "#efefef",
                  borderRadius: 5,
               }}
            />
            <MyInput
               onChangeText={(text) => setNickname(text)}
               label={"CPF"}
               editable={false}
               value={userData.cpf}
               style={{
                  width: 300,
                  backgroundColor: "#efefef",
                  borderRadius: 5,
               }}
            />
            <MyInput
               onChangeText={(text) => setNickname(text)}
               label={"Email"}
               editable={false}
               value={userData.email}
               style={{
                  width: 300,
                  backgroundColor: "#efefef",
                  borderRadius: 5,
               }}
            />
            <MyInput
               onChangeText={(text) => setNickname(text)}
               label={"Account name"}
               editable={false}
               value={accountData.nickname}
               style={{
                  width: 300,
                  backgroundColor: "#efefef",
                  borderRadius: 5,
               }}
            />
         </View>
      </View>
   );
}
