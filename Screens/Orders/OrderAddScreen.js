import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { Appbar } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { OrderAddForm } from "../../components/OrderAddForm";
import { StatusBar } from "expo-status-bar";
import DropDownPicker from "react-native-dropdown-picker";

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

export const OrderAddScreen = (props) => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    width: "100%",
                    height: STATUS_BAR_HEIGHT,
                    backgroundColor: "#1e3d58",
                }}
            ></View>
            <OrderAddForm {...props} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        alignItems: "center",
        backgroundColor: "#36454f",
        justifyContent: "center",
    },
});
