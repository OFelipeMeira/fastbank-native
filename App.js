// import { StatusBar } from "expo-status-bar";
// import { FlatList, Text, View, Pressable, Image } from "react-native";
import { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";
import Register from "./pages/Register";
import RegisterAccount from "./pages/RegisterAccount";
import SelectAccount from "./pages/SelectAccount";
import Menu from "./pages/Menu";
import Transfer from "./pages/Transfer";
import Loan from "./pages/Loan";
import LoanList from "./pages/LoanList";
import Credit from "./pages/Credit";
import CreditList from "./pages/CreditList";

import Profile from "./pages/Profile";

// import EditProfile from "./pages/EditProfile";
// import EditAddress from "./pages/EditAddress";

// import TransferDone from "./pages/TransferDone";

const Stack = createStackNavigator();

export default function App() {
   return (
      <>
         <NavigationContainer>
            {/* <Stack.Navigator initialRouteName="Login"> */}
            <Stack.Navigator initialRouteName="Login">
               <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{
                     headerShown: false,
                  }}
               />

               <Stack.Screen
                  name="Register"
                  component={Register}
                  options={{
                     headerShown: false,
                  }}
               />

               <Stack.Screen
                  name="RegisterAccount"
                  component={RegisterAccount}
                  options={{
                     headerShown: false,
                  }}
               />

               <Stack.Screen
                  name="SelectAccount"
                  component={SelectAccount}
                  options={{
                     headerShown: false,
                  }}
               />

               <Stack.Screen
                  name="Menu"
                  component={Menu}
                  options={{
                     headerShown: false,
                  }}
               />

               <Stack.Screen
                  name="Transfer"
                  component={Transfer}
                  options={{
                     headerShown: false,
                  }}
               />

               <Stack.Screen
                  name="Loan"
                  component={Loan}
                  options={{
                     headerShown: false,
                  }}
               />
               <Stack.Screen
                  name="LoanList"
                  component={LoanList}
                  options={{
                     headerShown: false,
                  }}
               />
               <Stack.Screen
                  name="Credit"
                  component={Credit}
                  options={{
                     headerShown: false,
                  }}
               />
               <Stack.Screen
                  name="CreditList"
                  component={CreditList}
                  options={{
                     headerShown: false,
                  }}
               />

               <Stack.Screen
                  name="Profile"
                  component={Profile}
                  options={{
                     headerShown: false,
                  }}
               />

               {/* 
               
               <Stack.Screen
                  name="EditProfile"
                  component={EditProfile}
                  options={{
                     headerShown: false,
                  }}
               />
               <Stack.Screen
                  name="EditAddress"
                  component={EditAddress}
                  options={{
                     headerShown: false,
                  }}
               /> */}
            </Stack.Navigator>
         </NavigationContainer>
      </>
   );
}
