import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "react-native-axios";
import AntDesign  from "react-native-vector-icons/AntDesign";
import { DataTable } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";

export const Summary = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [currentDate, setCurrentDate] = useState(moment());

  const goToNextMonth = () => {
    const nextMonth = moment(currentDate).add(1, "months");
    setCurrentDate(nextMonth);
  };

  const goToPrevMonth = () => {
    const prevMonth = moment(currentDate).subtract(1, "months");
    setCurrentDate(prevMonth);
  };

  const formatDate = (date) => {
    return date.format("MMMM, YYYY");
  };
  const fetchAttendanceReport = async () => {
    try {
      const respone = await axios.get(
        `http://192.168.29.214:7070/attendance-report-all-employees`,
        {
          params: {
            month: 6,
            year: 2024,
          },
        }
      );

      setAttendanceData(respone.data.report);
    } catch (error) {
      console.log("Error fetching attendance");
    }
  };
  useEffect(() => {
    fetchAttendanceReport();
  }, []);
  console.log(attendanceData);
  return (
    <LinearGradient colors={["#cecef5", "white"]} style={{ flex: 1, padding:20}}>
    <ScrollView style={{ flex: 1, backgroundColor: "white", borderRadius:10 }}>
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
        <AntDesign
          onPress={goToPrevMonth}
          name="left"
          size={24}
          color="black"
        />
        <Text style={{color:"black"}}>{formatDate(currentDate)}</Text>
        <AntDesign
          onPress={goToNextMonth}
          name="right"
          size={24}
          color="black"
        />
      </View>

      <View style={{ padding:15 }}>
        {attendanceData?.map((item, index) => (
          <View key={index} style={{ marginVertical: 10 }}>
            <View style={{flexDirection:"row",alignItems:"center",gap:15}}>
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
                  {item?.name?.charAt(0)}
                </Text>
              </View>
              <View style={{flex:1}}>
                <Text style={{ fontSize: 16, fontWeight: "bold", color:"black" }}>
                  {item?.name}
                </Text>
                <Text style={{ marginTop: 5, color: "gray" }}>
                  {item?.designation} ({item?.employeeId})
                </Text>
              </View>
            </View>

            <View style={{marginTop:25,margin:5,padding:5,backgroundColor:"#A1FFCE",borderRadius:5}}>
                <DataTable style={{justifyContent:"space-evenly", marginLeft:15}}>
                    <DataTable.Header>
                        <DataTable.Title>P</DataTable.Title>
                        <DataTable.Title>A</DataTable.Title>
                        <DataTable.Title>HD</DataTable.Title>
                        <DataTable.Title>H</DataTable.Title>
                        <DataTable.Title>NW</DataTable.Title>
                    </DataTable.Header>
                    <DataTable.Row>
                        <DataTable.Cell>{item?.present}</DataTable.Cell>
                        <DataTable.Cell>{item?.absent}</DataTable.Cell>
                        <DataTable.Cell>{item?.halfday}</DataTable.Cell>
                        <DataTable.Cell>1</DataTable.Cell>
                        <DataTable.Cell>8</DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
    </LinearGradient>
  );
};


const styles = StyleSheet.create({});