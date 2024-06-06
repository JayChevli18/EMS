import React, { useEffect, useState } from "react";
import {View, Text, Pressable, TextInput} from "react-native";
import axios from "react-native-axios";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SearchResults } from "./SearchResults";

export const EmployeeScreen=({navigation})=>{
    
    const [employees, setEmployee]=useState([]);
    const [input, setInput] = useState("");
  
    useEffect(() => {
        const fetchEmp = async () => {
            try {
                console.log("Fetching employees...");
                const response = await axios.get("http://192.168.29.214:7070/employees");
                console.log(response);
                if (response.data) {
                    setEmployee(response.data);
                    console.log("Fetched employees:", response.data);
                } else {
                    console.error("No data found in the response");
                }
            } catch (error) {
                console.error("Error fetching employees:", error);
            }
        };
        fetchEmp();
    }, []);
    console.log(employees);

    return(
        <View style={{ flex: 1, padding:10, backgroundColor: "white" }}>
        <View
          style={{
            marginTop:7,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Ionicons
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 10 }}
            name="arrow-back"
            size={30}
            color="black"
          />
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 7,
              gap: 10,
              color:"black",
              backgroundColor: "white",
              borderRadius: 3,
              height: 40,
              flex: 1,
            }}
          >
            <AntDesign
              style={{ marginLeft: 10 }}
              name="search1"
              size={30}
              color="black"
            />
            <TextInput
              value={input}
              onChangeText={(text) => setInput(text)}
              style={{ flex: 1, fontSize:20,padding:1, marginLeft:5}}
              placeholder="Search"
            />
  
            {employees.length > 0 && (
              <View>
                <Pressable onPress={() => navigation.navigate("AddDetailscreen")}>
                  <AntDesign name="pluscircle" size={30} color="#1a00aa" />
                </Pressable>
              </View>
            )}
          </Pressable>
        </View>
  
        {employees.length > 0 ? (
          <SearchResults data={employees} input={input} setInput={setInput} />
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>No Data</Text>
            <Text>Press on the plus button and add your Employee</Text>
            <Pressable onPress={() => navigation.navigate("AddDetailscreen")}>
              <AntDesign
                style={{ marginTop: 30 }}
                name="pluscircle"
                size={24}
                color="black"
              />
            </Pressable>
          </View>
        )}
      </View>    )
}