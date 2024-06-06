import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Pressable,
    Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "react-native-axios";
import LinearGradient from "react-native-linear-gradient";

export const AddDetailscreen = () => {
    const [name, setName] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [dob, setDob] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [joiningDate, setJoiningDate] = useState("");
    const [salary, setSalary] = useState("");
    const [address, setAddress] = useState("");
    const [designation, setDesignation] = useState("");
    const handleRegister = () => {
        const employeeData = {
            employeeName: name,
            employeeId: employeeId,
            designation: designation,
            phoneNumber: mobileNo,
            dateOfBirth: dob,
            joiningDate: joiningDate,
            activeEmployee: true,
            salary: salary,
            address: address,
        };
        console.log(employeeData);
        axios
            .post("http://192.168.29.214:7070/addEmployee", employeeData)
            .then((response) => {
                console.log(response);
                Alert.alert(
                    "Registration Successful",
                    "You have been registered successfully"
                );
                setName("");
                setEmployeeId("");
                setDob("");
                setMobileNo("");
                setSalary("");
                setAddress("");
                setJoiningDate("");
                setDesignation("");
            })
            .catch((error) => {
                console.log("catch");
                Alert.alert(
                    "Registration Fail",
                    "An error occurred during registration"
                );
                console.log("register failed", error);
            });
    };
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <LinearGradient colors={["#cecef5", "#efefff"]} style={{ flex: 1 }}>
                <View style={{ padding: 20, marginTop: 20, }}>
                    <View style={{ padding: 20, marginTop: 20, backgroundColor: "white", borderRadius: 10 }}>
                        <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>
                            Add a New Employee
                        </Text>

                        <TextInput
                            style={{
                                padding: 10,
                                borderColor: "#D0D0D0",
                                borderWidth: 1,
                                marginTop: 10,
                                borderRadius: 5,
                                color: "black"
                            }}
                            placeholder="India"
                            placeholderTextColor={"black"}
                        />

                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>
                                Full Name (First and last Name)
                            </Text>
                            <TextInput
                                value={name}
                                onChangeText={(text) => setName(text)}
                                style={{
                                    padding: 10,
                                    borderColor: "#D0D0D0",
                                    borderWidth: 1,
                                    marginTop: 10,
                                    borderRadius: 5,
                                    color: "black"
                                }}
                                placeholder="enter your name"
                                placeholderTextColor={"black"}
                            />
                        </View>

                        <View>
                            <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>Employee Id</Text>
                            <TextInput
                                value={employeeId}
                                onChangeText={(text) => setEmployeeId(text)}
                                style={{
                                    padding: 10,
                                    borderColor: "#D0D0D0",
                                    borderWidth: 1,
                                    marginTop: 10,
                                    borderRadius: 5,
                                }}
                                placeholder="Employee Id"
                                placeholderTextColor={"black"}
                            />
                        </View>

                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>Designation</Text>
                            <TextInput
                                value={designation}
                                onChangeText={(text) => setDesignation(text)}
                                style={{
                                    padding: 10,
                                    borderColor: "#D0D0D0",
                                    borderWidth: 1,
                                    marginTop: 10,
                                    borderRadius: 5,
                                }}
                                placeholder="Designation"
                                placeholderTextColor={"black"}
                            />
                        </View>

                        <View>
                            <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>
                                Mobile Number
                            </Text>
                            <TextInput
                                value={mobileNo}
                                onChangeText={(text) => setMobileNo(text)}
                                style={{
                                    padding: 10,
                                    borderColor: "#D0D0D0",
                                    borderWidth: 1,
                                    marginTop: 10,
                                    borderRadius: 5,
                                }}
                                placeholder="Mobile No"
                                placeholderTextColor={"black"}
                            />
                        </View>

                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>
                                Date of Birth
                            </Text>
                            <TextInput
                                value={dob}
                                onChangeText={(text) => setDob(text)}
                                style={{
                                    padding: 10,
                                    borderColor: "#D0D0D0",
                                    borderWidth: 1,
                                    marginTop: 10,
                                    borderRadius: 5,
                                }}
                                placeholder="Enter Date of Birth"
                                placeholderTextColor={"black"}
                            />
                        </View>

                        <View>
                            <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>Joining Date</Text>
                            <TextInput
                                value={joiningDate}
                                onChangeText={(text) => setJoiningDate(text)}
                                style={{
                                    padding: 10,
                                    borderColor: "#D0D0D0",
                                    borderWidth: 1,
                                    marginTop: 10,
                                    borderRadius: 5,
                                }}
                                placeholder="Joining Date"
                                placeholderTextColor={"black"}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: 10,
                            }}
                        >
                            <Text>Active Employee</Text>
                            <Text>True</Text>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>Salary</Text>
                            <TextInput
                                value={salary}
                                onChangeText={(text) => setSalary(text)}
                                style={{
                                    padding: 10,
                                    borderColor: "#D0D0D0",
                                    borderWidth: 1,
                                    marginTop: 10,
                                    borderRadius: 5,
                                }}
                                placeholder="Enter Salary"
                                placeholderTextColor={"black"}
                            />
                        </View>

                        <View>
                            <Text style={{ fontSize: 17, fontWeight: "bold", color: "black" }}>Address</Text>
                            <TextInput
                                value={address}
                                onChangeText={(text) => setAddress(text)}
                                style={{
                                    padding: 10,
                                    borderColor: "#D0D0D0",
                                    borderWidth: 1,
                                    marginTop: 10,
                                    borderRadius: 5,
                                }}
                                placeholder="Enter Address"
                                placeholderTextColor={"black"}
                            />
                        </View>

                        <Pressable
                            onPress={handleRegister}
                            style={{
                                backgroundColor: "#e3cbff",
                                padding: 10,
                                marginTop: 20,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 5,
                            }}
                        >
                            <Text style={{ fontWeight: "bold", color: "black", }}>
                                Add Employee
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    );
};


const styles = StyleSheet.create({});