import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View, Pressable, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Menu from "./pages/Menu";
import Transfer from "./pages/Transfer";

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
         </Stack.Navigator>
      </NavigationContainer>
   );
}

{
   /* 
<View style={{ flex: 1 }}>
    {/* <Login /> */
}
{
   /* <Register /> */
}
{
   /* <Menu /> */
}
{
   /* <Transfer />
    <StatusBar style="auto" />
</View> 
*/
}
