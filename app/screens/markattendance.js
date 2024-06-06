import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "react-native-axios";
import AntDesign  from "react-native-vector-icons/AntDesign";
import LinearGradient from "react-native-linear-gradient";


export const Markattendance = ({ navigation }) => {
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

    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await axios.get("http://192.168.29.214:7070/employees");
                setEmployees(response.data);
            } catch (error) {
                console.log("error fetching employee data", error);
            }
        };
        fetchEmployeeData();
    }, []);
    const [attendance, setAttendance] = useState([]);
    const fetchAttendanceData = async () => {
        try {
            const response = await axios.get(`http://192.168.29.214:7070/attendance`, {
                params: {
                    date: currentDate.format("MMMM D, YYYY"),
                },
            });
            setAttendance(response.data);
        } catch (error) {
            console.log("error fetching attendance data", error);
        }
    };

    useEffect(() => {
        fetchAttendanceData();
    }, [currentDate]);
    const employeeWithAttendance = employees.map((employee) => {
        const attendanceRecord = attendance.find(
            (record) => record.employeeId === employee.employeeId
        );

        return {
            ...employee,
            status: attendanceRecord ? attendanceRecord.status : "", // 'Not Marked' or a default status
        };
    });
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
        <LinearGradient colors={["#cecef5", "white"]} style={{ flex: 1, }}>
            <Pressable>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginVertical: 20,
                        color:"black",
                        top:10,
                        marginBottom:40
                    }}
                >
                    <AntDesign
                        onPress={goToPrevDay}
                        name="left"
                        size={24}
                        color="black"
                    />
                    <Text style={{color:"black"}}>{formatDate(currentDate)}</Text>
                    <AntDesign
                        onPress={goToNextDay}
                        name="right"
                        size={24}
                        color="black"
                    />
                </View>

                <View style={{ marginHorizontal: 12, backgroundColor:"white",marginTop:10, padding:10, borderRadius:10 }}>
                    {employeeWithAttendance.map((item, index) => (
                        <Pressable
                            onPress={() =>
                                navigation.navigate("UserDetails", {
                                    name: item.employeeName,
                                    id: item.employeeId,
                                    salary: item?.salary,
                                    designation: item?.designation,
                                })
                            }
                            key={index}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 10,
                                marginVertical: 10,
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
                                <Text style={{ color: "black", fontSize: 20, fontWeight:"bold" }}>
                                    {item?.employeeName?.charAt(0)}
                                </Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color:"black" }}>
                                    {item?.employeeName}
                                </Text>
                                <Text style={{ marginTop: 5, color: "grey" }}>
                                    {item?.designation} ({item?.employeeId})
                                </Text>
                            </View>
                            {item?.status && (
                                <View
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 8,
                                        padding: 10,
                                        backgroundColor: "#FAE6E6",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Text
                                        style={{ fontSize: 20, color: "black", fontWeight: "bold" }}
                                    >
                                        {item.status.charAt(0)}
                                    </Text>
                                </View>
                            )}
                        </Pressable>
                    ))}
                </View>
            </Pressable>
        </LinearGradient>
        </View>
    );
};


const styles = StyleSheet.create({});