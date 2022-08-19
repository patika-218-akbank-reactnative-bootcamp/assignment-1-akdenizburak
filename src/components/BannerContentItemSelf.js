import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BannerContentItemSelf = () => {
    return (
        <View style={styles.imageContainer}>
            <Text style={styles.addBadge}>+</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: "white",
        borderWidth: 3,
        borderColor: "firebrick",
        marginLeft: 10,
        alignSelf: "center",
    },
    addBadge: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: "dodgerblue",
        borderColor:"white",
        borderWidth:2,
        marginBottom: -10,
        position: "absolute",
        right: -1,
        bottom: 8,
        color:"white",
        textAlign:"center",
        fontSize:17,
        fontWeight:"bold",
    }
})

export default BannerContentItemSelf;