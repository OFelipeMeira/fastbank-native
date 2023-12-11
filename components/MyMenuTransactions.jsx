import { View, FlatList } from "react-native";
import { Text } from "react-native";

export function MyMenuTransactions(props) {
    return (
        <View style={{ height: 400, paddingTop: 5 }}>

            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "600",
                    paddingLeft: 15,
                    color: "#00F",
                    letterSpacing: 1.2,
                }}
            >
                {props.label}
            </Text>

            <View style={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: "#00F",
            }}>
                <FlatList
                    style={{ height: "100%", width: "100%", padding: 10 }}
                    data={props.data}
                    renderItem={({ item }) => (

                        <View style={{
                            width: 250,
                            height:80,
                            marginBottom: 10,
                            borderRadius: 10,
                            backgroundColor: "#00F",
                            justifyContent:"space-around",
                            padding:5
                        }}>
                            <Text style={{
                                marginLeft: 5,
                                padding: 2,
                                color:"#FFF",
                                fontSize:16,
                                fontWeight: "400"
                            }}>
                                ${item.value}
                            </Text>

                            <Text style={{
                                marginLeft: 5,
                                padding: 2,
                                color:"#FFF",
                                fontSize:16,
                                fontWeight: "400"
                            }}>
                                {/* {item.receiver.agency} {item.receiver.number} */}
                                XXXX XXXX.XXXX.XXXX.XXXX
                            </Text>

                            <Text style={{
                                marginLeft: 5,
                                padding: 2,
                                color:"#FFF",
                                fontSize:16,
                                fontWeight: "400"
                            }}>
                                {item.description}
                            </Text>

                        </View>
                    )}
                />
            </View>
        </View>
    )
}