import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View, Pressable, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./pages/Menu";
import Transfer from "./pages/Transfer";
import EditProfile from "./pages/EditProfile";
import EditAddress from "./pages/EditAddress";

import Loan from "./pages/Loan";
import LoanList from "./pages/LoanList";
import TransferDone from "./pages/TransferDone";

const Stack = createStackNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Menu">
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
               name="TransferDone"
               component={TransferDone}
               options={{
                  headerShown: false,
               }}
            />
            <Stack.Screen
               name="EditProfile"
               component={EditProfile}
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

            {/* <Stack.Screen
               name="EditAddress"
               component={EditAddress}
               options={{
                  headerShown: false,
               }}/> */}
         </Stack.Navigator>
      </NavigationContainer>
   );
}