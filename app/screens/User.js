import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
    Alert,
} from "react-native";
import React, { useState } from "react";
import moment from "moment";
import { useRoute } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";
import axios from "react-native-axios";
import LinearGradient from "react-native-linear-gradient";

export const UserDetails = () => {
    const route = useRoute();
    const { name, id, salary, designation } = route.params;
    const [attendanceStatus, setAttendanceStatus] = useState("present");
    const [currentDate, setCurrentDate] = useState(moment());

    const goToNextDay = () => {
        const nextDate = moment(currentDate).add(1, "days");
        setCurrentDate(nextDate);
    };

    const goToPrevDay = () => {
        const prevDate = moment(currentDate).subtract(1, "days");
        setCurrentDate(prevDate);
    };

    const formatDate = (date) => {
        return date.format("MMMM D, YYYY");
    };

    const submitAttendance = async () => {
        try {
            const attendanceData = {
                employeeId: id,
                employeeName: name,
                date: currentDate.format("MMMM D, YYYY"),
                status: attendanceStatus,
            };
            const response = await axios.post(
                "http://192.168.29.214:7070/attendance",
                attendanceData
            );

            if (response.status === 200) {
                Alert.alert(`Attendance submitted successfully for ${name}`);
            }
        } catch (error) {
            console.log("error submitting attendance", error);
        }
    };

    return (
        // <>
            <LinearGradient colors={["#cecef5", "white"]} style={{ flex: 1, padding:20}}>
                <View style={{ backgroundColor: "white", padding:20, borderRadius:10, marginTop:70 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginVertical: 20,
                        }}
                    >
                        <AntDesign onPress={goToPrevDay} name="left" size={24} color="black" />
                        <Text style={{color:"black"}}>{formatDate(currentDate)}</Text>
                        <AntDesign onPress={goToNextDay} name="right" size={24} color="black" />
                    </View>

                    <Pressable
                        style={{
                            marginVertical: 10,
                            marginHorizontal: 12,
                            flexDirection: "row",
                            gap: 10,
                        }}
                    >
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 8,
                                padding: 10,
                                backgroundColor: "#ffb9b9",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
                                {name.charAt(0)}
                            </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: "bold", color:"black" }}>
                                {name}
                            </Text>
                            <Text style={{ marginTop: 5, color: "gray" }}>
                                {designation} ({id})
                            </Text>
                        </View>
                    </Pressable>
                    <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 12 }}>
                        Basic Pay: {salary}
                    </Text>
                    <View style={{ marginHorizontal: 12 }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "500",
                                letterSpacing: 3,
                                marginTop: 7,
                            }}
                        >
                            ATTENDANCE
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 16,
                                marginVertical: 10,
                            }}
                        >
                            <Pressable
                                onPress={() => setAttendanceStatus("present")}
                                style={{
                                    backgroundColor: "#cecef5",
                                    padding: 10,
                                    borderRadius: 8,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                    flex: 1,
                                }}
                            >
                                {attendanceStatus === "present" ? (
                                    <FontAwesome5 name="dot-circle" size={24} color="black" />
                                ) : (
                                    <Entypo name="circle" size={24} color="black" />
                                )}
                                <Text style={{color:"black"}}>Present</Text>
                            </Pressable>

                            <Pressable
                                onPress={() => setAttendanceStatus("absent")}
                                style={{
                                    backgroundColor: "#cecef5",
                                    padding: 10,
                                    borderRadius: 8,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                    flex: 1,
                                }}
                            >
                                {attendanceStatus === "absent" ? (
                                    <FontAwesome5 name="dot-circle" size={24} color="black" />
                                ) : (
                                    <Entypo name="circle" size={24} color="black" />
                                )}
                                <Text style={{color:"black"}}>Absent</Text>
                            </Pressable>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 16,
                                marginVertical: 10,
                            }}
                        >
                            <Pressable
                                onPress={() => setAttendanceStatus("halfday")}
                                style={{
                                    backgroundColor: "#cecef5",
                                    padding: 10,
                                    borderRadius: 8,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                    flex: 1,
                                }}
                            >
                                {attendanceStatus === "halfday" ? (
                                    <FontAwesome5 name="dot-circle" size={24} color="black" />
                                ) : (
                                    <Entypo name="circle" size={24} color="black" />
                                )}
                                <Text style={{color:"black"}}>Half Day</Text>
                            </Pressable>

                            <Pressable
                                onPress={() => setAttendanceStatus("holiday")}
                                style={{
                                    backgroundColor: "#cccdff",
                                    padding: 10,
                                    borderRadius: 8,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                    flex: 1,
                                }}
                            >
                                {attendanceStatus === "holiday" ? (
                                    <FontAwesome5 name="dot-circle" size={24} color="black" />
                                ) : (
                                    <Entypo name="circle" size={24} color="black" />
                                )}
                                <Text style={{color:"black"}}>Holiday</Text>
                            </Pressable>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <TextInput
                                style={{
                                    borderRadius: 6,
                                    marginTop: 10,
                                    borderWidth: 2,
                                    borderColor: "#E0E0E0",
                                    padding: 10,
                                    flex: 1,
                                }}
                                placeholderTextColor="black"
                                placeholder="Advance / Loans"
                            />
                            <TextInput
                                style={{
                                    borderRadius: 6,
                                    marginTop: 10,
                                    borderWidth: 2,
                                    borderColor: "#E0E0E0",
                                    padding: 10,
                                    flex: 1,
                                }}
                                placeholderTextColor="black"
                                placeholder="Extra Bonus"
                            />
                        </View>

                        <Pressable
                            onPress={submitAttendance}
                            style={{
                                padding: 15,
                                backgroundColor: "#ffb9b9",
                                width: 200,
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: 30,
                                borderRadius: 6,
                            }}
                        >
                            <Text
                                style={{ textAlign: "center", color: "black", fontWeight: "bold" }}
                            >
                                Submit Attendance
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
    );
};


const styles = StyleSheet.create({});
