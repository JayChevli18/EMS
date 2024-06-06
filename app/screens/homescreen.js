import React from 'react';
import { Text, StyleSheet, View, ScrollView, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//import { markattendance } from './markattendance';

export const HomeScreen = ({navigation}) => {
    return (
        <ScrollView>
            <LinearGradient colors={["#cecef5", "white"]} style={{ flex: 1 }}>
                <View style={{ padding: 12 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Feather name="bar-chart" size={30} color="black"></Feather>
                        <Text style={{ fontSize: 25, color: "black", fontWeight: "bold" }}>EMS</Text>
                        <Entypo name="lock" size={30} color="black"></Entypo>
                    </View>


                    <View style={{ marginTop: 30, flexDirection: "row", alignItems: "center", gap: 20 }}>
                        <Pressable
                            style={{
                                backgroundColor: "#FAE6E6",
                                padding: 12,
                                borderRadius: 6,
                                alignItems: "center",
                                justifyContent: "center",
                                flex: 1
                            }}
                            onPress={()=>{navigation.navigate("Employee")}}
                        >
                            <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Icon name="people-alt" color="black" size={24}></Icon>
                            </View>
                            <Text style={{ marginTop: 7, color: "black", fontWeight: "bold", fontSize: 14 }}>Employee List</Text>
                        </Pressable>

                        <Pressable
                            style={{
                                backgroundColor: "#FAE6E6",
                                padding: 12,
                                borderRadius: 6,
                                alignItems: "center",
                                justifyContent: "center",
                                flex: 1
                            }}
                            onPress={()=>{navigation.navigate("Markattendance")}}
                        >
                            <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Icon name="people-alt" color="black" size={24}></Icon>
                            </View>
                            <Text style={{ marginTop: 7, color: "black", fontWeight: "bold", fontSize: 14 }}>Mark Attendance</Text>
                        </Pressable>
                    </View>

                    <View style={{ marginTop: 30, backgroundColor: "white", borderRadius: 10, padding: 7 }}>
                        <Pressable
                            style={{ alignItems: "center", flexDirection: "row", backgroundColor: "#cecef5", padding: 7, borderRadius: 10, marginVertical: 10 }}
                        >
                            <View style={{ padding: 7, width: 50, height: 50, borderRadius: 10, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Icon name="newspaper" size={30} color="black"></Icon>
                            </View>
                            <Text style={{ marginLeft: 15, flex: 1, fontSize: 18, fontWeight: 600, color: "black" }}>Attendance Report</Text>
                            <View style={{ padding: 7, width: 50, height: 50, borderRadius: 10, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Entypo name="chevron-right" size={30} color="black"></Entypo>
                            </View>
                        </Pressable>


                        <Pressable
                            style={{ alignItems: "center", flexDirection: "row", backgroundColor: "#cecef5", padding: 7, borderRadius: 10, marginVertical: 10 }}
                            onPress={()=>{navigation.navigate("Summary")}}
                        >
                            <View style={{ padding: 7, width: 50, height: 50, borderRadius: 10, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Octicons name="repo-clone" size={30} color="black"></Octicons>
                            </View>
                            <Text style={{ marginLeft: 15, flex: 1, fontSize: 18, fontWeight: 600, color: "black" }}>Summary Report</Text>
                            <View style={{ padding: 7, width: 50, height: 50, borderRadius: 10, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Entypo name="chevron-right" size={30} color="black"></Entypo>
                            </View>
                        </Pressable>


                        <Pressable
                            style={{ alignItems: "center", flexDirection: "row", backgroundColor: "#cecef5", padding: 7, borderRadius: 10, marginVertical: 10 }}
                        >
                            <View style={{ padding: 7, width: 50, height: 50, borderRadius: 10, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Octicons name="report" size={30} color="black"></Octicons>
                            </View>
                            <Text style={{ marginLeft: 15, flex: 1, fontSize: 18, fontWeight: 600, color: "black" }}>All Generate Report</Text>
                            <View style={{ padding: 7, width: 50, height: 50, borderRadius: 10, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Entypo name="chevron-right" size={30} color="black"></Entypo>
                            </View>
                        </Pressable>


                        <Pressable
                            style={{ alignItems: "center", flexDirection: "row", backgroundColor: "#cecef5", padding: 7, borderRadius: 10, marginVertical: 10 }}
                        >
                            <View style={{ padding: 7, width: 50, height: 50, borderRadius: 10, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Icon name="people" size={30} color="black"></Icon>
                            </View>
                            <Text style={{ marginLeft: 15, flex: 1, fontSize: 18, fontWeight: 600, color: "black" }}>Overtime Employee</Text>
                            <View style={{ padding: 7, width: 50, height: 50, borderRadius: 10, backgroundColor: "white", alignItems: "center", justifyContent: "center" }}>
                                <Entypo name="chevron-right" size={30} color="black"></Entypo>
                            </View>
                        </Pressable>
                    </View>


                    <View
                        style={{
                            marginTop: 20,
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 20,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "#FAE6E6",
                                borderRadius: 10,
                                padding: 10,
                                alignItems: "center",

                                justifyContent: "center",
                                flex: 1,
                            }}
                        >
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <MaterialCommunityIcons
                                    name="guy-fawkes-mask"
                                    size={30}
                                    color="black"
                                />
                            </View>
                            <Text style={{ marginTop: 7,color: "black", fontWeight: "bold", fontSize: 14  }}>Attendance Criteria</Text>
                        </View>
                        <View
                            style={{
                                backgroundColor: "#ccffcc",
                                borderRadius: 10,
                                padding: 10,
                                alignItems: "center",
                                justifyContent: "center",
                                flex: 1,
                            }}
                        >
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 7,
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Feather name="bar-chart" size={30} color="black" />
                            </View>
                            <Text style={{ marginTop: 7, color: "black", fontWeight: "bold", fontSize: 14  }}>Increased Workflow</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 20,
                        }}
                    >
                        <View
                            style={{
                                backgroundColor: "#ffbfe2",
                                borderRadius: 10,
                                padding: 10,
                                alignItems: "center",

                                justifyContent: "center",
                                flex: 1,
                            }}
                        >
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 7,
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <MaterialCommunityIcons
                                    name="guy-fawkes-mask"
                                    size={30}
                                    color="black"
                                />
                            </View>
                            <Text style={{ marginTop: 7,color: "black", fontWeight: "bold", fontSize: 14  }}>Cost Savings</Text>
                        </View>
                        <View
                            style={{
                                backgroundColor: "#ffb9b9",
                                borderRadius: 10,
                                padding: 10,
                                alignItems: "center",
                                justifyContent: "center",
                                flex: 1,
                            }}
                        >
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 10,
                                    backgroundColor: "white",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Feather name="bar-chart" size={30} color="black" />
                            </View>
                            <Text style={{ marginTop: 7,color: "black", fontWeight: "bold", fontSize: 14  }}>Employee Performance</Text>
                        </View>
                    </View>


                </View>
            </LinearGradient>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
});

