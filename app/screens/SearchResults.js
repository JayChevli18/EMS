import React from "react";
import { View, Text, FlatList } from "react-native";

export const SearchResults = ({ data, input, setInput }) => {
    return (
        <View style={{ padding: 10, marginTop: 5 }}>
            <FlatList data={data} renderItem={({ item }) => {
                if (item?.employeeName.toLowerCase().includes(input.toLowerCase())) {
                    return (
                        <View style={{ marginVertical: 10, gap: 15, flexDirection: "row" }}>
                            <View style={{ width: 50, height: 50, borderRadius: 10, padding: 10, backgroundColor: "#cecef5", alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ color: "black", fontSize: 22, }} >{item.employeeName.charAt(0)}</Text>
                            </View>

                            <View>
                                <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>{item?.employeeName}</Text>
                                <Text style={{ color: "grey", marginTop: 5, fontSize: 15 }}>{item?.employeeId}</Text>
                            </View>

                        </View>
                    )
                }
            }}>

            </FlatList>
        </View>
    )
}