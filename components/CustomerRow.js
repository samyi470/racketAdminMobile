import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    SafeAreaView,
    FlatList,
    Modal,
} from "react-native";
export const CustomerRow = ({ customerDetails}) => {
    return (
        <View style={styles.orderContainer}>
            <View>
                <Text style={styles.racketBrand}>
                    {`${customerDetails.name} `}
                </Text>
            </View>
            <View>
                {/* <Text style={styles.racketBrand}>hello</Text> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    orderContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#36454f",
    },
    racketBrand: {
        color: "white",
        fontSize: 20,
        padding: 20,
    },
});
